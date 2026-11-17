import { useState } from "react";
import { Star, Quote, Send, PawPrint } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { toast } from "@/hooks/use-toast";
import { siteData } from "@/data/site-data";

const REVIEWS_PER_PAGE = 3;

const ReviewsSection = () => {
  const [name, setName] = useState("");
  const [petName, setPetName] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [agree, setAgree] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState(siteData.reviews);

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const paginatedReviews = reviews.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !petName || !reviewText || !agree) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, заполните имя, имя питомца, текст отзыва и согласитесь на обработку данных.",
        variant: "destructive",
      });
      return;
    }
    const newReview = {
      name,
      pet: petName,
      rating,
      text: reviewText,
      date: new Date().toLocaleDateString("ru-RU"),
    };
    setReviews([newReview, ...reviews]);
    setName("");
    setPetName("");
    setRating(5);
    setReviewText("");
    setServiceType("");
    setAgree(false);
    setCurrentPage(1);
    toast({
      title: "Спасибо за отзыв!",
      description: "Ваш отзыв опубликован и поможет другим владельцам питомцев.",
    });
  };

  const renderStars = (count: number, interactive = false) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-5 h-5 cursor-pointer transition-colors ${
            i <= count
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
          onClick={() => interactive && setRating(i)}
        />
      ))}
    </div>
  );

  return (
    <section id="reviews" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3">Отзывы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
          <p className="text-muted-foreground text-lg">
            Более 12 000 довольных владельцев питомцев доверяют нам самое ценное
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews list */}
          <div className="lg:col-span-2 space-y-4">
            {paginatedReviews.map((review, i) => (
              <Card key={i} className="border-border/60 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-secondary">
                        <AvatarFallback className="bg-gradient-peach text-peach-dark font-bold">
                          {review.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <PawPrint className="w-3 h-3" />
                          {review.pet}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {renderStars(review.rating)}
                      <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Quote className="w-5 h-5 text-primary/30 shrink-0 mt-0.5" />
                    <p className="text-foreground/80 leading-relaxed">{review.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {totalPages > 1 && (
              <Pagination className="mt-6">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        isActive={currentPage === i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className="cursor-pointer"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>

          {/* Review form */}
          <div>
            <Card className="sticky top-24 border-border/60 shadow-md">
              <CardHeader>
                <h3 className="text-xl font-bold">Оставить отзыв</h3>
                <p className="text-sm text-muted-foreground">Поделитесь своим опытом посещения</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="rev-name">Ваше имя *</Label>
                    <Input
                      id="rev-name"
                      placeholder="Как вас зовут?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rev-pet">Имя питомца *</Label>
                    <Input
                      id="rev-pet"
                      placeholder="Например: Рекс"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rev-service">Услуга</Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger id="rev-service">
                        <SelectValue placeholder="Какой услугой воспользовались?" />
                      </SelectTrigger>
                      <SelectContent>
                        {siteData.serviceTypes.map((s) => (
                          <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Оценка *</Label>
                    {renderStars(rating, true)}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rev-text">Текст отзыва *</Label>
                    <Textarea
                      id="rev-text"
                      placeholder="Расскажите о вашем опыте..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="rev-agree"
                      checked={agree}
                      onCheckedChange={(checked) => setAgree(checked === true)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="rev-agree" className="text-xs text-muted-foreground leading-relaxed">
                      Я согласен на обработку персональных данных и публикацию отзыва
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-teal">
                    <Send className="w-4 h-4" />
                    Опубликовать отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
