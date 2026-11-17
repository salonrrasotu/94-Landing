import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PawPrint, Hop as Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteData } from "@/data/site-data";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-hero px-4">
      <Card className="max-w-lg w-full text-center border-border/60 shadow-xl">
        <CardContent className="p-8 md:p-12 space-y-6">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-teal flex items-center justify-center animate-float">
            <PawPrint className="w-10 h-10 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
            <p className="text-xl text-foreground font-semibold">Упс! Страница не найдена</p>
            <p className="text-muted-foreground mt-2">Похоже, эта страничка убежала, как котик от ванны</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-gradient-teal">
              <a href="/"><Home className="w-4 h-4" />Вернуться на главную</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${siteData.clinic.phone}`}><Phone className="w-4 h-4" />Позвонить в клинику</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
