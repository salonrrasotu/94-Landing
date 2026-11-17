import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Icon from "@/components/ui/icon";
import { siteData } from "@/data/site-data";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3">Наши услуги</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Полный спектр услуг для ваших питомцев</h2>
          <p className="text-muted-foreground text-lg">
            От профилактики до сложных операций — мы заботимся о здоровье вашего питомца на каждом этапе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service) => (
            <HoverCard key={service.title}>
              <HoverCardTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-teal flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary/30">{service.price}</Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed pt-2">{service.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary" asChild>
                      <a href="#booking">
                        Записаться
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <p className="text-sm font-medium">В стоимость услуги входит:</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary" />
                      Консультация специалиста
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary" />
                      Подробный отчёт о процедуре
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary" />
                      Рекомендации по уходу
                    </li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
