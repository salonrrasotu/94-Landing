import { PawPrint, Shield, Award, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteData } from "@/data/site-data";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 animate-fade-up">
            <Badge variant="secondary" className="text-sm py-1.5 px-3 rounded-full">
              <PawPrint className="w-3.5 h-3.5 mr-1.5" />
              Ветеринарная клиника и груминг нового уровня
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Забота о вашем питомце — <span className="text-primary">наше призвание</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Полный спектр ветеринарных услуг и профессиональный груминг для собак и кошек.
              Опытные врачи, современное оборудование и искренняя любовь к животным.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gradient-teal text-base h-12 px-8">
                <a href="#booking">
                  <Calendar className="w-5 h-5" />
                  Записаться на приём
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base h-12 px-8">
                <a href="#services">
                  Наши услуги
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">Лицензированная клиника</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">15 лет опыта</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={siteData.images.heroDog}
                alt="Ветеринар с собакой"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating card */}
            <Card className="absolute -bottom-6 -left-4 md:-left-6 shadow-xl border-0 bg-card w-56 animate-float">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-peach flex items-center justify-center shrink-0">
                  <PawPrint className="w-6 h-6 text-peach-dark" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground leading-none">12 000+</p>
                  <p className="text-xs text-muted-foreground mt-1">счастливых пациентов</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
