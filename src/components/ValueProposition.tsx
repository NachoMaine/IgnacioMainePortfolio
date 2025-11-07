import { useLanguage } from '@/contexts/LanguageContext';

const ValueProposition = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground animate-fade-in">
            {t('aboutTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-lg p-8 shadow-card border border-border animate-slide-up">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('valueProposition1')} <span className="text-primary font-semibold">{t('responsibility')}</span> {language === 'es' ? 'y' : 'and'} <span className="text-primary font-semibold">{t('teamwork')}</span>.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                {t('valueProposition2')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-lg border-gradient shadow-card card-hover animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-gradient mb-2">5+</div>
                <div className="text-sm text-muted-foreground">{t('yearsExperience')}</div>
              </div>
              <div className="glass-card p-6 rounded-lg border-gradient shadow-card card-hover animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-gradient mb-2">6</div>
                <div className="text-sm text-muted-foreground">{t('projectsCompleted')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;