import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const skills = {
    languages: ["C#", "JavaScript", "Unreal Blueprints", "ShaderGraph", "VFXGraph"],
    engines: ["Unity Engine 2D/3D", "Unreal Engine", "Phaser"],
    tools: ["Photoshop", "Substance 3D", "Maya", "3DCoat", "GIT", "GitHub", "Jira", "Trello", "Visual Studio Code"],
    competencies: [
      "Pipeline Optimization",
      "Shader Development",
      "Asset Integration",
      "Performance Optimization",
      "Lighting & Rendering",
      "Tool Creation"
    ]
  };

  const SkillCategory = ({ title, items, icon }: { title: string; items: string[]; icon: string }) => (
    <div className="bg-card p-6 rounded-lg border border-border shadow-card">
      <div className="flex items-center mb-4">
        <div className="text-2xl mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
            <span className="text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            {t('skillsTitle')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCategory title={t('languages')}items={skills.languages} icon="💻" />
            <SkillCategory title={t('engines')} items={skills.engines} icon="🎮" />
            <SkillCategory title={t('tools')} items={skills.tools} icon="🛠️" />
            <SkillCategory title={t('skills')}items={skills.competencies} icon="🎯" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;