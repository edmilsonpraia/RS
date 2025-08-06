import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Globe, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Abordagem Simplificada",
      description: "Metodologia única que torna o russo acessível para todos os níveis"
    },
    {
      icon: Globe,
      title: "Múltiplas Áreas",
      description: "Aplicação prática em negócios, cultura, viagens e muito mais"
    },
    {
      icon: Users,
      title: "Suporte Personalizado",
      description: "Acompanhamento individual para garantir seu sucesso"
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description: "Milhares de alunos já conquistaram a fluência em russo"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2">
            Sobre o <span className="text-primary">Russo Simplificado</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-russian mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Nossa missão é <strong>democratizar o ensino do russo</strong> com uma metodologia 
            acessível e eficaz. Em apenas <strong>6 meses</strong>, você estará preparado para 
            se comunicar com confiança em russo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-russian rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-russian-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-russian-white rounded-2xl p-8 md:p-12 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Diferenciais do Nosso Curso
              </h3>
              <ul className="space-y-4">
                {[
                  "Aulas dinâmicas com foco prático",
                  "Material didático exclusivo e atualizado",
                  "Professores nativos e especializados",
                  "Flexibilidade de horários",
                  "Certificado reconhecido internacionalmente"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-gradient-russian rounded-full mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block p-8 bg-gradient-russian rounded-full mb-4">
                <span className="text-4xl md:text-6xl font-bold text-russian-white">6</span>
              </div>
              <p className="text-xl font-semibold text-foreground">
                Meses para Fluência
              </p>
              <p className="text-muted-foreground mt-2">
                Duração otimizada para resultados máximos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;