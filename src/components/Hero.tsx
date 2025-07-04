import { Button } from '@/components/ui/button';
import { ArrowDown, MapPin, Home, TreePine } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(85, 107, 47, 0.7), rgba(47, 47, 47, 0.4)), url('/lovable-uploads/e994d6d9-4fc7-49b4-b626-f86dbd10d446.png')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-scale-in">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">12 minut od centrum Siedlec</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Przystań Dąbrówka Ług
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-white/90">
              Twój rodzinny dom wśród natury
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
            Zamieszkaj w nowoczesnym domu z ogródkiem, otoczonym zielenią, zaledwie 12 minut od Siedlec. 
            Kameralne osiedle 4 domów w zabudowie bliźniaczej to idealne miejsce dla rodzin ceniących 
            ciszę, bezpieczeństwo i komfort życia.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Home className="h-4 w-4" />
              <span className="text-sm">4 nowoczesne domy</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <TreePine className="h-4 w-4" />
              <span className="text-sm">Otoczone zielenią</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">170,5 m² powierzchni</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white border-0 px-8 py-3 text-lg font-semibold shadow-medium hover-lift"
            >
              Skontaktuj się z nami
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
            >
              Poznaj szczegóły
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;