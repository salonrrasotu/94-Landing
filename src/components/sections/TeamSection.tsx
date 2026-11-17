import { Award, GraduationCap, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { siteData } from "@/data/site-data";

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3">Наша команда</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Врачи, которым доверяют питомцы</h2>
          <p className="text-muted-foreground text-lg">
            Каждый специалист нашей команды — это годы опыта и искренняя любовь к животным
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.team.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/60 overflow-hidden group">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-secondary group-hover:border-primary/30 transition-colors">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-gradient-teal text-primary-foreground text-lg font-bold">
                    {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground">{member.spec}</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground cursor-help">
                          <Award className="w-3.5 h-3.5 text-primary" />
                          {member.exp}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Опыт работы специалиста</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GraduationCap className="w-3.5 h-3.5 text-primary" />
                    Сертификат
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
