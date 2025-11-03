import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Проект Alpha",
    category: "Веб-дизайн",
    tags: ["UI/UX", "Брендинг"],
    image: "https://cdn.poehali.dev/projects/f6b45ac0-c8b9-494b-991f-7547bf0dc3c2/files/fa274d8b-96a6-4096-b5f8-655e51c9d9c7.jpg",
    gradient: "from-primary to-secondary"
  },
  {
    title: "Проект Beta",
    category: "Мобильное приложение",
    tags: ["React Native", "Дизайн"],
    image: "https://cdn.poehali.dev/projects/f6b45ac0-c8b9-494b-991f-7547bf0dc3c2/files/c82f49a3-eea2-4fc1-acdd-66c61716b039.jpg",
    gradient: "from-secondary to-accent"
  },
  {
    title: "Проект Gamma",
    category: "E-commerce",
    tags: ["Fullstack", "Маркетинг"],
    image: "https://cdn.poehali.dev/projects/f6b45ac0-c8b9-494b-991f-7547bf0dc3c2/files/cbe82dab-ba46-46f6-8b87-a53b4927be5c.jpg",
    gradient: "from-accent to-primary"
  },
  {
    title: "Проект Delta",
    category: "Корпоративный сайт",
    tags: ["Дизайн", "SEO"],
    image: "https://cdn.poehali.dev/projects/f6b45ac0-c8b9-494b-991f-7547bf0dc3c2/files/fa274d8b-96a6-4096-b5f8-655e51c9d9c7.jpg",
    gradient: "from-primary via-accent to-secondary"
  },
  {
    title: "Проект Epsilon",
    category: "SaaS платформа",
    tags: ["UI/UX", "Frontend"],
    image: "https://cdn.poehali.dev/projects/f6b45ac0-c8b9-494b-991f-7547bf0dc3c2/files/c82f49a3-eea2-4fc1-acdd-66c61716b039.jpg",
    gradient: "from-secondary to-primary"
  },
  {
    title: "Проект Zeta",
    category: "Лендинг",
    tags: ["Анимация", "Conversion"],
    image: "https://cdn.poehali.dev/projects/f6b45ac0-c8b9-494b-991f-7547bf0dc3c2/files/cbe82dab-ba46-46f6-8b87-a53b4927be5c.jpg",
    gradient: "from-accent to-secondary"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Портфолио
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Проекты, которыми мы гордимся
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 hover:scale-[1.03] transition-all duration-500 cursor-pointer animate-scale-in bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-70 transition-opacity duration-500`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur text-white border-0">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 relative">
                <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="outline"
                      className="group-hover:border-primary group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;