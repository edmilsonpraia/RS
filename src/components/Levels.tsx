import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const Levels = () => {
  const levels = [
    {
      level: "A1",
      title: "Básico",
      subtitle: "Ideal para iniciantes",
      price: "R$ 297",
      duration: "2 meses",
      popular: false,
      features: [
        "Alfabeto cirílico",
        "Vocabulário essencial (500 palavras)",
        "Frases básicas do dia a dia",
        "Apresentação pessoal",
        "Certificado A1"
      ],
      color: "bg-russian-blue-light"
    },
    {
      level: "A2",
      title: "Elementar",
      subtitle: "Consolidação de fundamentos",
      price: "R$ 397",
      duration: "2 meses",
      popular: false,
      features: [
        "Conversação básica",
        "Vocabulário expandido (1000 palavras)",
        "Tempos verbais essenciais",
        "Situações do cotidiano",
        "Certificado A2"
      ],
      color: "bg-russian-blue"
    },
    {
      level: "B1/B2",
      title: "Intermediário",
      subtitle: "Comunicação avançada",
      price: "R$ 597",
      duration: "3 meses",
      popular: true,
      features: [
        "Conversação fluente",
        "Vocabulário profissional (2500 palavras)",
        "Gramática avançada",
        "Textos complexos",
        "Certificado B1/B2"
      ],
      color: "bg-secondary"
    },
    {
      level: "C1/C2",
      title: "Avançado",
      subtitle: "Fluência profissional/acadêmica",
      price: "R$ 797",
      duration: "4 meses",
      popular: false,
      features: [
        "Fluência nativa",
        "Vocabulário especializado (5000+ palavras)",
        "Expressões idiomáticas",
        "Textos acadêmicos e técnicos",
        "Certificado C1/C2"
      ],
      color: "bg-russian-red"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Níveis de <span className="text-primary">Aprendizado</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-russian mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o nível ideal para sua jornada no russo. Cada nível foi cuidadosamente 
            estruturado para garantir sua evolução gradual e consistente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level, index) => (
            <Card 
              key={index}
              className={`relative border-0 shadow-russian hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up ${
                level.popular ? 'ring-2 ring-secondary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {level.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className={`${level.color} text-russian-white p-6`}>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{level.level}</div>
                  <CardTitle className="text-xl mb-2">{level.title}</CardTitle>
                  <p className="text-russian-white/90 text-sm">{level.subtitle}</p>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {level.price}
                  </div>
                  <p className="text-muted-foreground">{level.duration}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full transition-all duration-300 ${
                    level.popular 
                      ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground' 
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  Escolher Nível
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Não tem certeza do seu nível? Faça nosso teste gratuito!
          </p>
          <Button variant="outline" size="lg">
            Teste de Nivelamento Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Levels;