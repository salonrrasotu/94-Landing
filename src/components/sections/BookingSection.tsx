import { useState } from "react";
import { Calendar as CalIcon, Clock, Check, PawPrint, User, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { siteData } from "@/data/site-data";

const BookingSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [serviceType, setServiceType] = useState<string>("");
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const disabledDays = [{ daysOfWeek: [0] }];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedSlot || !serviceType || !ownerName || !phone) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, выберите дату, время и заполните контактные данные.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Заявка принята!",
      description: `Мы перезвоним вам для подтверждения записи на ${format(date, "d MMMM", { locale: ru })} в ${selectedSlot}.`,
    });
  };

  const resetForm = () => {
    setDate(undefined);
    setSelectedSlot(null);
    setServiceType("");
    setPetName("");
    setOwnerName("");
    setPhone("");
    setEmail("");
    setNotes("");
    setSubmitted(false);
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3">Бронирование</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Запишитесь на приём онлайн</h2>
          <p className="text-muted-foreground text-lg">
            Выберите удобную дату и время — мы подтвердим запись по телефону в течение 15 минут
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-xl border-border/60 overflow-hidden">
          {submitted ? (
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-4 max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-teal flex items-center justify-center">
                  <Check className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Заявка успешно отправлена!</h3>
                <p className="text-muted-foreground">
                  Мы свяжемся с вами по телефону <strong className="text-foreground">{phone}</strong> для подтверждения записи.
                </p>
                <Alert>
                  <PawPrint className="w-4 h-4 text-primary" />
                  <AlertTitle>Детали записи</AlertTitle>
                  <AlertDescription>
                    {date && format(date, "d MMMM yyyy", { locale: ru })} в {selectedSlot} — {siteData.serviceTypes.find(s => s.value === serviceType)?.label}
                  </AlertDescription>
                </Alert>
                <Button onClick={resetForm} variant="outline" className="mt-4">
                  Создать новую заявку
                </Button>
              </div>
            </CardContent>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Date & Time */}
              <div className="p-6 md:p-8 bg-secondary/20">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CalIcon className="w-5 h-5 text-primary" />
                    Выбор даты и времени
                  </CardTitle>
                  <CardDescription>Клиника работает пн–сб, с 8:00 до 21:00</CardDescription>
                </CardHeader>

                <div className="space-y-6">
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={disabledDays}
                      locale={ru}
                      className="rounded-xl border bg-card p-3 shadow-sm"
                    />
                  </div>

                  <Separator />

                  {date ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Clock className="w-4 h-4 text-primary" />
                        Свободное время на {format(date, "d MMMM", { locale: ru })}
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {siteData.timeSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant={selectedSlot === slot ? "default" : "outline"}
                            size="sm"
                            className={selectedSlot === slot ? "bg-gradient-teal" : ""}
                            onClick={() => setSelectedSlot(slot)}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground text-sm">
                      <CalIcon className="w-10 h-10 mx-auto mb-2 opacity-40" />
                      Выберите дату в календаре
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Form */}
              <div className="p-6 md:p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <User className="w-5 h-5 text-primary" />
                    Контактные данные
                  </CardTitle>
                  <CardDescription>Заполните информацию о себе и питомце</CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Тип услуги *</Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger id="serviceType">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {siteData.serviceTypes.map((s) => (
                          <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="petName">Имя питомца</Label>
                    <div className="relative">
                      <PawPrint className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="petName"
                        placeholder="Например: Рекс, Муся"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Ваше имя *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="ownerName"
                        placeholder="Иван Иванов"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-9"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
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
                    <Label htmlFor="notes">Комментарий</Label>
                    <Textarea
                      id="notes"
                      placeholder="Опишите проблему или особые пожелания"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-teal h-12 text-base">
                    <Check className="w-5 h-5" />
                    Записаться на приём
                  </Button>
                </form>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;
