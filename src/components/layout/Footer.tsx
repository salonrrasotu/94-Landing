import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, PawPrint, Instagram, Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/data/site-data";

const Footer = () => {
  return (
    <footer className="bg-gradient-teal text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <PawPrint className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold">{siteData.clinic.name}</span>
                <p className="text-sm text-primary-foreground/70 leading-none">{siteData.clinic.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Заботимся о здоровье ваших питомцев с любовью и профессионализмом. Ветеринарная помощь и груминг высшего качества.
            </p>
            <div className="flex gap-2">
              <a href={siteData.clinic.social.instagram} className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteData.clinic.social.telegram} className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href={siteData.clinic.social.vk} className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors text-xs font-bold">
                VK
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">О клинике</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Команда</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Галерея</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Вопросы</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteData.clinic.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={`tel:${siteData.clinic.phone}`} className="hover:text-white transition-colors">{siteData.clinic.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href={`mailto:${siteData.clinic.email}`} className="hover:text-white transition-colors">{siteData.clinic.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteData.clinic.workHours}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Рассылка</h4>
            <p className="text-sm text-primary-foreground/80 mb-3">Полезные советы по уходу за питомцами на вашу почту</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-white/15 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <p>© 2026 {siteData.clinic.name}. Все права защищены.</p>
          <p className="flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 fill-current text-red-300" /> для ваших питомцев
          </p>
          <Link to="/" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
