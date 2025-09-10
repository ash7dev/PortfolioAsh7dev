# Portfolio Professionnel

Un portfolio moderne et élégant construit avec React, TypeScript, Vite et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design Moderne** : Interface élégante avec animations fluides (Framer Motion)
- **Mode Sombre/Clair** : Thème adaptatif avec une transition fluide
- **Responsive** : Parfaitement adapté aux mobiles, tablettes et desktops
- **Sections Complètes** :
  - Hero avec animation typographique
  - À propos
  - Compétences techniques
  - Portfolio avec filtres interactifs
  - Contact avec formulaire fonctionnel
  - Footer avec liens sociaux

## 🛠️ Technologies

- **Frontend** : React 18.3.1 + TypeScript 5.5.3
- **Build Tool** : Vite 5.4.2
- **Styling** : Tailwind CSS 3.4.1
- **Animations** : Framer Motion 12.23.9
- **Icons** : Lucide React 0.344.0
- **Forms** : React Hook Form 7.61.1 + Zod 4.0.10
- **Email** : EmailJS 4.4.1

## 📦 Installation


# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 🏗️ Scripts Disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Build pour production
- `npm run preview` - Prévisualiser le build de production
- `npm run lint` - Linter le code

## 🎨 Design System

Le projet utilise un système de design cohérent avec :
- **Couleurs Primaires** : Violet (262° 67% 51%) et Fuchsia (287° 67% 64%)
- **Thème Sombre** : Background sombre avec contraste élevé
- **Typographie** : Inter avec des poids variables
- **Animations** : Transitions fluides et micro-interactions

## 📱 Sections

### Hero Section
- Animation typographique
- CTA pour navigation
- Effets de parallaxe

### Skills Section
- Barres de progression animées
- Catégorisation des compétences
- Icônes technologiques

### Portfolio Section
- Grille de projets avec filtres
- Modal de confidentialité pour projets restreints
- Liens vers démos et code source

### Contact Section
- Formulaire de contact fonctionnel avec EmailJS
- Validation avec Zod
- États de chargement et succès

## 🚀 Déploiement

Le projet est configuré pour être déployé sur Vercel :

1. Connectez-vous à votre compte Vercel
2. Importez le dépôt GitHub
3. Vercel détectera automatiquement la configuration React + Vite
4. Déployez !

## 📝 Configuration

### Variables d'Environnement
Pour le formulaire de contact, configurez EmailJS :
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est sous licence MIT.
