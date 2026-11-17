import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, Menu, X, PawPrint, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { siteData } from "@/data/site-data";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Цены", href: "#pricing" },
  { label: "Команда", href: "#team" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Вопросы", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-teal flex items-center justify-center text-primary-foreground">
              <PawPrint className="w-6 h-6" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground">{siteData.clinic.name}</span>
              <p className="text-xs text-muted-foreground leading-none">{siteData.clinic.tagline}</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-1 text-sm text-muted-foreground mr-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{siteData.clinic.phone}</span>
            </div>
            <Button asChild className="hidden md:inline-flex bg-gradient-teal">
              <a href="#booking">
                <Calendar className="w-4 h-4" />
                Записаться
              </a>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-gradient-teal flex items-center justify-center text-primary-foreground">
                        <PawPrint className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-bold">{siteData.clinic.name}</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="w-5 h-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-3 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="font-medium">{siteData.clinic.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{siteData.clinic.workHours}</span>
                    </div>
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-gradient-teal">
                        <a href="#booking">
                          <Calendar className="w-4 h-4" />
                          Записаться на приём
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
