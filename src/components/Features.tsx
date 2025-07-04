import { Card, CardContent } from '@/components/ui/card';
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
              Skontaktuj się z nami już dziś i umów się na prezentację domów. 
              Pomożemy Ci wybrać idealny dom dla Twojej rodziny.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;