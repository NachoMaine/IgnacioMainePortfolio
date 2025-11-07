import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Download } from "lucide-react";
import ArtStationIcon from "@/components/ui/artstation-icon";
import heroBackground from "@/assets/hero-background2.png";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-105"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-75" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground animate-slide-up pb-2">
            <span className="text-gradient">Ignacio Maine</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-primary mb-2 font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('unityDeveloper')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {t('degree')}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://www.linkedin.com/in/ignacio-maine-54b830369/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 hover:glow-effect transform"
            >
              <Linkedin size={24} />
            </a>
            <button 
              onClick={() => {
                const subject = language === 'es' 
                  ? 'Consulta sobre servicios de Technical Artist' 
                  : 'Inquiry about Technical Artist services';
                const body = language === 'es' 
                  ? 'Hola Ignacio,\n\nMe gustaría conversar sobre tu experiencia como Technical Artist y Pixel Artist.\n\nSaludos.'
                  : 'Hello Ignacio,\n\nI would like to discuss your experience as Technical Artist and Pixel Artist.\n\nBest regards.';
                
                const mailtoUrl = `mailto:mainenacho@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Intentar abrir mailto
                window.location.href = mailtoUrl;
                
                // Fallback: copiar email al portapapeles después de 2 segundos si no se abre
                setTimeout(() => {
                  navigator.clipboard.writeText('mainenacho@gmail.com').then(() => {
                    alert(language === 'es' 
                      ? 'Email copiado al portapapeles: mainenacho@gmail.com' 
                      : 'Email copied to clipboard: mainenacho@gmail.com');
                  }).catch(() => {
                    // Si no puede copiar, mostrar el email
                    alert(language === 'es' 
                      ? 'Por favor, escribe a: mainenacho@gmail.com' 
                      : 'Please write to: mainenacho@gmail.com');
                  });
                }, 2000);
              }}
              className="p-3 glass-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 hover:glow-effect transform"
            >
              <Mail size={24} />
            </button>
            <a 
              href="https://www.artstation.com/mainenacho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 hover:glow-effect transform"
            >
              <ArtStationIcon size={24} />
            </a>
          </div>
          
          {/* Download CV Button */}
          <div className="animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:glow-effect"
              asChild
            >
              <a href={language === 'es' ? "/CV-IGNACIO-MAINE.pdf" : "/ENGLISH-CV-IGNACIO-MAINE.pdf"} download={language === 'es' ? "CV-Ignacio-Maine.pdf" : "CV-Ignacio-Maine-EN.pdf"}>
                <Download className="mr-2 transition-transform duration-300 group-hover:animate-bounce" size={20} />
                {t('downloadCV')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;