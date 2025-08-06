import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Monitor, Clock, Users, Video, BookOpen } from "lucide-react";

const Modalities = () => {
  const modalities = [
    {
      title: "Presencial em Moscou",
      icon: MapPin,
      description: "Aulas presenciais na capital russa com imersão cultural completa",
      features: [
        "Local acessível no centro de Moscou",
        "Interação direta com professores nativos",
        "Imersão cultural total",
        "Visitas a pontos históricos",
        "Networking com outros estudantes",
        "Material físico incluso"
      ],
      highlights: [
        "Turmas pequenas (máx. 8 alunos)",
        "3 aulas por semana",
        "Suporte 24/7 em português"
      ],
      buttonText: "Quero Estudar em Moscou",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      title: "Online Global",
      icon: Monitor,
      description: "Aprenda russo de qualquer lugar do mundo com nossa plataforma digital",
      features: [
        "Plataforma intuitiva e moderna",
        "Aulas ao vivo + gravadas",
        "Materiais digitais interativos",
        "Flexibilidade de horários",
        "Acesso mobile e desktop",
        "Suporte técnico incluso"
      ],
      highlights: [
        "Disponível 24/7",
        "Certificado digital",
        "Comunidade online ativa"
      ],
      buttonText: "Começar Online Agora",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Adapte os estudos à sua rotina"
    },
    {
      icon: Users,
      title: "Professores Nativos",
      description: "Aprenda com quem vive a cultura russa"
    },
    {
      icon: Video,
      title: "Tecnologia Avançada",
      description: "Ferramentas modernas de aprendizado"
    },
    {
      icon: BookOpen,
      title: "Material Exclusivo",
      description: "Conteúdo desenvolvido especialmente para brasileiros"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Modalidades de <span className="text-primary">Ensino</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-russian mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha a modalidade que melhor se adapta ao seu estilo de vida e objetivos. 
            Qualidade garantida em ambas as opções.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {modalities.map((modality, index) => (
            <Card 
              key={index}
              className="border-0 shadow-russian hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className={`${modality.bgColor} ${modality.textColor} p-8`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-russian-white/20 rounded-full flex items-center justify-center">
                    <modality.icon className="w-8 h-8" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-center mb-4">
                  {modality.title}
                </CardTitle>
                <p className="text-center opacity-90">
                  {modality.description}
                </p>
              </CardHeader>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">O que está incluído:</h4>
                    <ul className="space-y-2">
                      {modality.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-russian rounded-full mr-3 mt-2"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Destaques:</h4>
                    <div className="space-y-2">
                      {modality.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="bg-muted rounded-lg p-3">
                          <span className="text-sm font-medium text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${modality.bgColor} hover:opacity-90 ${modality.textColor} transition-all duration-300`}
                    size="lg"
                  >
                    {modality.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="border-0 bg-russian-white/50 backdrop-blur-sm text-center p-6 hover:shadow-russian transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-russian rounded-full flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-6 h-6 text-russian-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground text-sm">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modalities;