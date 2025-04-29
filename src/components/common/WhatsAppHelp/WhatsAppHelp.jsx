import React, { useState } from "react";
import "./WhatsAppHelp.css";

const WhatsAppHelp = ({
  phoneNumber = "573000000000",
  message = "Hola, necesitas información sobre la Institucion Educativa.",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBubbleVisible, setBubbleVisible] = useState(true);
  const [animateContact, setAnimateContact] = useState(false)

  const handleWhatsAppClick = () => {
    if (!isOpen) {
      setBubbleVisible(false);

      setTimeout(() => {
        setIsOpen(true);
        setAnimateContact(true);
      }, 300)
    } else {
      setIsOpen(false);
      setAnimateContact(false);

      setTimeout(() => {
        setBubbleVisible(true);
      }, 100)
    }
  };

  const redirectToWhatsApp = () => {
    const formattedNumber = phoneNumber.startsWith("0")
      ? phoneNumber.substring(1)
      : phoneNumber;

    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-help-widget">
      {isOpen && (
        <div className="whatsapp-dropdown">
          <div className="whatsapp-dropdown-header">
            <div className="whatsapp-dropdown-header-icon">
              <i className="bi bi-whatsapp"></i>
            </div>
            <div>
              <span>Habla con nosotros</span>
              <div className="whatsapp-header-message">Hola</div>
            </div>
          </div>
          <div className="whatsapp-dropdown-message">
            En unos minutos nos comunicaremos
          </div>
          <div
            className={`whatsapp-dropdown-contact ${
              animateContact ? "animate-up" : ""
            }`}
            onClick={redirectToWhatsApp}
          >
            <div className="whatsapp-contact-icon">
              <i className="bi bi-whatsapp"></i>
            </div>
            <div className="whatsapp-contact-info">
              <div className="whatsapp-contact-name">Institución Educativa La Campana</div>
              <div className="whatsapp-contact-text">Habla con nosotros</div>
            </div>
          </div>
        </div>
      )}

      <div className="whatsapp-button-row">
        {isBubbleVisible && (
          <div className="whatsapp-text-bubble bubble-show">
            ¿Podemos ayudarte?
            <br />
            Habla con nosotros
          </div>
        )}

        <button
          className={`whatsapp-button ${isOpen ? "active" : ""}`}
          onClick={handleWhatsAppClick}
        >
          {isOpen ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-whatsapp"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppHelp;
