import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {t('contactSubtitle')}<br />
            {t('contactSubtitle2')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-lg border-gradient shadow-card card-hover animate-scale-in">
              <div className="text-3xl mb-4 animate-float">📩</div>
               <h3 className="font-semibold text-foreground mb-2">{t('email')}</h3>
               <p className="text-primary">mainenacho@gmail.com</p>
             </div>
             <div className="glass-card p-6 rounded-lg border-gradient shadow-card card-hover animate-scale-in" style={{ animationDelay: '0.2s' }}>
               <div className="text-3xl mb-4 animate-float" style={{ animationDelay: '1s' }}>🔗</div>
               <h3 className="font-semibold text-foreground mb-2">{t('linkedin')}</h3>
               <a 
                  href="https://www.linkedin.com/in/ignacio-maine-54b830369/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors duration-300"
                >
                linkedin.com/in/ignacio-maine-54b830369/
                </a>
             </div>
             <div className="glass-card p-6 rounded-lg border-gradient shadow-card card-hover animate-scale-in" style={{ animationDelay: '0.4s' }}>
               <div className="text-3xl mb-4 animate-float" style={{ animationDelay: '2s' }}>📍</div>
               <h3 className="font-semibold text-foreground mb-2">{t('availability')}</h3>
               <p className="text-muted-foreground">{t('availabilityText')}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:glow-effect"
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
            >
               {t('sendEmail')}
             </Button>
             <Button 
               variant="glow" 
               size="lg" 
               className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:glow-effect"
               asChild
             >
               <a href={language === 'es' ? "/CV-IGNACIO-MAINE.pdf" : "/ENGLISH-CV-IGNACIO-MAINE.pdf"} download={language === 'es' ? "CV-Ignacio-Maine.pdf" : "CV-Ignacio-Maine-EN.pdf"}>
                 {t('downloadCV')}
               </a>
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-card rounded-lg border border-border shadow-card">
             <p className="text-muted-foreground">
               <span className="text-primary font-semibold">{t('responseTime')}</span> {t('responseTimeText')} • 
               <span className="text-primary font-semibold"> {t('availabilityTime')}</span> {t('availabilityTimeText')}
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;