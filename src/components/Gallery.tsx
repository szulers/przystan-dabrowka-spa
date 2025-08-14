import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = [
    {
      src: '/lovable-uploads/6ee6e733-b10b-4302-9fe0-353c0ab55a89.png',
      alt: 'Widok na osiedle Dąbrówka Zacisze z głównej drogi',
      category: 'Zewnętrzne'
    },
    {
      src: '/lovable-uploads/2acdf989-f381-43ce-85eb-d3910ab38101.png',
      alt: 'Domy bliźniacze Dąbrówka Zacisze – elewacja frontowa',
      category: 'Zewnętrzne'
    },
    {
      src: '/lovable-uploads/babee5a7-7ce4-4464-89bd-9993fd4aebcf.png',
      alt: 'Widok na osiedle z głównej drogi (wariant ujęcia)',
      category: 'Zewnętrzne'
    },
    {
      src: '/lovable-uploads/9420677e-3b4c-4a9b-b593-fa7b988f34d6.png',
      alt: 'Dom z garażem i ogrodem w Dąbrówka Zacisze',
      category: 'Zewnętrzne'
    },
    {
      src: '/lovable-uploads/66de8c7d-36d0-4a05-ba53-17f29b7bd6bf.png',
      alt: 'Kameralne osiedle 4 domów – Dąbrówka Zacisze',
      category: 'Zewnętrzne'
    },
    {
      src: '/lovable-uploads/0a7f7352-e56a-4130-8c4c-5a7fbd6a7cb1.png',
      alt: 'Widok z ogrodu na dom – Dąbrówka Zacisze',
      category: 'Zewnętrzne'
    },
    {
      src: '/lovable-uploads/0a1d84d6-f3a1-4a64-ba20-1e76d17674f8.png',
      alt: 'Salon z aneksem kuchennym – nowoczesne wnętrze',
      category: 'Wnętrza'
    },
    {
      src: '/lovable-uploads/5dfdf22a-f265-4c93-b677-d1e55511a745.png',
      alt: 'Nowoczesna kuchnia – dom Dąbrówka Zacisze',
      category: 'Wnętrza'
    },
    {
      src: '/lovable-uploads/d5abed06-924b-49b5-8f49-e968523ec425.png',
      alt: 'Salon z nowoczesną funkcjonalną przestrzenią',
      category: 'Wnętrza'
    },
    {
      src: '/lovable-uploads/78526a10-53ac-4fc7-9a0c-e7b4b1259cb6.png',
      alt: 'Stylowy salon – komfortowe wnętrze',
      category: 'Wnętrza'
    },
    {
      src: '/lovable-uploads/270f9780-ff25-4a97-8b01-b93ef37646e6.png',
      alt: 'Rzut parteru – A1_RZUT PARTERU (1)',
      category: 'Rzuty'
    },
    {
      src: '/lovable-uploads/6ca660b1-2c61-4f2a-b427-ec4daa005b7f.png',
      alt: 'Rzut piętra – A1_RZUT PIĘTRA (2)',
      category: 'Rzuty'
    },
    {
      src: '/lovable-uploads/e994d6d9-4fc7-49b4-b626-f86dbd10d446.png',
      alt: 'Widok zewnętrzny osiedla',
      category: 'Zewnętrzne'
    },
    {
      src: '/lovable-uploads/1c879603-c4f9-4b16-97e8-8d8305d03f73.png',
      alt: 'Widok na osiedle z drogi – Inwestycja Dąbrówka Zacisze',
      category: 'Zewnętrzne'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (src: string) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Galeria
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Zobacz jak będą wyglądać Twoje przyszłe wnętrza i otoczenie. 
            Nowoczesna architektura w harmonii z naturą.
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative mb-12">
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-strong">
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover cursor-pointer transition-smooth hover:scale-105"
              onClick={() => openLightbox(images[currentSlide].src)}
            />
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="text-white">
                <span className="inline-block bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {images[currentSlide].category}
                </span>
                <h3 className="text-xl font-semibold">{images[currentSlide].alt}</h3>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  currentSlide === index 
                    ? 'bg-primary' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-soft hover-lift"
              onClick={() => {
                setCurrentSlide(index);
                openLightbox(image.src);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-32 md:h-40 object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                <span className="text-white text-sm font-medium text-center px-2">
                  {image.alt}
                </span>
              </div>
              <div className="absolute top-2 left-2">
                <span className="bg-primary/80 text-white px-2 py-1 rounded text-xs font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-5xl w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20 p-2"
            >
              <X className="h-6 w-6" />
            </Button>
            <img 
              src={lightboxImage}
              alt="Galeria"
              className="w-full h-auto rounded-lg shadow-strong max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;