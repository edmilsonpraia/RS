import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      location: "São Paulo, SP",
      content: "O método simplificado me fez evoluir em apenas 3 meses! Consegui fechar negócios importantes com parceiros russos.",
      rating: 5,
      level: "B1"
    },
    {
      name: "João Santos",
      role: "Estudante de Relações Internacionais",
      location: "Rio de Janeiro, RJ",
      content: "As aulas online são fantásticas! A flexibilidade me permitiu estudar mesmo com minha agenda corrida na universidade.",
      rating: 5,
      level: "A2"
    },
    {
      name: "Ana Costa",
      role: "Tradutora",
      location: "Brasília, DF",
      content: "Estudar presencialmente em Moscou foi uma experiência transformadora. A imersão cultural fez toda a diferença!",
      rating: 5,
      level: "C1"
    },
    {
      name: "Carlos Rodrigues",
      role: "Engenheiro",
      location: "Belo Horizonte, MG",
      content: "Nunca pensei que seria capaz de aprender russo. O curso tornou tudo muito mais simples e acessível.",
      rating: 5,
      level: "B2"
    },
    {
      name: "Lucia Pereira",
      role: "Professora",
      location: "Porto Alegre, RS",
      content: "Os professores nativos são excepcionais! Aprendi não só a língua, mas também muito sobre a cultura russa.",
      rating: 5,
      level: "A2"
    },
    {
      name: "Pedro Oliveira",
      role: "Consultor Internacional",
      location: "Fortaleza, CE",
      content: "Em 6 meses consegui a fluência que precisava para meu trabalho. O investimento valeu cada centavo!",
      rating: 5,
      level: "C2"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que Nossos <span className="text-primary">Alunos Dizem</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-russian mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de <strong>5.000 alunos</strong> já transformaram suas vidas com o Russo Simplificado. 
            Veja alguns depoimentos reais de nossa comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-russian hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="bg-gradient-russian text-russian-white px-2 py-1 rounded-full text-xs font-semibold">
                    Nível {testimonial.level}
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-russian text-russian-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-russian rounded-2xl p-8 md:p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-russian-white">
              <div className="text-4xl md:text-6xl font-bold mb-2">5.000+</div>
              <p className="text-russian-white/90">Alunos Formados</p>
            </div>
            <div className="text-russian-white">
              <div className="text-4xl md:text-6xl font-bold mb-2">98%</div>
              <p className="text-russian-white/90">Taxa de Aprovação</p>
            </div>
            <div className="text-russian-white">
              <div className="text-4xl md:text-6xl font-bold mb-2">4.9</div>
              <p className="text-russian-white/90">Avaliação Média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;