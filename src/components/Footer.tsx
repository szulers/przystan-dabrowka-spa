import { Button } from '@/components/ui/button';
import { Heart, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'O inwestycji', id: 'about' },
    { label: 'Rozkład pomieszczeń', id: 'layout' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Lokalizacja', id: 'location' }
  ];

  return (
    <footer className="bg-accent text-accent-foreground py-16 relative">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-strong hover-lift"
        size="sm"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/c8a23028-eef7-4544-91a9-9c4923e3fd82.png" 
                alt="Dąbrówka Zacisze Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-playfair font-bold text-xl text-white">
                  Dąbrówka Zacisze
                </h3>
                <p className="text-white/80 text-sm">Nowoczesne domy dla rodzin</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Kameralne osiedle 4 domów w zabudowie bliźniaczej. Nowoczesne, energooszczędne domy 
              z ogrodem i garażem – idealne miejsce dla rodziny w naturalnym otoczeniu.
            </p>
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <Heart className="h-4 w-4 text-red-400" />
              <span>Stworzono z myślą o rodzinach</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg text-white mb-6">
              Szybkie linki
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-white transition-smooth text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-lg text-white mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:698857062"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-smooth"
                >
                  <Phone className="h-4 w-4" />
                  <span>698 857 062</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:biuro@dabrowkazacisze.pl"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-smooth"
                >
                  <Mail className="h-4 w-4" />
                  <span>biuro@dabrowkazacisze.pl</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/sacWT3kkgnuTRwcb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-white/70 hover:text-white transition-smooth"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Dąbrówka Ług<br />08-110 Siedlce</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Dąbrówka Zacisze. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-white transition-smooth"
              >
                Polityka prywatności
              </button>
              <span>|</span>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-white transition-smooth"
              >
                Regulamin
              </button>
              <span>|</span>
              <a 
                href="mailto:biuro@dabrowkazacisze.pl"
                className="hover:text-white transition-smooth"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;