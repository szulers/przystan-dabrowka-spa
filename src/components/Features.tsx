import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Layout, 
  TreePine, 
  MapPin, 
  Shield, 
  Home, 
  Laptop 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Layout,
      title: 'Nowoczesny układ',
      description: 'Przemyślana funkcjonalność każdego pomieszczenia'
    },
    {
      icon: TreePine,
      title: 'Spokojna okolica',
      description: 'Otoczenie zieleni z dala od miejskiego zgiełku'
    },
    {
      icon: MapPin,
      title: 'Blisko Siedlec',
      description: 'Zaledwie 12 minut samochodem do centrum miasta'
    },
    {
      icon: Shield,
      title: 'Bezpieczne osiedle',
      description: 'Kameralne środowisko idealne dla rodzin z dziećmi'
    },
    {
      icon: Home,
      title: 'Przestronny salon z aneksem',
      description: 'Salon z aneksem kuchennym 38,9m² i prywatny ogród'
    },
    {
      icon: Laptop,
      title: '6 pokoi do aranżacji',
      description: 'Elastyczna przestrzeń: gabinet, biuro, pokoje gościnne'
    },
    {
      icon: Home,
      title: 'Wykończona elewacja i kostka',
      description: 'Elewacja, kostka przed domem i opaska z kostki w standardzie'
    },
    {
      icon: MapPin,
      title: 'Działka ok. 290 m²',
      description: 'Każdy dom z prywatną działką ok. 290 m²'
    }
  ];

  return (
    <section id="features" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Dlaczego warto?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Każdy element został starannie przemyślany, aby zapewnić Ci i Twojej rodzinie 
            najwyższy komfort życia w naturalnym otoczeniu.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="card-gradient hover-lift border-0 shadow-soft animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">
              Gotowy na nowe życie w naturalnym otoczeniu?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Umów prezentację domu — odpowiemy na wszystkie pytania telefonicznie lub mailowo i pokażemy Ci inwestycję na żywo.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-primary hover:bg-primary-dark text-white">
                <a href="tel:698857062">Zadzwoń: 698 857 062</a>
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Napisz / Umów wizytę
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;