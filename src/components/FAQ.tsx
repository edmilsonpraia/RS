import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter conhecimento prévio em russo?",
      answer: "Não! Nosso curso foi desenvolvido especialmente para iniciantes. Começamos do zero, ensinando desde o alfabeto cirílico até conversação avançada. Nossa metodologia simplificada torna o aprendizado acessível para qualquer pessoa."
    },
    {
      question: "Como funcionam as aulas online?",
      answer: "As aulas online acontecem em nossa plataforma exclusiva, com aulas ao vivo e interativas. Você também tem acesso às gravações, materiais digitais e pode estudar no seu próprio ritmo. Oferecemos suporte técnico completo e uma comunidade ativa de estudantes."
    },
    {
      question: "Há certificado ao final do curso?",
      answer: "Sim! Todos os nossos cursos oferecem certificado de conclusão reconhecido internacionalmente. O certificado é baseado no Quadro Europeu Comum de Referência para as Línguas (QECR) e pode ser usado para comprovar sua proficiência em russo."
    },
    {
      question: "Qual a diferença entre as modalidades presencial e online?",
      answer: "A modalidade presencial em Moscou oferece imersão cultural completa e interação direta, ideal para quem pode viajar. A modalidade online oferece flexibilidade total e acesso de qualquer lugar do mundo. Ambas seguem a mesma metodologia e garantem excelentes resultados."
    },
    {
      question: "Posso trocar de modalidade durante o curso?",
      answer: "Sim! Oferecemos flexibilidade para trocar entre modalidades conforme sua necessidade. Você pode começar online e depois ir para Moscou, ou vice-versa. Entre em contato conosco para ajustarmos seu plano de estudos."
    },
    {
      question: "Quanto tempo leva para atingir a fluência?",
      answer: "Com nossa metodologia simplificada, a maioria dos alunos atinge fluência conversacional em 6 meses. O tempo pode variar dependendo da dedicação, nível inicial e objetivos específicos. Oferecemos acompanhamento personalizado para otimizar seu progresso."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim! Oferecemos diversas opções de pagamento, incluindo parcelamento em até 12x sem juros no cartão de crédito. Também aceitamos PIX, boleto bancário e transferência internacional para alunos no exterior."
    },
    {
      question: "E se eu não conseguir acompanhar o ritmo das aulas?",
      answer: "Nosso método é adaptável ao seu ritmo! Oferecemos suporte personalizado, aulas de reforço e acesso vitalício aos materiais gravados. Nossa equipe pedagógica está sempre disponível para ajudar você a superar qualquer dificuldade."
    },
    {
      question: "O curso prepara para exames oficiais de proficiência?",
      answer: "Sim! Nosso currículo está alinhado com os principais exames de proficiência em russo, como TORFL/TRKI. Oferecemos preparação específica para quem deseja obter certificações oficiais para estudar ou trabalhar na Rússia."
    },
    {
      question: "Há alguma garantia de satisfação?",
      answer: "Oferecemos garantia de 30 dias! Se não ficar satisfeito com o curso, devolvemos 100% do seu investimento, sem perguntas. Estamos confiantes na qualidade do nosso método e no sucesso dos nossos alunos."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-russian mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre o curso Russo Simplificado. Se não encontrar a resposta 
            que procura, nossa equipe está pronta para ajudar!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 animate-slide-up">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-0 bg-russian-white/80 backdrop-blur-sm rounded-lg shadow-russian hover:shadow-elegant transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/79116192160" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              WhatsApp: +7 911 619 2160
            </a>
            <a 
              href="mailto:contato@russosimplificado.com" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              E-mail: contato@russosimplificado.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;