import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { toast } from "@/hooks/use-toast";
import { siteData } from "@/data/site-data";

const ContactsSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      toast({
        title: "Заполните обязательные поля",
        description: "Имя, телефон и сообщение обязательны для отправки.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время. Спасибо за обращение!",
    });
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const contactItems = [
    { icon: Phone, label: "Телефон", value: siteData.clinic.phone, href: `tel:${siteData.clinic.phone}` },
    { icon: Mail, label: "Email", value: siteData.clinic.email, href: `mailto:${siteData.clinic.email}` },
    { icon: MapPin, label: "Адрес", value: siteData.clinic.address, href: "#map" },
    { icon: Clock, label: "Часы работы", value: siteData.clinic.workHours, href: null },
  ];

  return (
    <section id="contacts" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3">Контакты</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground text-lg">
            Есть вопросы или хотите записаться? Напишите нам — мы всегда на связи
          </p>
        </div>

        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Главная</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Контакты</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-4">
            {contactItems.map((item) => (
              <Card key={item.label} className="border-border/60 hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-border/60 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-secondary flex items-center justify-center relative">
                  <iframe
                    title="Карта"
                    src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755814&z=15"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="border-border/60 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Форма обратной связи
              </CardTitle>
              <CardDescription>Заполните форму, и мы перезвоним вам в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="c-name">Ваше имя *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="c-name"
                      placeholder="Как вас зовут?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="c-phone">Телефон *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="c-phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="c-email"
                        type="email"
                        placeholder="email@example.ru"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-subject">Тема обращения</Label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger id="c-subject">
                      <SelectValue placeholder="Выберите тему" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appointment">Запись на приём</SelectItem>
                      <SelectItem value="grooming">Груминг</SelectItem>
                      <SelectItem value="question">Вопрос врачу</SelectItem>
                      <SelectItem value="complaint">Жалоба</SelectItem>
                      <SelectItem value="suggestion">Предложение</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-message">Сообщение *</Label>
                  <Textarea
                    id="c-message"
                    placeholder="Опишите ваш вопрос или ситуацию..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>

                <Separator />

                <Button type="submit" size="lg" className="w-full bg-gradient-teal">
                  <Send className="w-4 h-4" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
