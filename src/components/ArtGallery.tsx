import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

// Importar imágenes de arte
import art1 from "@/assets/art-1.png";
import art2 from "@/assets/art-2.png";
import art3 from "@/assets/art-3.png";
import art4 from "@/assets/art-4.png";
import art5 from "@/assets/art-5.png";
import art6 from "@/assets/art-6.png";

const ArtGallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artworks = [
    {
      id: 1,
      src: art1,
      title: "Character Design",
      description: "Diseño de personaje en estilo cartoon"
    },
    {
      id: 2,
      src: art2,
      title: "Environment Art",
      description: "Arte de entorno para videojuegos"
    },
    {
      id: 3,
      src: art3,
      title: "Concept Art",
      description: "Arte conceptual para proyecto indie"
    },
    {
      id: 4,
      src: art4,
      title: "Digital Art",
      description: "Arte digital y conceitual"
    },
    {
      id: 5,
      src: art5,
      title: "Icon Design",
      description: "Diseño de iconos para aplicaciones"
    },
    {
      id: 6,
      src: art6,
      title: "Pixel Art",
      description: "Arte en pixel para juegos retro"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground text-gradient animate-slide-up">
            {t('artGalleryTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('artGallerySubtitle')}
          </p>
          
          {/* Grid de imágenes en una sola fila */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto">
            {artworks.map((artwork, index) => (
              <div 
                key={artwork.id}
                className="group relative glass-card rounded-lg overflow-hidden border-gradient shadow-card hover:shadow-glow transition-all duration-500 cursor-pointer card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(artwork.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artwork.src} 
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                    <span className="text-white font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {t('viewFullSize')}
                    </span>
                  </div>
                  <div className="absolute inset-0 ring-2 ring-primary/0 group-hover:ring-primary/50 rounded-lg transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para imagen en tamaño completo */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-primary transition-all duration-300 z-10 glass-card rounded-full p-3 hover:scale-110 hover:glow-effect"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Artwork"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in glow-effect"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '95vw', maxHeight: '95vh' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtGallery;