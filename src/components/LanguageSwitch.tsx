import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
        className="bg-card/80 backdrop-blur-sm border-border hover:bg-card"
      >
        <Globe className="w-4 h-4 mr-2" />
        {language === 'es' ? 'EN' : 'ES'}
      </Button>
    </div>
  );
};

export default LanguageSwitch;