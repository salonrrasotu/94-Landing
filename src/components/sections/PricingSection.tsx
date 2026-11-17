import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock } from "lucide-react";
import { siteData } from "@/data/site-data";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3">Цены</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Прозрачные цены без скрытых платежей</h2>
          <p className="text-muted-foreground text-lg">
            Вы всегда знаете, за что платите. Финальная стоимость согласовывается до начала процедуры.
          </p>
        </div>

        <Tabs defaultValue="veterinary" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-6 h-12">
            <TabsTrigger value="veterinary" className="text-base">Ветеринарные услуги</TabsTrigger>
            <TabsTrigger value="grooming" className="text-base">Груминг</TabsTrigger>
          </TabsList>

          <TabsContent value="veterinary">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Стоимость ветеринарных услуг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60%]">Услуга</TableHead>
                      <TableHead>Длительность</TableHead>
                      <TableHead className="text-right">Цена</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {siteData.pricing.veterinary.map((item) => (
                      <TableRow key={item.name} className="hover:bg-accent/40">
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="text-muted-foreground">{item.duration}</TableCell>
                        <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grooming">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Стоимость услуг груминга
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60%]">Услуга</TableHead>
                      <TableHead>Длительность</TableHead>
                      <TableHead className="text-right">Цена</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {siteData.pricing.grooming.map((item) => (
                      <TableRow key={item.name} className="hover:bg-accent/40">
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="text-muted-foreground">{item.duration}</TableCell>
                        <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
