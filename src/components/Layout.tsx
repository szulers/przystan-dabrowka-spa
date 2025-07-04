import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ZoomIn } from 'lucide-react';

const Layout = () => {
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<string | null>(null);

  const floorPlans = [
    {
      id: 'ground',
      title: 'Parter - 84,5 m²',
      image: '/lovable-uploads/e40343b0-2b8e-4b8e-99b9-9fbe5837a7d3.png',
      rooms: [
        { name: 'Salon z aneksem kuchennym', area: '38,9 m²' },
        { name: 'Pokój', area: '11,6 m²' },
        { name: 'Hol', area: '10,5 m²' },
        { name: 'WC', area: '3,1 m²' },
        { name: 'Garaż jednostanowiskowy', area: '23,5 m²' }
      ]
    },
    {
      id: 'first',
      title: 'Piętro - 86 m²',
      image: '/lovable-uploads/a83c274b-2841-4a1b-aa28-ed8daae4c943.png',
      rooms: [
        { name: 'Korytarz', area: '10,8 m²' },
        { name: 'Pokój 1', area: '12,2 m²' },
        { name: 'Pokój 2', area: '10,6 m²' },
        { name: 'Pokój 3', area: '11,2 m²' },
        { name: 'Pokój 4', area: '11,5 m²' },
        { name: 'Pokój 5 (Master Bedroom)', area: '22,7 m²' },
        { name: 'Łazienka', area: '7,0 m²' }
      ]
    }
  ];

  const openLightbox = (imageUrl: string) => {
    setSelectedFloorPlan(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedFloorPlan(null);
  };

  return (
    <section id="layout" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Przemyślany rozkład dla wygodnego życia
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Każdy z domów oferuje 170,5 m² powierzchni użytkowej. Parter to otwarta strefa dzienna 
            z salonem z aneksem kuchennym, dodatkowym pokojem i garażem. Na piętrze znajdują się 5 pokoi 
            w tym główna sypialnia oraz łazienka – wszystko zaprojektowane z myślą o rodzinie.
          </p>
        </div>

        {/* Floor Plans */}
        <div className="grid lg:grid-cols-2 gap-12">
          {floorPlans.map((floor, index) => (
            <Card 
              key={floor.id} 
              className="card-gradient hover-lift border-0 shadow-medium animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6 text-center">
                  {floor.title}
                </h3>
                
                {/* Floor Plan Image */}
                <div className="relative mb-6 group cursor-pointer" onClick={() => openLightbox(floor.image)}>
                  <img 
                    src={floor.image}
                    alt={floor.title}
                    className="w-full h-64 object-cover rounded-lg transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">Kliknij aby powiększyć</span>
                    </div>
                  </div>
                </div>

                {/* Room List */}
                <div className="space-y-3">
                  {floor.rooms.map((room, roomIndex) => (
                    <div 
                      key={roomIndex} 
                      className="flex justify-between items-center py-2 border-b border-border/50"
                    >
                      <span className="text-foreground font-medium">{room.name}</span>
                      <span className="text-primary font-semibold">{room.area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Total Area Summary */}
        <div className="mt-16 text-center">
          <Card className="inline-block card-gradient border-0 shadow-medium">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Powierzchnia całkowita
              </h3>
              <div className="text-4xl font-bold text-primary font-playfair">170,5 m²</div>
              <p className="text-muted-foreground mt-2">Idealna dla rodziny z dziećmi</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lightbox */}
      {selectedFloorPlan && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20 p-2"
            >
              <X className="h-6 w-6" />
            </Button>
            <img 
              src={selectedFloorPlan}
              alt="Rzut domu"
              className="w-full h-auto rounded-lg shadow-strong"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Layout;