import { Card, CardContent } from '@/components/ui/card';
import { Home, Shield, TreePine, Car, Zap, Users } from 'lucide-react';
const About = () => {
  const features = [{
    icon: Home,
    title: '4 nowoczesne domy',
    description: '2 bliźniaki naprzeciwko siebie w kameralnym osiedlu'
  }, {
    icon: TreePine,
    title: 'Prywatna zieleń',
    description: 'Własna droga wewnętrzna oraz ogród do aranżacji'
  }, {
    icon: Shield,
    title: 'Bezpieczne osiedle',
    description: 'Kameralne, spokojne miejsce idealne dla rodzin'
  }, {
    icon: Car,
    title: 'Garaż i ogród',
    description: 'Każdy dom ma własny garaż i przestronny ogród'
  }, {
    icon: Zap,
    title: 'Energooszczędność',
    description: 'Nowoczesne rozwiązania budowlane i materiały'
  }, {
    icon: Users,
    title: '3 sypialnie + gabinet',
    description: 'Przemyślany układ dla komfortowego życia rodziny'
  }];
  return <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            O inwestycji
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nowoczesna inwestycja mieszkaniowa w sercu mazowieckiej przyrody. 
            Każdy szczegół został przemyślany z myślą o komforcie i bezpieczeństwie Twojej rodziny.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-xl bg-primary/10 text-foreground shadow-soft animate-fade-in">
          <p className="text-sm md:text-base">
            W standardzie: kompletna elewacja, kostka brukowa przed domem oraz opaska z kostki wokół domu. 
            Każdy dom posiada działkę o powierzchni ok. 290 m².
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => <Card key={index} className="card-gradient hover-lift border-0 shadow-soft animate-slide-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center justify-center">
            <div className="animate-scale-in">
              <div className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-2">4</div>
              <div className="text-muted-foreground">Domy w osiedlu</div>
            </div>
            <div className="animate-scale-in" style={{
            animationDelay: '100ms'
          }}>
              <div className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-2">170,5</div>
              <div className="text-muted-foreground">m² powierzchni</div>
            </div>
            <div className="animate-scale-in" style={{
            animationDelay: '200ms'
          }}>
              <div className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-2">12</div>
              <div className="text-muted-foreground">minut do Siedlec</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;