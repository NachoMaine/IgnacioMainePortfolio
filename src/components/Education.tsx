import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const education = [
    {
      title: t('licTitle'),
      institution: "Universidad Nacional de Rafaela",
      year: "2018 - 2024",
      type: "degree"
    },
    {
      title: t('certificationTitle'),
      institution: "UTN - Buenos Aires",
      year: "2023 - 2024",
      type: "certification"
    },
    {
      title: "First Certification in English (Level B2)",
      institution: "Cambridge English",
      year: "2014",
      type: "course"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'degree': return '🎓';
      case 'certification': return '🏆';
      case 'course': return '📚';
      default: return '📜';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            {t('educationTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{getIcon(item.type)}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-primary font-medium mb-1">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Continuous Learning Section */}
          <div className="mt-12 bg-card p-8 rounded-lg border border-border shadow-card text-center">
            <h3 className="text-xl font-semibold mb-4 text-foreground">{t('resumeTitle')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('resumeDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;