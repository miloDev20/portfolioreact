import Star from "./Star";


export default function AnimatedStars() {
  // Generamos un array de estrellas
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <Star key={i} size={20 + Math.random() * 10} />
      ))}
    </div>
  );
}
