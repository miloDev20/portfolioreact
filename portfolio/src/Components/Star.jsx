import {useState } from "react";

export default function Star({ size = 20, duration = 4 }) {
  const [position, setPosition] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
  });
  const [delay] = useState(Math.random()*duration, duration);

  // Cada vez que termina la animación, se actualiza la posición
  const handleAnimationIteration = () => {
    setPosition({
      top: Math.random() * 100,
      left: Math.random() * 100,
    });
  };

  

  return (


    <div
      className="absolute will-change-transform"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`
      }}
    >
        <svg
        className="absolute opacity-0 text-primary/60 animate-twinkle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{
            top: `${position.top}%`,
            left: `${position.left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
        }}
        onAnimationIteration={handleAnimationIteration}
        >
        <path d="M12 2l2.9 6.9L22 10l-5 4.8L18.2 22 12 18.5 5.8 22 7 14.8 2 10l7.1-1.1L12 2z" />
        </svg>

    </div>
  );
}
