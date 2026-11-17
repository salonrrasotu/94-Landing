import { Phone, Calendar, PawPrint, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { siteData } from "@/data/site-data";

const CtaSection = () => {
  const [subscribe, setSubscribe] = useState(true);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-teal text-primary-foreground border-0 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
          <CardContent className="p-8 md:p-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-0">
                  <PawPrint className="w-3.5 h-3.5 mr-1.5" />
                  Не откладывайте здоровье питомца
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Запишитесь на приём прямо сейчас
                </h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  Первичная консультация со скидкой 15% для новых клиентов.
                  Подарите своему питомцу заботу, которую он заслуживает.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-base">
                    <a href="#booking">
                      <Calendar className="w-5 h-5" />
                      Записаться онлайн
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="h-12 px-8 text-base text-primary-foreground hover:bg-white/10">
                    <a href={`tel:${siteData.clinic.phone}`}>
                      <Phone className="w-5 h-5" />
                      {siteData.clinic.phone}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Label htmlFor="subscribe" className="cursor-pointer">
                      <p className="font-semibold">Советы по уходу</p>
                      <p className="text-sm text-primary-foreground/70">Получайте полезные статьи на почту</p>
                    </Label>
                  </div>
                  <Switch id="subscribe" checked={subscribe} onCheckedChange={setSubscribe} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm text-center">
                    <p className="text-2xl font-bold">15%</p>
                    <p className="text-sm text-primary-foreground/70">скидка новым клиентам</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm text-center">
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm text-primary-foreground/70">экстренная помощь</p>
                  </div>
                </div>

                <Button asChild variant="ghost" className="w-full text-primary-foreground hover:bg-white/10 justify-between">
                  <a href="#services">
                    Посмотреть все услуги
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CtaSection;
