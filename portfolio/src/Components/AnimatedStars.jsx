export default function AnimatedStars() {
  // Generamos un array de estrellas
  const stars = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {stars.map((_, i) => (
        <svg
          key={i}
          className="absolute text-primary/40 animate-float animate-pulse"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <path d="M12 2l2.9 6.9L22 10l-5 4.8L18.2 22 12 18.5 5.8 22 7 14.8 2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}
