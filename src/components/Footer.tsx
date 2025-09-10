import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#skills', label: 'Compétences' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ash7dev",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ash7dev",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:contact@ash7dev.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              ASH7DEV
            </motion.div>
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              Développeur Full Stack passionné, créateur de solutions web modernes et performantes. 
              Transformons ensemble vos idées en réalité digitale.
            </p>
            
            {/* Cheat Code */}
            <motion.div 
              className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Cheat Code</span>
              </div>
              <p className="text-lg font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-relaxed">
                "Consistency is the cheat code"
              </p>
              <p className="text-sm text-muted-foreground mt-1 italic">
                C'est l'effort constant qui mène à l'excellence
              </p>
            </motion.div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Disponible pour de nouveaux projets</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 mb-6">
              <a 
                href="aszothiam28@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                aszothiam28@gmail.com
              </a>
              <div className="text-muted-foreground">
                Dakar, Senegal (Remote possible)
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} ASH7DEV. Fait avec</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>et beaucoup de ☕</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Réalisé avec React & TypeScript</span>
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;