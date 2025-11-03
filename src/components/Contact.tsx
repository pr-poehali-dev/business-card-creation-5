import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: "Mail",
    title: "Email",
    value: "hello@creative.studio",
    gradient: "from-primary to-secondary"
  },
  {
    icon: "Phone",
    title: "Телефон",
    value: "+7 (999) 123-45-67",
    gradient: "from-secondary to-accent"
  },
  {
    icon: "MapPin",
    title: "Адрес",
    value: "Москва, Россия",
    gradient: "from-accent to-primary"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card to-background opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Свяжитесь с нами
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Напишите нам!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in-left">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="group hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={info.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{info.title}</div>
                    <div className="font-semibold text-lg">{info.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="pt-6">
              <h3 className="font-heading text-2xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                {["Github", "Twitter", "Linkedin", "Instagram"].map((social, i) => (
                  <button 
                    key={i}
                    className="w-12 h-12 rounded-xl bg-card border-2 border-border hover:border-primary hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Icon name={social} size={20} className="group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Card className="border-2 hover:border-primary transition-colors duration-300 animate-scale-in bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем проекте..."
                    required
                    rows={6}
                    className="border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:scale-[1.02] transition-transform duration-300 text-lg py-6"
                >
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
