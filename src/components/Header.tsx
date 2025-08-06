import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Teste Grátis", href: "#free-test" },
    { name: "Níveis", href: "#levels" },
    { name: "Modalidades", href: "#modalities" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-russian-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-russian rounded-full flex items-center justify-center">
              <span className="text-russian-white font-bold text-lg">РС</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground">
              Russo <span className="text-primary">Simplificado</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm md:text-base text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection('#free-test')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm px-4 py-2"
            >
              Teste Grátis
            </Button>
            <Button
              onClick={() => scrollToSection('#cta')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm px-4 py-2"
            >
              Matricule-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('#free-test')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                >
                  Teste Grátis
                </Button>
                <Button 
                  onClick={() => scrollToSection('#cta')}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full"
                >
                  Matricule-se
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;