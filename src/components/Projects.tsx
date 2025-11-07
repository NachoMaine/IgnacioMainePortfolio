import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png"; // Reemplazar por tu imagen real

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: "Skinwalker",
      description: "Skinwalker es un juego de plataformas y acción tipo \"hack n' slash\" en el que jurarás una alianza con una bestia formidable para salvar a tu hija de una enfermedad terminal. Desarrollado por Sismo Games y publicado por Team17.",
      image: project1,
      technologies: ["Unity 2D", "C#", "Animator", "Cinemachine", "Timeline", "UI"]
    },
    {
      id: 2,
      title: "Simulador EPE VR",
      description: "Simulador de realidad virtual para la empresa provincial de energia cuyo objetivo es el de capacitar operarios en la ejecucion de maniobras para una estacion transformadora de 132kV",
      image: project2,
      technologies: ["Unreal Engine 4", "Visual Scripting", "VR", "Oculus", "Simulation", "Training"]
    },
    {
      id: 3,
      title: "Numbots",
      description: "Numbots es un juego de puzzles en 2D, creado con el objetivo de enseñar el sistema de valor posicional a niños de entre 9 y 13 años. Desarrollado en Unity para la empresa Legends of Learning",
      image: project4,
      technologies: ["Unity 2D", "C#", "Educational Games", "Puzzle Mechanics", "UI/UX", "Child-Friendly Design"]
    },
    {
      id: 4,
      title: "ChessBoom",
      description: "Chessboom fue desarrollado para participar en LA JAM 2021. Toma algunos conceptos del ajedrez, pero en lugar de trabajar con paciencia y estrategia contra tu contrincante, todo se convierte en una experiencia explosiva en busca del rey que decidió abandonar el tablero de juego.",
      image: project3,
      technologies: ["Unity 2D", "C#", "Game Jam", "Puzzle Platformer", "Chess Mechanics", "Explosive Gameplay"]
    },
    {
      id: 5,
      title: "Simulador de manejo APSV",
      description: "Simulador de conducción creado para la Agencia Provincial de Seguridad Vial (APSV). Se ha desarrollado un simulador vial multijugador diseñado para recrear un entorno de conducción bajo los efectos del consumo de alcohol en sangre. Desarrollado en Unreal Engine 4",
      image: project5,
      technologies: ["Unreal Engine 4", "Blueprints", "C++", "VR Simulation", "Multiplayer", "Educational Software"]
    },
    {
      id: 6,
      title: "Day on the Farm",
      description: "Day on the Farm es un juego de puzzles en pixel art que enseña las reacciones químicas en la vida cotidiana orientado a niños de 7 a 8 años.",
      image: project6,
      technologies: ["Unity 2D", "C#", "Pixel Art", "Educational Games", "Chemistry", "Child-Friendly Design"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            {t('projectsTitle')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-card rounded-lg overflow-hidden border border-border shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{
                        project.id === 1 ?  t('skinwalkerText') :
                        project.id === 2 ?  t('fightingText')  :
                        project.id === 3 ?  t('furiousText')  :
                        project.id === 4 ?  t('notEnoughText')  :
                        project.id === 5 ?  t('medicText') :
                        t('farmText') 
                      }</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" className="flex-1" asChild>
                      <a 
                        href={
                          project.id === 1 ? "https://youtu.be/4xG92utzJWA?si=GYwmA8d6dHjMRWNv" :
                          project.id === 2 ? "https://www.youtube.com/watch?v=gO9P09Y-tXQ&feature=youtu.be" :
                          project.id === 3 ? "https://youtu.be/Nc-zYKxbk74" :
                          project.id === 4 ? "https://youtu.be/GiEHN-l_nLo" :
                          project.id === 5 ? "https://unraftec.unraf.edu.ar/?p=1560" :
                          "https://youtu.be/b8etDj6L9M0"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('viewMore')}
                      </a>
                    </Button>
                    {project.id === 1 && (
                      <Button variant="ghost" className="flex-1" asChild>
                        <a 
                          href="https://store.steampowered.com/app/3086670/SKINWALKER/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Steam
                        </a>
                      </Button>
                    )}
                    {project.id === 4 && (
                      <Button variant="ghost" className="flex-1" asChild>
                        <a 
                          href="https://spn-games.itch.io/chessboom"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Itch.io
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;