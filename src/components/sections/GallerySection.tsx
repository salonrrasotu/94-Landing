import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteData } from "@/data/site-data";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-3">Галерея</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши пушистые пациенты</h2>
          <p className="text-muted-foreground text-lg">
            Фотографии наших счастливых посетителей до и после процедур
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {siteData.gallery.map((img, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square shadow-md hover:shadow-xl transition-all">
                  <img
                    src={img}
                    alt={`Фото ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                </div>
              </DialogTrigger>
              <DialogContent className="p-0 max-w-3xl border-0 overflow-hidden">
                <ScrollArea className="max-h-[80vh]">
                  <img src={img} alt={`Фото ${i + 1}`} className="w-full h-auto" />
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
