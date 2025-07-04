import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Dziękujemy za wiadomość!",
        description: "Skontaktujemy się z Państwem w ciągu 24 godzin.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '698 857 062',
      action: 'tel:698857062',
      description: 'Zadzwoń do nas'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'biuro@dabrowkazacisze.pl',
      action: 'mailto:biuro@dabrowkazacisze.pl',
      description: 'Napisz do nas'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Dąbrówka Ług, 08-110 Siedlce',
      action: 'https://maps.app.goo.gl/sacWT3kkgnuTRwcb7',
      description: 'Zobacz na mapie'
    },
    {
      icon: Clock,
      title: 'Godziny kontaktu',
      content: 'Pon-Pt: 8:00-18:00, Sob: 9:00-15:00',
      action: null,
      description: 'Godziny pracy'
    }
  ];

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Masz pytania o nasze domy? Chcesz umówić się na prezentację? 
            Skontaktuj się z nami już dziś!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="card-gradient border-0 shadow-medium">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                  Wyślij wiadomość
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Imię i nazwisko *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+48 123 456 789"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="jan.kowalski@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Wiadomość *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full resize-none"
                      placeholder="Opisz swoje potrzeby i oczekiwania..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 shadow-medium hover-lift"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Wysyłanie...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Wyślij wiadomość</span>
                      </div>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    * Pola wymagane. Twoje dane są bezpieczne i nie będą przekazywane osobom trzecim.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8">
              Dane kontaktowe
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="card-gradient hover-lift border-0 shadow-soft animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-primary hover:text-primary-dark transition-smooth font-medium"
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{info.content}</div>
                        )}
                        <p className="text-muted-foreground text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <Card className="card-gradient border-0 shadow-medium mt-8">
              <CardContent className="p-6 text-center">
                <h4 className="font-playfair text-lg font-semibold text-foreground mb-3">
                  Potrzebujesz szybkiej odpowiedzi?
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Zadzwoń do nas bezpośrednio lub umów się na spotkanie
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    asChild 
                    className="flex-1 bg-primary hover:bg-primary-dark text-white"
                  >
                    <a href="tel:698857062">
                      <Phone className="h-4 w-4 mr-2" />
                      Zadzwoń teraz
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline"
                    className="flex-1"
                  >
                    <a href="mailto:biuro@dabrowkazacisze.pl">
                      <Mail className="h-4 w-4 mr-2" />
                      Napisz e-mail
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;