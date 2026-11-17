import { ChevronDown, Circle as HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/site-data";

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3">Вопросы и ответы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-muted-foreground text-lg">
            Собрали ответы на самые популярные вопросы наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* FAQ list */}
          <div className="lg:col-span-2">
            <Card className="border-border/60">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {siteData.faq.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                        <span className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                          {item.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* CTA card */}
          <div>
            <Card className="bg-gradient-teal text-primary-foreground border-0 sticky top-24">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Не нашли ответ?</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Задайте вопрос нашим специалистам — мы ответим в течение часа
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <a href="#contacts">Связаться с нами</a>
                </Button>
                <Button asChild variant="ghost" className="w-full text-primary-foreground hover:bg-white/10">
                  <a href="#booking">Записаться на приём</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
