import { PawPrint, Users, Calendar, Stethoscope } from "lucide-react";
import { siteData } from "@/data/site-data";

const iconMap: Record<string, React.ElementType> = {
  "Счастливых пациентов": PawPrint,
  "Лет на службе": Calendar,
  "Врачей в команде": Users,
  "Операций в год": Stethoscope,
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {siteData.stats.map((stat) => {
            const Icon = iconMap[stat.label] || PawPrint;
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/50 to-secondary/50 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-teal flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
