import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: "Inscrição enviada com sucesso!",
      description: "Nossa equipe entrará em contato em breve.",
    });
    
    setName("");
    setEmail("");
    setPhone("");
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "+7 911 619 2160",
      action: "https://wa.me/79116192160",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "E-mail",
      detail: "contato@russosimplificado.com",
      action: "mailto:contato@russosimplificado.com",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Moscou",
      detail: "Centro da cidade",
      action: "#",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Horário",
      detail: "Seg-Sex: 9h-18h (UTC+3)",
      action: "#",
      color: "text-russian-blue"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-russian-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-russian-white mb-4 md:mb-6 px-2">
            Garanta Sua <span className="text-russian-red">Vaga!</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-russian-white mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-russian-white/90 max-w-4xl mx-auto leading-relaxed px-4">
            Não perca a oportunidade de dominar o russo com nossa metodologia comprovada. 
            <br className="hidden md:block" />
            <strong className="text-russian-red">Vagas limitadas para garantir qualidade de ensino!</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-elegant bg-russian-white/95 backdrop-blur-sm animate-slide-up order-2 lg:order-1">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Inscreva-se Agora
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 md:h-14 border-border focus:border-primary transition-colors duration-300 text-base"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 md:h-14 border-border focus:border-primary transition-colors duration-300 text-base"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder="WhatsApp com DDD"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 md:h-14 border-border focus:border-primary transition-colors duration-300 text-base"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-russian hover:opacity-90 text-russian-white h-12 md:h-14 text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Quero Aprender Russo Agora!
                </Button>
              </form>

              <div className="mt-6 space-y-4">
                <div className="text-center">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    ✓ Sem compromisso inicial • ✓ Resposta em até 2 horas<br className="hidden sm:block" />
                    ✓ Consultoria gratuita sobre níveis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-russian-white mb-4">
                Fale Conosco Diretamente
              </h3>
              <p className="text-russian-white/90 text-base md:text-lg px-4 lg:px-0">
                Nossa equipe está pronta para esclarecer suas dúvidas e ajudar você a escolher 
                o melhor plano para seu perfil.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  className="border-0 bg-russian-white/10 backdrop-blur-sm hover:bg-russian-white/20 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <a 
                      href={contact.action}
                      target={contact.action.startsWith('http') ? '_blank' : undefined}
                      rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 text-russian-white hover:text-russian-white/80 transition-colors duration-300"
                    >
                      <div className={`w-12 h-12 ${contact.color} bg-russian-white/20 rounded-full flex items-center justify-center`}>
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{contact.title}</h4>
                        <p className="text-russian-white/80">{contact.detail}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-russian-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center">
              <h4 className="text-lg md:text-xl font-semibold text-russian-white mb-2">
                🎁 Oferta Especial
              </h4>
              <p className="text-russian-white/90 text-sm md:text-base px-2">
                Inscreva-se hoje e ganhe <strong>1 mês extra</strong> de acesso à plataforma + 
                <strong>e-book gratuito</strong> "Russo para Iniciantes"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/79116192160"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce-gentle"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </section>
  );
};

export default CTA;