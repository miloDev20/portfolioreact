import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className=" w-full top-5 left-5 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-primary text-glow tracking-wide hover:opacity-80 transition"
        >
          MyPortfolio
        </a>

        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botón menú hamburguesa - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden hover:text-primary transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b animate-fade-in">
          <div className="flex flex-col items-center space-y-6 py-6">
            {links.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium hover:text-primary transition-colors animate-fade-in-delay-${i+1}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
