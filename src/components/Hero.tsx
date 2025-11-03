import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 animate-gradient-shift bg-[length:400%_400%]"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Творим
          </span>
          <br />
          <span className="text-foreground">будущее вместе</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          Превращаем смелые идеи в реальность через креативный дизайн и инновационные решения
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
          <Button 
            size="lg" 
            className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('services')}
          >
            Наши услуги
            <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 hover:bg-card hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection('portfolio')}
          >
            Портфолио
          </Button>
        </div>

        <div className="mt-16 flex justify-center gap-6 animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
          <div className="text-center">
            <div className="text-4xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Проектов</div>
          </div>
          <div className="w-px bg-border"></div>
          <div className="text-center">
            <div className="text-4xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">100%</div>
            <div className="text-sm text-muted-foreground mt-1">Успех</div>
          </div>
          <div className="w-px bg-border"></div>
          <div className="text-center">
            <div className="text-4xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">24/7</div>
            <div className="text-sm text-muted-foreground mt-1">Поддержка</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
