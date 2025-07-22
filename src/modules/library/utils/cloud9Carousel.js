import $ from "jquery";

// Aseguramos que $.fn existe
if (!$.fn) $.fn = {};

(function ($) {
  const transform = (() => {
    const vendors = ["webkit", "moz", "ms"];
    const style = document.createElement("div").style;
    let trans = "transform" in style ? "transform" : undefined;

    for (let i = 0; i < vendors.length; i++) {
      const prop = vendors[i] + "Transform";
      if (prop in style) {
        trans = prop;
        break;
      }
    }
    return trans;
  })();

  const Item = function (image, options) {
    image.item = this;
    this.image = image;
    this.fullWidth = image.width;
    this.fullHeight = image.height;
    this.alt = image.alt;
    this.title = image.title;

    image.style.position = "absolute";
    image = $(image);

    this.element = this.image = image[0];

    if (transform && options.transforms) {
      this.element.style[transform + "Origin"] = "0 0";
    }

    this.moveTo = function (x, y, scale) {
      this.width = this.fullWidth * scale;
      this.height = this.fullHeight * scale;
      this.x = x;
      this.y = y;
      this.scale = scale;

      const style = this.element.style;
      style.zIndex = "" + ((scale * 100) | 0);

      if (transform && options.transforms) {
        style[transform] = `translate(${x}px, ${y}px) scale(${scale})`;
      } else {
        style.width = this.width + "px";
        style.left = x + "px";
        style.top = y + "px";
      }
    };
  };

  const time = () => (!window.performance || !window.performance.now ? Date.now() : performance.now());

  let cancelFrame = window.cancelAnimationFrame || window.cancelRequestAnimationFrame;
  let requestFrame = window.requestAnimationFrame;

  (function () {
    const vendors = ["webkit", "moz", "ms"];
    for (let i = 0; i < vendors.length && !cancelFrame; i++) {
      cancelFrame = window[vendors[i] + "CancelAnimationFrame"] || window[vendors[i] + "CancelRequestAnimationFrame"];
      requestFrame = requestFrame || window[vendors[i] + "RequestAnimationFrame"];
    }
  })();

  const Carousel = function (element, options) {
    const self = this;
    const $container = $(element);
    this.items = [];

    this.xOrigin = options.xOrigin ?? $container.width() * 0.5;
    this.yOrigin = options.yOrigin ?? $container.height() * 0.1;
    this.xRadius = options.xRadius ?? $container.width() / 2.3;
    this.yRadius = options.yRadius ?? $container.height() / 6;
    this.farScale = options.farScale ?? 0.5;

    this.rotation = this.destRotation = Math.PI / 2;
    this.speed = options.speed ?? 4;
    this.smooth = options.smooth ?? true;
    this.fps = options.fps ?? 30;
    this.autoPlayAmount = options.autoPlay ?? 0;
    this.autoPlayDelay = options.autoPlayDelay ?? 2000;
    this.onLoaded = options.onLoaded;
    this.onRendered = options.onRendered;

    this.itemOptions = { transforms: options.transforms ?? true };
    $container.css({ position: "relative", overflow: "hidden" });

    this.rotateItem = function (itemIndex, rotation) {
      const item = this.items[itemIndex];
      const sin = Math.sin(rotation);
      const scale = this.farScale + (1 - this.farScale) * ((sin + 1) / 2);

      item.moveTo(
        this.xOrigin + scale * (Math.cos(rotation) * this.xRadius - item.fullWidth * 0.5),
        this.yOrigin + scale * sin * this.yRadius,
        scale
      );
    };

    this.render = function () {
      const count = this.items.length;
      const spacing = (2 * Math.PI) / count;
      let radians = this.rotation;

      for (let i = 0; i < count; i++) {
        this.rotateItem(i, radians);
        radians += spacing;
      }

      if (typeof this.onRendered === "function") this.onRendered(this);
    };

    this.playFrame = function () {
      const rem = self.destRotation - self.rotation;
      const now = time();
      const dt = (now - self.lastTime) * 0.002;
      self.lastTime = now;

      if (Math.abs(rem) < 0.003) {
        self.rotation = self.destRotation;
        self.pause();
      } else {
        self.rotation = self.destRotation - rem / (1 + self.speed * dt);
        self.scheduleNextFrame();
      }

      self.render();
    };

    this.scheduleNextFrame = function () {
      this.lastTime = time();
      this.timer = this.smooth && cancelFrame
        ? requestFrame(self.playFrame)
        : setTimeout(self.playFrame, 1000 / this.fps);
    };

    this.play = function () {
      if (this.timer === 0) this.scheduleNextFrame();
    };

    this.pause = function () {
      this.smooth && cancelFrame
        ? cancelFrame(this.timer)
        : clearTimeout(this.timer);
      this.timer = 0;
    };

    this.go = function (count) {
      this.destRotation += ((2 * Math.PI) / this.items.length) * count;
      this.play();
    };

    this.autoPlay = function () {
      this.autoPlayTimer = setInterval(() => self.go(self.autoPlayAmount), this.autoPlayDelay);
    };

    this.enableAutoPlay = function () {
      $container.on("mouseover", () => clearInterval(self.autoPlayTimer));
      $container.on("mouseout", () => self.autoPlay());
      this.autoPlay();
    };

    this.bindControls = function () {
      if (options.buttonLeft) {
        options.buttonLeft.on("click", () => {
          self.go(-1);
          return false;
        });
      }

      if (options.buttonRight) {
        options.buttonRight.on("click", () => {
          self.go(1);
          return false;
        });
      }
    };

    const images = $container.find("." + options.itemClass);

    this.finishInit = function () {
      for (let i = 0; i < images.length; i++) {
        const im = images[i];
        if (im.width === undefined || (im.complete !== undefined && !im.complete)) return;
      }

      clearInterval(this.initTimer);

      for (let i = 0; i < images.length; i++) {
        this.items.push(new Item(images[i], this.itemOptions));
      }

      $container.on("mousedown onselectstart", () => false);
      if (this.autoPlayAmount !== 0) this.enableAutoPlay();
      this.bindControls();
      this.render();

      if (typeof this.onLoaded === "function") this.onLoaded(this);
    };

    this.initTimer = setInterval(() => self.finishInit(), 50);
  };

  // Plugin
  $.fn.Cloud9Carousel = function (options) {
    return this.each(function () {
      options = {
        ...{
          xOrigin: null,
          yOrigin: null,
          xRadius: null,
          yRadius: null,
          farScale: 0.5,
          transforms: true,
          smooth: true,
          fps: 30,
          speed: 4,
          autoPlay: 0,
          autoPlayDelay: 2000,
          bringToFront: false,
          itemClass: "cloud9-item",
          handle: "carousel",
        },
        ...options,
      };

      $(this).data(options.handle, new Carousel(this, options));
    });
  };
})(jQuery);

export default jQuery;

