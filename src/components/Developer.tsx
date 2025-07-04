import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const Developer = () => {
  const values = [
    {
      icon: Award,
      title: 'Jakość',
      description: 'Wysokiej klasy materiały i staranna realizacja każdego detalu'
    },
    {
      icon: Users,
      title: 'Kontakt z klientem',
      description: 'Indywidualne podejście i stały kontakt na każdym etapie'
    },
    {
      icon: Clock,
      title: 'Terminowość',
      description: 'Dotrzymujemy ustalonych terminów i harmonogramów'
    },
    {
      icon: CheckCircle,
      title: 'Doświadczenie',
      description: 'Lata praktyki w branży budowlanej i deweloperskiej'
    }
  ];

  return (
    <section id="developer" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Deweloper
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jako lokalny deweloper z wieloletnim doświadczeniem, stawiamy na jakość, 
            terminowość i indywidualne podejście do każdego klienta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Developer Info */}
          <div className="order-2 lg:order-1">
            <Card className="card-gradient border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img 
                      src="/lovable-uploads/c8a23028-eef7-4544-91a9-9c4923e3fd82.png" 
                      alt="Logo dewelopera" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    Przystań Dąbrówka Ług
                  </h3>
                  <p className="text-muted-foreground">Lokalny deweloper</p>
                </div>

                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Jesteśmy małym, lokalnym deweloperem z wieloletnim doświadczeniem w branży budowlanej. 
                    Specjalizujemy się w tworzeniu kameralnych inwestycji mieszkaniowych, 
                    gdzie każdy projekt traktujemy indywidualnie.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nasze domy to połączenie nowoczesnych rozwiązań architektonicznych 
                    z tradycyjną dbałością o jakość wykonania. Każda inwestycja jest 
                    realizowana z pełnym zaangażowaniem i troską o zadowolenie klientów.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="order-1 lg:order-2">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8">
              Nasze wartości
            </h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="card-gradient hover-lift border-0 shadow-soft animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16">
          <Card className="card-gradient border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="animate-scale-in">
                  <div className="text-3xl font-bold text-primary font-playfair mb-2">15+</div>
                  <div className="text-muted-foreground">Lat doświadczenia</div>
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '100ms' }}>
                  <div className="text-3xl font-bold text-primary font-playfair mb-2">50+</div>
                  <div className="text-muted-foreground">Zrealizowanych projektów</div>
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
                  <div className="text-3xl font-bold text-primary font-playfair mb-2">100%</div>
                  <div className="text-muted-foreground">Zadowolonych klientów</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Developer;