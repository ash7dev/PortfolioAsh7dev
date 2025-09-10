import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Langages & Frameworks",
      skills: [
        { name: "JavaScript", level: 95, icon: "⚡" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "PHP", level: 70, icon: "🐘" },
        { name: "Java", level: 60, icon: "☕" },
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Django", level: 80, icon: "🎯" },
        { name: "Laravel", level: 65, icon: "🔴" },
        { name: "Express", level: 85, icon: "🚀" }
      ],
      color: "from-primary to-primary/60"
    },
    {
      title: "Styling & UI",
      skills: [
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 95, icon: "💨" },
        { name: "Figma", level: 70, icon: "🎯" },
        { name: "Framer Motion", level: 85, icon: "🎬" }
      ],
      color: "from-accent to-accent/60"
    },
    {
      title: "Bases de données",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "Supabase", level: 80, icon: "⚡" },
        { name: "Prisma", level: 75, icon: "🔷" },
        { name: "Sequelize", level: 85, icon: "🔗" }
      ],
      color: "from-accent to-accent/60"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Compétences Techniques
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies maîtrisées et expertise acquise au fil des projets. 
            Formation continue et veille technologique constante.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4">
                <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`} />
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                      />
                      
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6">En résumé</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-muted-foreground">Technologies maîtrisées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">Projets réalisés</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-muted-foreground italic max-w-2xl mx-auto">
            "La technologie évolue rapidement, l'apprentissage continu est essentiel. 
            Je reste toujours à l'affût des dernières innovations pour offrir les meilleures solutions."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;