import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    course: [
      { name: "Sobre o Curso", href: "#about" },
      { name: "Níveis de Ensino", href: "#levels" },
      { name: "Modalidades", href: "#modalities" },
      { name: "Depoimentos", href: "#testimonials" }
    ],
    support: [
      { name: "FAQ", href: "#faq" },
      { name: "Fale Conosco", href: "#cta" },
      { name: "Suporte Técnico", href: "#" },
      { name: "Política de Privacidade", href: "#" }
    ],
    social: [
      { name: "Instagram", icon: Instagram, href: "#" },
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "YouTube", icon: Youtube, href: "#" }
    ]
  };

  const scrollToSection = (href: string) => {
    if (href === "#") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-russian-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-russian rounded-full flex items-center justify-center">
                <span className="text-russian-white font-bold text-lg">РС</span>
              </div>
              <span className="text-xl font-bold">
                Russo <span className="text-primary">Simplificado</span>
              </span>
            </div>
            <p className="text-russian-white/80 mb-6 max-w-md leading-relaxed">
              Democratizando o ensino do russo com metodologia inovadora e acessível. 
              Transforme sua vida profissional e pessoal dominando um dos idiomas mais importantes do mundo.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a 
                  href="https://wa.me/79116192160" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-russian-white/80 hover:text-russian-white transition-colors duration-300"
                >
                  +7 911 619 2160
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:contato@russosimplificado.com"
                  className="text-russian-white/80 hover:text-russian-white transition-colors duration-300"
                >
                  contato@russosimplificado.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-russian-white/80">Moscou, Rússia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-russian-blue" />
                <span className="text-russian-white/80">Seg-Sex: 9h-18h (UTC+3)</span>
              </div>
            </div>
          </div>

          {/* Course Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-russian-white">Curso</h3>
            <ul className="space-y-2">
              {footerLinks.course.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-russian-white/80 hover:text-russian-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-russian-white">Suporte</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-russian-white/80 hover:text-russian-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="font-medium mb-3 text-russian-white">Redes Sociais</h4>
              <div className="flex space-x-3">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-russian-white/10 rounded-full flex items-center justify-center hover:bg-russian-white/20 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5 text-russian-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-russian-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-russian-white/60 text-sm">
              © {currentYear} Russo Simplificado. Todos os direitos reservados.
            </div>
            
            <div className="text-russian-white/60 text-sm flex items-center space-x-4">
              <span>Feito com ❤️ para conectar culturas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;