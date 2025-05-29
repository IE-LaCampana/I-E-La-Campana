import { useState } from "react";

export default function useFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped((prev) => !prev);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return { isFlipped, isAnimating, handleFlip };
}
