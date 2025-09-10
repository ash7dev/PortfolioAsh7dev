import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageCircle, Folder } from 'lucide-react';

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
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
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Content - Left Side */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                👋 Disponible pour de nouveaux projets
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  ASH7DEV
                </span>
                <br />
                <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-medium">
                  Développeur Full Stack
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Solutions web modernes et performantes avec React, Node.js et TypeScript. 
                Je transforme vos idées en applications web exceptionnelles.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#portfolio"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Folder className="mr-2 h-5 w-5" />
                Découvrir mes projets
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/cv-ash7dev.pdf"
                className="group inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-200 border border-border"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                download
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger mon CV
              </motion.a>

              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-accent/10 text-accent rounded-lg font-semibold hover:bg-accent/20 transition-all duration-200 border border-accent/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Me contacter
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Disponible immédiatement</span>
              </div>
              <div>⚡ Réponse sous 24h</div>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-96 h-[32rem] md:w-[28rem] md:h-[38rem] relative">
                {/* Glass morphism container */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-2xl backdrop-blur-sm border border-primary/20 shadow-2xl">
                  {/* Animated background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl animate-pulse"></div>
                </div>
                
                {/* Profile image or placeholder */}
                <div className="absolute inset-4 rounded-xl overflow-hidden">
                  {!imageError ? (
                    <img
                      src="/images/profil.jpeg"
                      alt="Photo de profil"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 rounded-xl flex items-center justify-center text-4xl font-bold text-muted-foreground">
                        ASH7
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30"
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/30"
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [360, 180, 0] 
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background animated elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;