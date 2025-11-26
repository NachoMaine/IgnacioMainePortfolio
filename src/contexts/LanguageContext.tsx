import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Hero
    unityDeveloper: 'Unity Developer - Technical Artist',
    degree: 'Licenciado en Producción de Videojuegos y Entretenimiento Digital - UNRaf',
    downloadCV: 'Descargar CV',
    
    // ValueProposition (merged with About)
    aboutTitle: 'Propuesta de Valor',
    valueProposition1: 'Mi propuesta se basa en dos pilares:',
    responsibility: 'responsabilidad',
    teamwork: 'trabajo en equipo',
    valueProposition2: 'Como Technical Artist y desarrollador especializado en Unity y Unreal Engine, combino una mirada técnica y artística para optimizar flujos de trabajo y potenciar la calidad visual de cada proyecto. Con experiencia en VFX, shaders, herramientas personalizadas e integración de assets, aporto soluciones eficientes que conectan arte y programación. Mi enfoque colaborativo y adaptable busca fortalecer al equipo, garantizando resultados de calidad y transformando cada desafío técnico en una oportunidad de crecimiento.',
    yearsExperience: 'Años de experiencia',
    projectsCompleted: 'Proyectos completados',
    clientSatisfaction: 'Satisfacción del cliente',
    supportAvailable: 'Soporte disponible',
    
    // Projects
    projectsTitle: 'Proyectos Destacados',
    projectsSubtitle: 'Una selección de trabajos que demuestran mi experiencia en desarrollo de videojuegos',
    skinwalkerText: 'Skinwalker es un juego de plataformas y acción tipo "hack n\' slash" en el que jurarás una alianza con una bestia formidable para salvar a tu hija de una enfermedad terminal. Desarrollado por Sismo Games y publicado por Team17.',
    furiousText: 'Numbots es un juego de puzzles en 2D, creado con el objetivo de enseñar el sistema de valor posicional a niños de entre 9 y 13 años. Desarrollado en Unity para la empresa Legends of Learning.',
    fightingText: 'Simulador de realidad virtual para la empresa provincial de energia cuyo objetivo es el de capacitar operarios en la ejecucion de maniobras para una estacion transformadora de 132kV.',
    notEnoughText: 'Chessboom fue desarrollado para participar en LA JAM 2021. Toma algunos conceptos del ajedrez, pero en lugar de trabajar con paciencia y estrategia contra tu contrincante, todo se convierte en una experiencia explosiva en busca del rey que decidió abandonar el tablero de juego.',
    medicText: 'Simulador de conducción creado para la Agencia Provincial de Seguridad Vial (APSV). Se ha desarrollado un simulador vial multijugador diseñado para recrear un entorno de conducción bajo los efectos del consumo de alcohol en sangre. Desarrollado en Unreal Engine 4.',
    farmText: 'Day on the Farm es un juego de puzzles en pixel art que enseña las reacciones químicas en la vida cotidiana orientado a niños de 7 a 8 años.',
    viewMore: 'Ver Más',
    
    // Skills
    skillsTitle: 'Habilidades Técnicas',
    skillsSubtitle: 'Tecnologías y herramientas que domino para el desarrollo de videojuegos',
    languages: 'Lenguajes',
    engines: 'Motores',
    tools: 'Herramientas',
    skills: 'Habilidades',
    skill1: 'Arquitectura de código',
    skill2: 'Optimización de rendimiento',
    skill3: 'Patrones de diseño',
    skill4: 'Implementación de mecánicas',
    
            // Experience
    experienceTitle: 'Experiencia Profesional',
    sismoPosition: 'Technical Artist | Pixel Artist',
    sismoDescription: 'Technical Artist y Pixel Artist contribuyendo al ciclo completo de desarrollo del proyecto Skinwalker, apoyando tanto la producción artística como la técnica.',

    task: 'Tareas/proyectos principales:',
    sismo1: 'Creación de VFX, decoración de entornos e integración de assets 2D, optimizando el rendimiento in‑game.',
    sismo2: 'Desarrollo de herramientas personalizadas en C# y shaders con ShaderGraph.',
    sismo3: 'Colaboración con artistas y programadores para definir y refinar flujos de trabajo técnicos.',
    sismo4: 'Producción de una amplia variedad de sprites, incluyendo personajes, animaciones y assets de entorno.',
    sismo5: 'Organización de tareas y coordinación de la producción usando Jira y Slack.',

    labCompany: 'Laboratorio Experiencia de Usuario - UNRaf Tec',
    labPosition: 'Junior Technical Artist | Unity y Unreal Developer',
    labDescription: 'Desarrollador y Technical Artist que contribuye a la creación de experiencias de Realidad Virtual, simuladores de entrenamiento y juegos educativos.',
    lab1: 'Trabajó en el desarrollo completo del simulador VR de Subestación Eléctrica de 132 kV para la Empresa Provincial de Energía (EPE), incluyendo desarrollo en Blueprint y el pipeline completo de assets 3D.',
    lab2: 'Desarrollador de un simulador de conducción multijugador por intoxicación alcohólica para la Agencia Provincial de Seguridad Vial, participando en Blueprints y el pipeline completo de assets 3D.',
    lab3: 'Desarrolló juegos educativos para la plataforma Legends of Learning usando Unity, trabajando en la programación de gameplay y en la producción de assets 2D y animaciones.',
    lab4: 'Creó modelos 3D e integró entornos para aplicaciones VR en Oculus Quest 2.',
    lab5: 'Desarrolló experiencias interactivas usando Unity con C# y Unreal Engine 4 con Visual Scripting.',
    lab6: 'Colaboró con equipos multidisciplinarios para diseñar, prototipar y refinar herramientas de entrenamiento inmersivo.',

    argentinaProgramaCompany: 'Argentina Programa 4.0',
    tutorTitle: 'Profesor de Arte de Curso Desarrollo de Videojuegos Junior',
    tutorDescription: 'Enseñanza y asistencia en el área artística del curso de desarrollo de videojuegos.',
    tutor1: 'Impartir clases sobre arte 2D, conceptos de diseño y pixel art para videojuegos.',
    tutor2: 'Resolución de dudas técnicas sobre herramientas artísticas y flujos de trabajo creativos.',

    freelanceCompany: 'Freelance',
    freelancePosition: '2D Artist',
    freelanceDescription: 'Trabajo independiente como artista 2D realizando encargos digitales y colaboraciones con plataformas educativas.',
    freelance1: 'Comisiones de arte digital (ilustración, conceptos de personajes, fan arts).',
    freelance2: 'Producción, animación e integración de arte 2D para la plataforma educativa Legends of Learning.',

    // Art Gallery
    artGalleryTitle: 'Artista 2D',
    artGallerySubtitle: 'Una selección de mis trabajos como artista 2D, incluyendo diseño de personajes y entornos',
    viewFullSize: 'Ver en grande',
    
    
    // Education
    
    // Education
    educationTitle: 'Educación y Certificaciones',
    licTitle: 'Lic. en Producción de Videojuegos y Entretenimiento Digital',
    certificationTitle: 'Programación de videojuegos con Unity: Nivel Avanzado',
    course2Title: 'Programación Web con Javascript',
    resumeTitle: 'Perfeccionamiento continuo',
    resumeDescription: 'Mantengo mis habilidades actualizadas siguiendo las últimas tendencias en desarrollo de videojuegos, participando en comunidades de desarrolladores y experimentando con nuevas tecnologías y metodologías.',
    
    // Contact
    contactTitle: '¿Listo para Impulsar tu Proyecto?',
    contactSubtitle: '¿Buscas un Technical Artist capaz de integrarse a tu equipo y crear experiencias visuales impactantes?',
    contactSubtitle2: 'Hablemos sobre cómo puedo aportar valor creativo y técnico a tu proyecto.',
    email: 'Email',
    linkedin: 'LinkedIn',
    availability: 'Disponibilidad',
    availabilityText: 'Remoto / Presencial - CABA Buenos Aires',
    sendEmail: 'Enviar Email',
    responseTime: 'Tiempo de respuesta:',
    responseTimeText: 'Menos de 24 horas',
    availabilityTime: 'Disponibilidad:',
    availabilityTimeText: 'Lun-Vie 7:00-18:00 GMT-3'
  },
  en: {
    // Hero
    unityDeveloper: 'Unity Developer - Technical Artist',
    degree: 'Bachelor\'s Degree in Video Game Production and Digital Entertainment - UNRaf',
    downloadCV: 'Download CV',
    
    // ValueProposition (merged with About)
    aboutTitle: 'Value Proposition',
    valueProposition1: 'My proposal is based on two pillars:',
    responsibility: 'responsibility',
    teamwork: 'teamwork',
    valueProposition2: 'As a Technical Artist and developer specialized in Unity and Unreal Engine, I combine a technical and artistic perspective to optimize workflows and enhance the visual quality of each project. With experience in VFX, shaders, custom tools, and asset integration, I provide efficient solutions that connect art and programming. My collaborative and adaptable approach seeks to strengthen the team, ensuring quality results and transforming every technical challenge into a growth opportunity.',
    yearsExperience: 'Years of experience',
    projectsCompleted: 'Projects completed',
    clientSatisfaction: 'Client satisfaction',
    supportAvailable: 'Support available',
    
    // Projects
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'A selection of works that demonstrate my experience in video game development',
    skinwalkerText: 'Skinwalker is a hack n\' slash action-platformer game where you will forge an alliance with a formidable beast to save your daughter from a terminal illness. Developed by Sismo Games and published by Team17.',
    furiousText: 'Numbots is a 2D puzzle game created with the objective of teaching the positional value system to children between 9 and 13 years old. Developed in Unity for Legends of Learning.',
    fightingText: 'Virtual reality simulator for the provincial energy company whose objective is to train operators in the execution of maneuvers for a 132kV transformer station.',
    notEnoughText: 'ChessBoom was developed to participate in LA JAM 2021. It takes some concepts from chess, but instead of working with patience and strategy against your opponent, everything becomes an explosive experience in search of the king who decided to abandon the game board.',
    medicText: 'Driving simulator created for the Provincial Road Safety Agency (APSV). A multiplayer road simulator has been developed designed to recreate a driving environment under the effects of blood alcohol consumption. Developed in Unreal Engine 4.',
    farmText: 'Day on the Farm is a pixel art puzzle game that teaches chemical reactions in everyday life aimed at children aged 7 to 8 years.',
    viewMore: 'View More',
    
    // Skills
    skillsTitle: 'Technical Skills',
    skillsSubtitle: 'Technologies and tools I master for video game development',
    languages: 'Languages',
    engines: 'Engines',
    tools: 'Tools',
    skills: 'Skills',
    skill1: 'Code Architecture',
    skill2: 'Performance Optimization',
    skill3: 'Design Patterns',
    skill4: 'Implementation of Mechanics',


        // Experience
    experienceTitle: 'Professional Experience',
    sismoPosition: 'Technical Artist | Pixel Artist',
    sismoDescription: 'Technical Artist and Pixel Artist contributing to the full development cycle of the Skinwalker project, supporting both artistic and technical production.',

    task: 'Main tasks/projects:',
    sismo1: 'Created VFX, environment dressing, and integrated 2D assets while optimizing in‑game performance.',
    sismo2: 'Developed custom tools using C# and shaders using ShaderGraph.',
    sismo3: 'Collaborated with artists and programmers to define and refine technical workflows.',
    sismo4: 'Produced a wide range of sprites including characters, animations, and environment assets.',
    sismo5: 'Organized tasks and coordinated production using Jira and Slack.',

    labCompany: 'User Experience Laboratory - UNRaf Tec',
    labPosition: 'Junior Technical Artist | Unity and Unreal Developer',
    labDescription: 'Developer and Technical Artist contributing to the creation of Virtual Reality experiences, training simulators and educational games.',
    lab1: 'Worked on the full development of the 132 kV Electrical Substation VR simulator for the Provincial Energy Company (EPE), including Blueprint development and the full 3D asset pipeline.',
    lab2: 'Developer of a multiplayer alcohol-impairment driving simulator for the Provincial Road Safety Agency, working on Blueprint development and the full 3D asset pipeline.',
    lab3: 'Developed educational games for the Legends of Learning platform using Unity, working on both gameplay programming and the production of 2D assets and animations.',
    lab4: 'Created 3D models and integrated environments for VR applications on Oculus Quest 2.',
    lab5: 'Developed interactive experiences using Unity with C# and Unreal Engine 4 with Visual Scripting.',
    lab6: 'Collaborated with multidisciplinary teams to design, prototype and refine immersive training tools.',

    argentinaProgramaCompany: 'Argentina Programa 4.0',
    tutorTitle: 'Art Professor for Junior Video Game Development Course',
    tutorDescription: 'Teaching and assistance in the artistic area of the video game development course.',
    tutor1: 'Teaching classes on 2D art, design concepts and pixel art for video games.',
    tutor2: 'Resolving technical questions about artistic tools and creative workflows.',

    freelanceCompany: 'Freelance',
    freelancePosition: '2D Artist',
    freelanceDescription: 'Independent work as a 2D artist performing digital commissions and collaborations with educational platforms.',
    freelance1: 'Digital art commissions (illustration, character concepts, fan arts).',
    freelance2: 'Production, animation and integration of 2D art for the educational platform Legends of Learning.',

    // Art Gallery
    artGalleryTitle: '2D Artist',
    artGallerySubtitle: 'A selection of my work as a 2D artist, including character design and environments',
    viewFullSize: 'View full size',
    
    
    // Education
    educationTitle: 'Education and Certifications',
    licTitle: 'Bachelor Degree in Video Game Production and Digital Entertainment',
    certificationTitle: 'Video Game Programming with Unity: Advanced Level',
    course2Title: 'Web Programming with Javascript',
    resumeTitle: 'Continuous Improvement',
    resumeDescription: 'I keep my skills up-to-date by following the latest trends in video game development, participating in developer communities, and experimenting with new technologies and methodologies.',
    
    // Contact
    contactTitle: 'Ready to Boost Your Project?',
    contactSubtitle: 'Looking for a Technical Artist capable of integrating into your team and creating impactful visual experiences?',
    contactSubtitle2: 'Let\'s talk about how I can add creative and technical value to your project.',
    email: 'Email',
    linkedin: 'LinkedIn',
    availability: 'Availability',
    availabilityText: 'Remote / On-site - CABA Buenos Aires',
    sendEmail: 'Send Email',
    responseTime: 'Response time:',
    responseTimeText: 'Less than 24 hours',
    availabilityTime: 'Availability:',
    availabilityTimeText: 'Mon-Fri 7:00-18:00 GMT-3'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};