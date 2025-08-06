import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, Clock, Users, Star, Gift, GraduationCap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import RussianLevelTest from "./RussianLevelTest";

const FreeTest = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showLevelTest, setShowLevelTest] = useState(false);
  const { toast } = useToast();

  const handleFreeTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e e-mail.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "🎉 Teste enviado com sucesso!",
      description: "Você receberá um e-mail com as instruções em até 5 minutos. Verifique também sua caixa de spam.",
    });
    
    // Simular redirecionamento para WhatsApp
    setTimeout(() => {
      window.open('https://wa.me/79116192160?text=Oi! Acabei de me inscrever para o teste grátis de russo. Meu nome é ' + name, '_blank');
    }, 1500);
    
    setName("");
    setEmail("");
  };

  const freeFeatures = [
    {
      icon: Play,
      title: "Aula Demonstrativa",
      description: "30 minutos com professor nativo",
      duration: "Grátis"
    },
    {
      icon: GraduationCap,
      title: "Teste de Nivelamento",
      description: "20 questões para descobrir seu nível exato",
      duration: "15 min"
    },
    {
      icon: Gift,
      title: "E-book Gratuito",
      description: "Guia básico do alfabeto russo",
      duration: "PDF"
    },
    {
      icon: Users,
      title: "Consultoria Individual",
      description: "Plano personalizado de estudos",
      duration: "20 min"
    }
  ];

  const testimonialsMini = [
    {
      name: "Carlos M.",
      text: "A aula teste me convenceu! Método realmente funciona.",
      rating: 5
    },
    {
      name: "Ana P.",
      text: "O teste de nivelamento foi muito preciso e útil.",
      rating: 5
    },
    {
      name: "Pedro S.",
      text: "Consultoria gratuita me ajudou a escolher o nível certo.",
      rating: 5
    }
  ];

  if (showLevelTest) {
    return (
      <section className="py-16 md:py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => setShowLevelTest(false)}
              className="mb-4"
            >
              ← Voltar aos Testes Gratuitos
            </Button>
          </div>
          <RussianLevelTest />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <Badge className="bg-secondary text-secondary-foreground mb-4 text-sm md:text-base px-4 py-2">
            🎁 100% Gratuito
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2">
            Experimente Antes de <span className="text-primary">Comprar</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-primary mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Teste nossa metodologia sem compromisso. Mais de <strong>10.000 pessoas</strong> já 
            experimentaram nossos recursos gratuitos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Free Resources */}
          <div className="space-y-6 md:space-y-8 animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center lg:text-left px-4">
              O que você recebe grátis:
            </h3>
            
            <div className="grid gap-4 md:gap-6">
              {freeFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className="border-0 shadow-card hover:shadow-russian transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur-sm cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    if (feature.title === "Teste de Nivelamento") {
                      setShowLevelTest(true);
                    }
                  }}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-russian-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg md:text-xl font-semibold text-foreground flex items-center">
                            {feature.title}
                            {feature.title === "Teste de Nivelamento" && (
                              <Badge className="ml-2 bg-secondary text-secondary-foreground text-xs">
                                Clique aqui
                              </Badge>
                            )}
                          </h4>
                          <Badge variant="outline" className="text-xs mt-1 sm:mt-0 self-start sm:self-center">
                            {feature.duration}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mini Testimonials */}
            <div className="bg-russian-white/70 backdrop-blur-sm rounded-xl p-4 md:p-6 space-y-4">
              <h4 className="font-semibold text-foreground text-center text-lg">
                O que dizem sobre nossos testes gratuitos:
              </h4>
              <div className="space-y-3">
                {testimonialsMini.map((testimonial, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-russian-white font-semibold text-xs">
                          {testimonial.name.split(' ')[0][0]}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <span className="text-xs font-medium text-foreground">{testimonial.name}</span>
                        <div className="flex space-x-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sign Up Form */}
          <Card className="border-0 shadow-elegant bg-russian-white/95 backdrop-blur-sm animate-slide-up lg:sticky lg:top-8">
            <CardHeader className="text-center pb-4 md:pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Comece Agora - Grátis!
              </CardTitle>
              <p className="text-muted-foreground text-sm md:text-base">
                Preencha os dados e receba acesso imediato aos recursos gratuitos
              </p>
            </CardHeader>

            <CardContent className="p-4 md:p-6 pt-0">
              <form onSubmit={handleFreeTest} className="space-y-4 md:space-y-6">
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

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 text-russian-white h-12 md:h-14 text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  🚀 Quero Meu Teste Grátis!
                </Button>
              </form>

              <div className="mt-6 space-y-4">
                <div className="text-center">
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">
                    ✓ Sem cartão de crédito • ✓ Sem compromisso<br/>
                    ✓ Acesso imediato • ✓ WhatsApp direto com professor
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-6 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Resposta em 5min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>+10k testaram</span>
                  </div>
                </div>

                <div className="bg-gradient-accent rounded-lg p-3 md:p-4 text-center border-2 border-secondary/20">
                  <p className="text-sm md:text-base font-medium text-foreground mb-1">
                    🎁 Bônus Exclusivo
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    <strong>Teste hoje</strong> e ganhe <strong>20% OFF</strong> + <strong>E-book grátis</strong> + <strong>Acesso à comunidade VIP</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FreeTest;