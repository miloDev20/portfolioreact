import { ArrowDown } from "lucide-react";


export const Hero = () =>{
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
          Hi, I’m <span className="text-primary text-glow">Emilio</span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 mb-8 animate-fade-in-delay-1">
          I’m a passionate <span className="font-semibold">Developer</span> who loves
          building beautiful and performant web applications.
        </p>

        <div className="flex justify-center space-x-4 animate-fade-in-delay-2">
          <a href="#projects" className="cosmic-button">
            View Projects
          </a>
          <a href="#contact" className="cosmic-button bg-foreground text-background hover:shadow-lg">
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
