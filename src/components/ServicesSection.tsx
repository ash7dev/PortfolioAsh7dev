import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Smartphone, 
  Shield, 
  Rocket,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type Service = {
  icon: typeof Code2;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  qualityFeatures: string[];
  color: string;
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const services = useMemo(() => [
    {
      icon: Code2,
      title: "Développement Frontend",
      description: "Applications web modernes avec React, Next.js et TypeScript. Interface utilisateur intuitive et responsive.",
      fullDescription: "Le développement frontend consiste à créer la partie visible et interactive d'une application web avec laquelle les utilisateurs interagissent directement. Cela inclut la conception d'interfaces utilisateur intuitives, l'implémentation d'interactions fluides, l'optimisation des performances et l'assurance d'une expérience utilisateur exceptionnelle sur tous les appareils.",
      technologies: [ "JavaScript","React", "Next.js", "TypeScript", "Tailwind CSS"],
      qualityFeatures: [
        "Optimisation des performances et du temps de chargement",
        "Design responsive et mobile-first",
        "Accessibilité web (WCAG 2.1)",
        "Tests unitaires et d'intégration (Jest, Testing Library)",
        "SEO optimisé et métadonnées structurées",
        "Progressive Web App (PWA) capabilities"
      ],
      color: "from-primary to-primary/60"
    },
    {
      icon: Server,
      title: "Développement Backend",
      description: "APIs RESTful robustes avec Node.js et Express. Architecture scalable et sécurisée.",
      fullDescription: "Le développement backend comprend la création de la logique serveur, la gestion des bases de données, l'authentification, et la mise en place d'APIs robustes. Il s'agit de construire l'architecture qui alimente votre application, en garantissant sécurité, performance et scalabilité.",
      technologies: ["Node.js", "Express", "Laravel", "Django", "REST API", "JWT"],
      qualityFeatures: [
        "Architecture MVC et design patterns",
        "Documentation complète des APIs (Swagger/OpenAPI)",
        "Tests automatisés et validation des données",
        "Gestion d'erreurs et logging avancé",
        "Optimisation des requêtes et mise en cache",
        "Sécurité renforcée (CORS, rate limiting, validation)"
      ],
      color: "from-accent to-accent/60"
    },
    {
      icon: Database,
      title: "Bases de données",
      description: "Conception et optimisation de bases de données MongoDB et MySQL pour vos applications.",
      fullDescription: "La gestion des bases de données implique la conception de schémas optimaux, l'implémentation de requêtes efficaces, et la mise en place de stratégies de sauvegarde et de récupération. Cela garantit l'intégrité, la performance et la sécurité de vos données.",
      technologies: ["MongoDB", "MySQL", "Oracle", "Prisma", "Sequelize", "Eloquent ORM", "Mongoose ODM"],
      qualityFeatures: [
        "Modélisation et normalisation des données",
        "Optimisation des requêtes et indexation",
        "Stratégies de sauvegarde et récupération",
        "Migration et versioning des schémas",
        "Monitoring des performances",
        "Sécurité des données et chiffrement"
      ],
      color: "from-secondary to-secondary/60"
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description: "Développement d'applications mobile responsive et Progressive Web Apps (PWA).",
      fullDescription: "Le développement mobile moderne inclut la création d'applications natives cross-platform et de Progressive Web Apps qui offrent une expérience utilisateur native tout en conservant la flexibilité du web.",
      technologies: ["React Native", "PWA", "Mobile-First Design", "Responsive Design"],
      qualityFeatures: [
        "Interface utilisateur native et intuitive",
        "Optimisation pour différentes tailles d'écran",
        "Fonctionnalités offline et synchronisation",
        "Notifications push et géolocalisation",
        "Performance optimisée pour mobile",
        "Tests sur différents appareils et OS"
      ],
      color: "from-primary to-accent"
    },
    {
      icon: Shield,
      title: "Authentification & Sécurité",
      description: "Implémentation de systèmes d'authentification sécurisés avec Auth0 et JWT.",
      fullDescription: "La sécurité des applications web nécessite une approche multicouche incluant l'authentification robuste, l'autorisation granulaire, et la protection contre les vulnérabilités courantes.",
      technologies: ["Auth0", "JWT", "OAuth 2.0", "SAML", "Multi-Factor Authentication"],
      qualityFeatures: [
        "Authentification multi-facteurs (2FA/MFA)",
        "Gestion granulaire des permissions (RBAC)",
        "Protection OWASP Top 10",
        "Chiffrement des données sensibles",
        "Audit et logging de sécurité",
        "Tests de pénétration et vulnérabilités"
      ],
      color: "from-accent to-secondary"
    },
    {
      icon: Rocket,
      title: "DevOps & Déploiement",
      description: "Déploiement automatisé sur Vercel, Render avec intégration continue Git.",
      fullDescription: "L'approche DevOps optimise le cycle de développement en automatisant les processus de test, build et déploiement, garantissant ainsi une livraison continue et fiable.",
      technologies: ["Vercel", "Render", "Git", "CI/CD", "Docker", "GitHub Actions"],
      qualityFeatures: [
        "Pipeline CI/CD automatisé",
        "Déploiement zero-downtime",
        "Monitoring et alertes en temps réel",
        "Rollback automatique en cas d'erreur",
        "Tests automatisés avant déploiement",
        "Infrastructure as Code (IaC)"
      ],
      color: "from-secondary to-primary"
    }
  ], []);

  const navigateService = useCallback((direction: 'prev' | 'next') => {
    const total = services.length;
    const newIndex = direction === 'prev'
      ? (currentServiceIndex - 1 + total) % total
      : (currentServiceIndex + 1) % total;
    setCurrentServiceIndex(newIndex);
    setSelectedService(services[newIndex]);
  }, [currentServiceIndex, services]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedService) return;
      if (e.key === 'Escape') setSelectedService(null);
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateService('prev');
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateService('next');
      }
    };
    if (selectedService) {
      document.addEventListener('keydown', handleKeyDown);
      // focus modal for accessibility
      requestAnimationFrame(() => modalRef.current?.focus());
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedService, navigateService]);

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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cheat Code Horizontal */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider whitespace-nowrap">Cheat Code</span>
            </div>
            <div className="h-px w-16 bg-primary/30 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-relaxed">
                "Consistency is the cheat code"
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-1 italic">
                C'est l'effort constant qui mène à l'excellence
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services & Expertise
            </span>
          </h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Solutions complètes pour vos projets web, du concept au déploiement. 
            Technologies modernes et bonnes pratiques de développement.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isLightGradient = service.color.includes('secondary');
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full p-8 bg-card border border-border rounded-2xl backdrop-blur-sm hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    <IconComponent className={`h-6 w-6 ${isLightGradient ? 'text-secondary-foreground' : 'text-white'}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.6 + (index * 0.1) + (techIndex * 0.05) 
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {service.technologies.length > 4 && (
                      <motion.span 
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.6 + (index * 0.1) + 0.2 
                        }}
                      >
                        +{service.technologies.length - 4}
                      </motion.span>
                    )}
                  </div>

                  {/* Learn more link */}
                  <motion.button
                    type="button"
                    onClick={() => { setSelectedService(service); setCurrentServiceIndex(index); }}
                    className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + (index * 0.1) 
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Disponible pour de nouveaux projets</span>
            </div>
            <span>•</span>
            <span>Réponse garantie sous 24h</span>
          </div>
        </motion.div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            key="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              ref={modalRef}
              key="service-modal"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative max-w-4xl w-[92%] md:w-[900px] max-h-[85vh] overflow-hidden bg-card text-card-foreground border border-border rounded-2xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-title"
              tabIndex={-1}
            >
              <div className="p-0">
                <div className="relative px-6 md:px-8 py-5 border-b border-border">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${selectedService.color}`} />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${selectedService.color}`}>
                        {(() => {
                          const Icon = selectedService.icon;
                          const isLightGradient = selectedService.color.includes('secondary');
                          return <Icon className={`h-5 w-5 ${isLightGradient ? 'text-secondary-foreground' : 'text-white'}`} />;
                        })()}
                      </div>
                      <h3 id="service-title" className="text-xl md:text-2xl font-bold">
                        <span className={`bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent`}>
                          {selectedService.title}
                        </span>
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => navigateService('prev')}
                        className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Service précédent"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => navigateService('next')}
                        className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Service suivant"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Fermer"
                        className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setSelectedService(null)}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-6 md:px-8 py-6 overflow-y-auto max-h-[70vh]">
                  {/* Description complète */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3">Présentation</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedService.fullDescription}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Compétences clés */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        <div className={`w-1 h-6 bg-gradient-to-b ${selectedService.color} rounded-full`} />
                        Compétences clés
                      </h4>
                      <div className="space-y-2">
                        {selectedService.technologies.map((tech) => (
                          <div key={tech} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Qualité & Performance */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        <div className={`w-1 h-6 bg-gradient-to-b ${selectedService.color} rounded-full`} />
                        Qualité & Performance
                      </h4>
                      <div className="space-y-2">
                        {selectedService.qualityFeatures.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technologies tags */}
                  <div className="mt-8 p-4 bg-secondary/50 rounded-xl">
                    <h5 className="text-sm font-semibold mb-3">Technologies utilisées</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 text-xs font-medium bg-background border border-border rounded-lg hover:border-primary/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex items-center justify-end gap-3 pt-4 border-t border-border">
                    <button
                      type="button"
                      className="px-6 py-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 transition-colors font-medium"
                      onClick={() => setSelectedService(null)}
                    >
                      Fermer
                    </button>
                    <a
                      href="#contact"
                      className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
                      onClick={() => setSelectedService(null)}
                    >
                      Discuter du projet
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;