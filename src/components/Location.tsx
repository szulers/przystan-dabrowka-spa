import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Car, TreePine, GraduationCap, ShoppingCart } from 'lucide-react';

const Location = () => {
  const nearbyPlaces = [
    {
      icon: Clock,
      name: 'Centrum Siedlec',
      distance: '12 minut',
      description: 'Szybki dojazd do centrum miasta'
    },
    {
      icon: GraduationCap,
      name: 'Szkoły i przedszkola',
      distance: '5-10 minut',
      description: 'Placówki edukacyjne w pobliżu'
    },
    {
      icon: ShoppingCart,
      name: 'Centra handlowe',
      distance: '8-15 minut',
      description: 'Wygodne zakupy w Siedlcach'
    },
    {
      icon: TreePine,
      name: 'Lasy i parki',
      distance: '2-5 minut',
      description: 'Natura tuż za progiem'
    }
  ];

  return (
    <section id="location" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Lokalizacja
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategiczne położenie w Dąbrówce Ług łączy spokój wiejskiego życia 
            z dostępnością do wszystkich udogodnień miejskich.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="card-gradient border-0 shadow-medium overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.123456789!2d22.289123456!3d52.167890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDąbrówka%20Ług!5e0!3m2!1spl!2spl!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-soft">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-semibold text-sm">Dąbrówka Ług</div>
                        <div className="text-xs text-muted-foreground">woj. mazowieckie</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address Info */}
            <Card className="card-gradient border-0 shadow-soft mt-6">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                      Adres inwestycji
                    </h3>
                    <p className="text-muted-foreground mb-1">Dąbrówka Ług</p>
                    <p className="text-muted-foreground mb-3">08-110 Siedlce, woj. mazowieckie</p>
                    <div className="flex items-center space-x-2 text-sm">
                      <Car className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">12 minut jazdy do centrum Siedlec</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nearby Places */}
          <div className="order-1 lg:order-2">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8">
              W pobliżu znajdziesz
            </h3>
            
            <div className="space-y-6">
              {nearbyPlaces.map((place, index) => (
                <Card 
                  key={index}
                  className="card-gradient hover-lift border-0 shadow-soft animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <place.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{place.name}</h4>
                          <span className="text-sm font-medium text-primary">{place.distance}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{place.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Transportation */}
            <Card className="card-gradient border-0 shadow-medium mt-8">
              <CardContent className="p-6">
                <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">
                  Połączenia komunikacyjne
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Bezpośredni dojazd drogą wojewódzką</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Komunikacja publiczna do Siedlec</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;