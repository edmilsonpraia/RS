import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-russian.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20 md:pt-0">
        <div className="animate-fade-in space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-russian-white mb-4 md:mb-6 leading-tight px-2">
            Aprenda Russo de Forma{" "}
            <span className="text-russian-red">Simplificada</span>{" "}
            e <span className="text-russian-blue">Eficiente!</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-russian-white/90 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Metodologia inovadora com foco em múltiplas áreas do conhecimento. 
            Domine o russo em 6 meses com nossa abordagem única.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-slide-up px-2">
            <Button 
              size="lg" 
              onClick={() => {
                const element = document.querySelector('#free-test');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 shadow-elegant hover:shadow-russian transform hover:scale-105 w-full sm:w-auto"
            >
              Teste Grátis Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.querySelector('#levels');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-russian-white text-russian-white hover:bg-russian-white hover:text-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              Conheça os Níveis
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle hidden md:block">
          <div className="w-5 md:w-6 h-8 md:h-10 border-2 border-russian-white rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-russian-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;