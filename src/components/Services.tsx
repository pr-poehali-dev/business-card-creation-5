import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Palette",
    title: "Дизайн",
    description: "Создаём уникальные визуальные решения, которые отражают характер вашего бренда и запоминаются надолго",
    gradient: "from-primary to-secondary"
  },
  {
    icon: "Code2",
    title: "Разработка",
    description: "Воплощаем самые смелые идеи в код с использованием современных технологий и лучших практик",
    gradient: "from-secondary to-accent"
  },
  {
    icon: "Sparkles",
    title: "Брендинг",
    description: "Разрабатываем целостную визуальную идентичность, которая выделит вас среди конкурентов",
    gradient: "from-accent to-primary"
  },
  {
    icon: "Rocket",
    title: "Маркетинг",
    description: "Продвигаем ваш продукт с помощью креативных стратегий и инновационных подходов",
    gradient: "from-primary via-accent to-secondary"
  }
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Наши услуги
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к решению ваших задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-scale-in bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
