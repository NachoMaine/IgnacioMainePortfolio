import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      company: "SISMO Games - Skinwalker",
      position: t('sismoPosition'),
      period: "2022 - 2025",
      description: t('sismoDescription'),
      achievements: [
        t('sismo1'),
        t('sismo2'),
        t('sismo3'),
        t('sismo4'),
        t('sismo5'),
      ]
    },
    {
      company: t('labCompany'),
      position: t('labPosition'),
      period: "2020 - 2022",
      description: t('labDescription'),
      achievements: [
        t('lab1'),
        t('lab2'),
        t('lab3'),
        t('lab4'),
      ]
    },
    {
      company: t('argentinaProgramaCompany'),
      position: t('tutorTitle'),
      period: "2023",
      description: t('tutorDescription'),
      achievements: [
        t('tutor1'),
        t('tutor2')
      ]
    },
    {
      company: t('freelanceCompany'),
      position: t('freelancePosition'),
      period: "2020 - 2025",
      description: t('freelanceDescription'),
      achievements: [
        t('freelance1'),
        t('freelance2'),
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            {t('experienceTitle')}
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  
                  <div className="bg-card p-6 rounded-lg border border-border shadow-card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                        <h4 className="text-primary font-medium">{exp.company}</h4>
                      </div>
                      <span className="text-muted-foreground bg-secondary px-3 py-1 rounded-full text-sm mt-2 md:mt-0 self-start">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">{t('task')}</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;