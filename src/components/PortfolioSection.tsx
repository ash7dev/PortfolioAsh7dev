import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Eye, Code, X, Shield, Lock } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showConfidentialityModal, setShowConfidentialityModal] = useState(false);


  const projects = [
    {
      id: 1,
      title: "NexusMarket",
      description: "Plateforme e-commerce complète spécialement conçue pour les commerçants sénégalais. Permet aux entrepreneurs de créer et gérer facilement leur boutique en ligne avec des fonctionnalités adaptées au marché local (paiements mobiles, gestion des stocks, analytics).",
      image: "/images/portfolio/PROJETMEMS.png",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "EXPRESS","MongoDB","JWT","Swagger"],
      category: "fullstack",
      demoUrl: "https://mems-wheat.vercel.app",
      githubUrl: "https://github.com/ash7dev/Mems",
      featured: true
    },
    {
      id: 2,
      title: "Luxious Couture",
      description: "Application PWA (Progressive Web App) e-commerce pour une marque de mode proposant des vêtements sur mesure et prêt-à-porter. Multilingue (Français, Anglais, Wolof) avec installation sur l'écran d'accueil, thème clair/sombre et espace administrateur sécurisé.",
      image: "/images/portfolio/PWAAPP.png",
      technologies: ["Vite", "HTML5", "CSS3", "JavaScript", "PWA", "Vercel"],
      category: "frontend",
      demoUrl: "https://pwa-application-gules.vercel.app",
      githubUrl: "https://github.com/ash7dev/PwaApplication",
      featured: true
    },
    {
      id: 3,
      title: "API - Agence Immobilière",
      description: "API RESTful complète pour la gestion d'une agence immobilière avec authentification JWT, gestion des rôles (admin/agent), CRUD des propriétaires, immeubles, locataires, locations et paiements. Documentation Swagger intégrée et collection Postman fournie.",
      image: "/images/portfolio/POSTMAN.png",
      technologies: ["Laravel", "PHP", "MySQL", "JWT", "Swagger", "Postman"],
      category: "backend",
      demoUrl: null, // API backend, pas de démo visuelle
      githubUrl: "https://github.com/ash7dev/ApiGestionImmo",
      featured: false
    },
    {
      id: 4,
      title: "Gestion de Planification des Cours",
      description: "Application web Django complète pour la gestion de planification des cours dans un établissement d'enseignement. Gestion des filières, classes, professeurs, matières et cours avec validation des conflits d'horaires, interface moderne Bootstrap 5 et base de données MySQL.",
      image: "/images/portfolio/GESTIONCOURS.png",
      technologies: ["Django 5.2", "Python", "MySQL", "Bootstrap 5", "Font Awesome"],
      category: "fullstack",
      demoUrl: null, // Application locale
      githubUrl: "https://github.com/ash7dev/Gestion-Cours",
      featured: true
    },
    {
      id: 5,
      title: "Gestion Immobilière",
      description: "Application complète de gestion immobilière avec interface React et backend Laravel. Gestion des biens, locations, paiements et locataires avec tableau de bord moderne, authentification JWT et rapports financiers personnalisables.",
      image: "/images/portfolio/GESTIONIMMO.png",
      technologies: ["React.js", "Material-UI", "Laravel", "PHP", "MySQL", "JWT"],
      category: "fullstack",
      demoUrl: null, // Application locale
      githubUrl: "https://github.com/ash7dev/PROJET-GESTION_IMMO",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Personnel",
      description: "Portfolio personnel moderne et responsive développé avec React, TypeScript et Tailwind CSS. Interface élégante avec animations Framer Motion, sections modulaires (Services, Portfolio, Contact), thème sombre/clair, et design optimisé pour mettre en valeur mes compétences en développement full-stack.",
      image: "/images/portfolio/PORTFOLIO.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "frontend",
      demoUrl: "https://ash-dev.vercel.app",
      githubUrl: "https://github.com/ash7dev/portfolio-personnel",
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous les projets', count: projects.length },
    { key: 'featured', label: 'Projets phares', count: projects.filter(p => p.featured).length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { key: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio & Réalisations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez une sélection de mes projets récents, des applications web complètes 
            aux APIs robustes, créés avec les dernières technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={(e) => {
                e.stopPropagation();
                console.log('Filter button clicked:', filter.key);
                setActiveFilter(filter.key);
              }}
              className={`relative flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-200 z-20 pointer-events-auto ${
                activeFilter === filter.key
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 border border-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === filter.key 
                  ? 'bg-primary-foreground/20 text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeFilter}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Project Actions - Plus visible */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 opacity-100 z-30">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg text-sm pointer-events-auto"
                        title="Voir la démo"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('Demo link clicked:', project.demoUrl);
                          // Vérifier si c'est l'URL confidentielle
                          if (project.demoUrl === 'https://mems-wheat.vercel.app') {
                            e.preventDefault();
                            setShowConfidentialityModal(true);
                          }
                        }}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="hidden sm:inline">Démo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors shadow-lg text-sm pointer-events-auto"
                      title="Voir le code source"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('GitHub link clicked:', project.githubUrl);
                      }}
                    >
                      <Code className="h-4 w-4" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 text-xs font-medium rounded-full shadow-lg">
                        ⭐ Projet phare
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2 py-1 bg-black/50 text-white text-xs font-medium rounded-md backdrop-blur-sm">
                      {project.category === 'fullstack' ? 'Full Stack' : 
                       project.category === 'frontend' ? 'Frontend' : 
                       project.category === 'backend' ? 'Backend' : project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                   {/* Technologies */}
                   <div className="space-y-2">
                     <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                       <Code className="h-4 w-4" />
                       Technologies
                     </h4>
                     <div className="flex flex-wrap gap-2">
                       {project.technologies.map((tech) => (
                         <span
                           key={tech}
                           className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-lg hover:border-primary/40 transition-colors"
                         >
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>

                   {/* Action buttons at bottom */}
                   <div className="flex gap-2 mt-4 pt-4 border-t border-border relative z-20">
                     {project.demoUrl ? (
                       <a
                         href={project.demoUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="relative flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium transition-colors text-sm border border-blue-200 pointer-events-auto"
                         onClick={(e) => {
                           e.stopPropagation();
                           console.log('Demo link clicked:', project.demoUrl);
                           // Vérifier si c'est l'URL confidentielle
                           if (project.demoUrl === 'https://mems-wheat.vercel.app') {
                             e.preventDefault();
                             setShowConfidentialityModal(true);
                           }
                         }}
                       >
                         <Eye className="h-4 w-4" />
                         <span className="hidden sm:inline">Démo live</span>
                         <span className="sm:hidden">Démo</span>
                       </a>
                     ) : (
                       <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 text-gray-500 rounded-lg text-sm border border-gray-200">
                         <Eye className="h-4 w-4" />
                         <span className="hidden sm:inline">Démo locale</span>
                       </div>
                     )}
                     <a
                       href={project.githubUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="relative flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg font-medium transition-colors text-sm border border-gray-200 pointer-events-auto"
                       onClick={(e) => {
                         e.stopPropagation();
                         console.log('GitHub link clicked:', project.githubUrl);
                       }}
                     >
                       <Github className="h-4 w-4" />
                       <span className="hidden sm:inline">Code source</span>
                       <span className="sm:hidden">Code</span>
                     </a>
                   </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg mb-2">
              Aucun projet trouvé pour ce filtre
            </p>
            <p className="text-muted-foreground/70 text-sm">
              Essayez un autre filtre pour voir plus de projets
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-6 bg-card rounded-2xl border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{projects.length}</div>
            <div className="text-sm text-muted-foreground">Projets totaux</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{projects.filter(p => p.featured).length}</div>
            <div className="text-sm text-muted-foreground">Projets phares</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{projects.filter(p => p.demoUrl).length}</div>
            <div className="text-sm text-muted-foreground">Démos en ligne</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Open source</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-all duration-200 shadow-lg hover:shadow-primary/25"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Démarrer un projet
            <ExternalLink className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Modal de confidentialité */}
      {showConfidentialityModal && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowConfidentialityModal(false)}
        >
          <motion.div 
            className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-border backdrop-blur-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg shadow-lg shadow-primary/25">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Accès Restreint
                </h3>
              </div>
              <button
                onClick={() => setShowConfidentialityModal(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-primary" />
                <h4 className="font-medium text-foreground">
                  Confidentialité et Sécurité
                </h4>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm leading-relaxed">
                  Pour des raisons de <span className="font-semibold text-foreground">confidentialité et de sécurité</span>, la démonstration en ligne de ce projet n'est pas accessible au public.
                </p>
                
                <p className="text-sm leading-relaxed">
                  Cette application contient des données sensibles, des fonctionnalités propriétaires et des informations stratégiques qui nécessitent une protection maximale.
                </p>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full flex-shrink-0 mt-0.5">
                      <Shield className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Approche Professionnelle
                      </p>
                      <p className="text-xs text-foreground/80">
                        Nous privilégions la sécurité et la protection des données. Cette restriction démontre notre engagement envers les meilleures pratiques de développement et notre respect des normes industrielles les plus strictes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-6 border-t border-border bg-secondary/50 rounded-b-2xl">
              <button
                onClick={() => setShowConfidentialityModal(false)}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-200 shadow-lg hover:shadow-primary/25"
              >
                J'ai compris
              </button>
              <a
                href="#contact"
                onClick={() => setShowConfidentialityModal(false)}
                className="flex-1 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-medium transition-colors text-center"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioSection;