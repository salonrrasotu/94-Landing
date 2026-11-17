import { Check, Heart, Stethoscope, Scissors, Microscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { siteData } from "@/data/site-data";

const features = [
  { icon: Stethoscope, title: "Опытные врачи", desc: "Команда из 8 сертифицированных ветеринаров" },
  { icon: Microscope, title: "Современное оборудование", desc: "Цифровая рентгенография, УЗИ, лаборатория" },
  { icon: Scissors, title: "Профессиональный груминг", desc: "Все виды стрижек по стандартам пород" },
  { icon: Heart, title: "Забота и внимание", desc: "Индивидуальный подход к каждому питомцу" },
];

const progressData = [
  { label: "Успешность лечения", value: 98 },
  { label: "Довольные клиенты", value: 95 },
  { label: "Точность диагностики", value: 99 },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={siteData.images.clinicInterior}
                alt="Интерьер клиники"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <Card className="absolute -top-6 -right-4 shadow-lg border-0 w-52">
              <CardContent className="p-4">
                <p className="text-3xl font-bold text-primary">15</p>
                <p className="text-sm text-muted-foreground">лет заботы о животных</p>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <Badge variant="secondary">О клинике</Badge>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Клиника, где питомцы чувствуют себя как дома
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              «ВетЛапка» — это современная ветеринарная клиника и салон груминга, объединившая
              опытных специалистов и передовое оборудование. Мы создаём комфортную атмосферу,
              в которой ваши питомцы получают лучшую помощь.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gradient-teal flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{f.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              {progressData.map((p) => (
                <div key={p.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{p.label}</span>
                    <span className="text-primary font-semibold">{p.value}%</span>
                  </div>
                  <Progress value={p.value} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
