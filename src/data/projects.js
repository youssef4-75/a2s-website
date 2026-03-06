const projects = [
    // ── Featured Projects ──────────────────────────────────────
    {
        slug: "jumeau-numerique-ocp",
        title: "Jumeau Numérique Pipeline OCP",
        category: "IoT Industriel / IA",
        date: "12 Jan 2026",
        description:
            "Un tableau de bord de surveillance en temps réel conçu pour l'OCP afin de visualiser les flux de transport de phosphate. Utilisant la technologie de Jumeau Numérique, ce système prédit les besoins de maintenance et optimise l'efficacité logistique de 24%.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670",
        isFeatured: true,
        videoSrc: "/assets/demo.mp4",
        demoLink: "#",
        smartIcons: [
            { emoji: "🏭", title: "Jumeau Numérique", subtitle: "Réplique digitale en temps réel" },
            { emoji: "📊", title: "Prédiction IA", subtitle: "Maintenance prédictive avancée" },
            { emoji: "⚡", title: "+24% Efficacité", subtitle: "Optimisation logistique mesurée" },
        ],
        details:
            "Ce projet représente une collaboration stratégique avec l'OCP pour digitaliser la chaîne logistique du phosphate. En combinant des capteurs IoT déployés sur le terrain avec des modèles d'intelligence artificielle, nous avons construit un jumeau numérique capable de simuler et prédire le comportement des pipelines en temps réel. Le tableau de bord offre une visibilité complète sur les flux, les pressions, et les températures, permettant aux opérateurs d'anticiper les pannes avant qu'elles ne surviennent. Le résultat : une réduction de 24% des temps d'arrêt et une optimisation significative des coûts de maintenance.",
    },
    {
        slug: "plateforme-elearning-inpt",
        title: "Plateforme E-Learning INPT",
        category: "Full Stack Web (MERN)",
        date: "20 Déc 2025",
        description:
            "Un hub académique centralisé pour les étudiants de l'INPT. Comprend le streaming de cours en temps réel, des portails de soumission de devoirs et des espaces collaboratifs. La plateforme dessert plus de 800 étudiants actifs quotidiennement.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2674",
        isFeatured: true,
        videoSrc: "/assets/demo.mp4",
        demoLink: "#",
        smartIcons: [
            { emoji: "🎓", title: "800+ Étudiants", subtitle: "Utilisateurs actifs quotidiens" },
            { emoji: "📹", title: "Streaming Live", subtitle: "Cours en temps réel" },
            { emoji: "🤝", title: "Collaboration", subtitle: "Espaces de travail partagés" },
        ],
        details:
            "Développée avec la stack MERN (MongoDB, Express, React, Node.js), cette plateforme e-learning répond aux besoins spécifiques de l'INPT. Elle offre un système de streaming vidéo intégré pour les cours en direct, un portail de soumission de devoirs avec correction automatisée, et des espaces collaboratifs pour le travail en groupe. L'architecture est conçue pour supporter la charge de plus de 800 étudiants connectés simultanément, avec un système de notifications en temps réel et un tableau de bord personnalisé pour chaque utilisateur.",
    },
    {
        slug: "app-mobile-smart-campus",
        title: "App Mobile Smart Campus",
        category: "Mobile Dev (Flutter)",
        date: "15 Nov 2025",
        description:
            "Une application mobile intuitive pour la navigation sur le campus et la gestion d'événements. Intégrée avec des capteurs IoT pour la disponibilité des salles, elle améliore l'expérience étudiante quotidienne.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2670",
        isFeatured: true,
        videoSrc: "/assets/demo.mp4",
        demoLink: "#",
        smartIcons: [
            { emoji: "📱", title: "Cross-Platform", subtitle: "iOS & Android via Flutter" },
            { emoji: "🗺️", title: "Navigation Campus", subtitle: "Carte interactive en temps réel" },
            { emoji: "📡", title: "IoT Intégré", subtitle: "Capteurs de disponibilité des salles" },
        ],
        details:
            "Cette application Flutter offre une expérience complète pour la vie sur le campus de l'INPT. Grâce à l'intégration de capteurs IoT Bluetooth Low Energy, les étudiants peuvent vérifier en temps réel la disponibilité des salles de cours, des laboratoires et des espaces de travail. L'app inclut également un système de gestion d'événements, un calendrier académique synchronisé, et une carte interactive du campus avec navigation guidée. Le design suit les principes Material Design 3 pour une interface moderne et intuitive.",
    },

    // ── Other Projects ─────────────────────────────────────────
    {
        slug: "landing-page-hackathon-a2s",
        title: "Landing Page Hackathon A2S",
        category: "Design Web",
        date: "05 Oct 2025",
        description:
            "Une page d'atterrissage à taux de conversion élevé pour notre hackathon annuel, avec des éléments interactifs 3D et des animations fluides.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2670",
        isFeatured: false,
        videoSrc: "/assets/demo.mp4",
        demoLink: "#",
        smartIcons: [
            { emoji: "🎨", title: "Design 3D", subtitle: "Éléments interactifs immersifs" },
            { emoji: "🚀", title: "Haute Conversion", subtitle: "UX optimisée pour l'inscription" },
            { emoji: "✨", title: "Animations", subtitle: "Transitions fluides et modernes" },
        ],
        details:
            "Conçue pour maximiser les inscriptions à notre hackathon annuel, cette landing page combine des éléments visuels 3D interactifs avec une expérience utilisateur soigneusement pensée. Chaque section guide le visiteur vers l'action d'inscription grâce à des micro-animations, un countdown dynamique, et une présentation claire des prix et du programme. Le taux de conversion a atteint 34%, dépassant largement les standards du secteur événementiel.",
    },
    {
        slug: "crm-startup-locale",
        title: "CRM pour Startup Locale",
        category: "Dév SaaS",
        date: "10 Sep 2025",
        description:
            "Solution CRM personnalisée aidant une startup logistique locale à gérer ses clients, suivre les expéditions et générer des factures automatisées.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
        isFeatured: false,
        videoSrc: "/assets/demo.mp4",
        demoLink: "#",
        smartIcons: [
            { emoji: "📦", title: "Suivi Logistique", subtitle: "Expéditions en temps réel" },
            { emoji: "🧾", title: "Facturation Auto", subtitle: "Génération automatisée de factures" },
            { emoji: "📈", title: "Analytics", subtitle: "Tableaux de bord décisionnels" },
        ],
        details:
            "Ce CRM sur mesure a été développé pour une startup logistique marocaine en pleine croissance. Il centralise la gestion des contacts clients, le suivi des expéditions avec géolocalisation, et la génération automatisée de factures et devis. Le système inclut des tableaux de bord analytiques pour suivre les KPIs clés : chiffre d'affaires, taux de livraison à temps, et satisfaction client. L'interface a été conçue pour être intuitive et adaptée aux besoins spécifiques du marché local.",
    },
];

export const getFeaturedProjects = () => projects.filter((p) => p.isFeatured);

export const getOtherProjects = () => projects.filter((p) => !p.isFeatured);

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);

export default projects;