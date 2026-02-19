import React, { useEffect, useState } from 'react';
import { Menu, Search, ArrowRight } from 'lucide-react';
import FeaturedProject from '../components/Projects/FeaturedProject';
import ProjectCard from '../components/Projects/ProjectCard';
import './Projects.css';


const featuredProjects = [
    {
        title: "Jumeau Numérique Pipeline OCP",
        category: "IoT Industriel / IA",
        date: "12 Jan 2026",
        description: "Un tableau de bord de surveillance en temps réel conçu pour l'OCP afin de visualiser les flux de transport de phosphate. Utilisant la technologie de Jumeau Numérique, ce système prédit les besoins de maintenance et optimise l'efficacité logistique de 24%.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670",
        link: "#"
    },
    {
        title: "Plateforme E-Learning INPT",
        category: "Full Stack Web (MERN)",
        date: "20 Déc 2025",
        description: "Un hub académique centralisé pour les étudiants de l'INPT. Comprend le streaming de cours en temps réel, des portails de soumission de devoirs et des espaces collaboratifs. La plateforme dessert plus de 800 étudiants actifs quotidiennement.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2674",
        link: "#"
    },
    {
        title: "App Mobile Smart Campus",
        category: "Mobile Dev (Flutter)",
        date: "15 Nov 2025",
        description: "Une application mobile intuitive pour la navigation sur le campus et la gestion d'événements. Intégrée avec des capteurs IoT pour la disponibilité des salles, elle améliore l'expérience étudiante quotidienne.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2670",
        link: "#"
    }
];

const allOtherProjects = [
    {
        title: "Landing Page Hackathon A2S",
        category: "Design Web",
        date: "05 Oct 2025",
        description: "Une page d'atterrissage à taux de conversion élevé pour notre hackathon annuel, avec des éléments interactifs 3D et des animations fluides.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2670",
        link: "#"
    },
    {
        title: "CRM pour Startup Locale",
        category: "Dév SaaS",
        date: "10 Sep 2025",
        description: "Solution CRM personnalisée aidant une startup logistique locale à gérer ses clients, suivre les expéditions et générer des factures automatisées.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
        link: "#"
    }
];

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(allOtherProjects);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Search Logic
    useEffect(() => {
        const results = allOtherProjects.filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(results);
    }, [searchTerm]);

    // Scroll Handler
    const scrollToProjects = () => {
        const section = document.getElementById('more-projects');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="projects-page">
            {/* <Header /> goes here */}
            {/* Note: Ensure the Header is either fixed (add margin-top to main) or static */}

            {/* Temporary spacer if your Header is fixed, otherwise remove this */}
            <div style={{ height: '80px' }}></div>

            {/* ------------------- MAIN CONTENT ------------------- */}

            {/* Top Section: "LATEST DELIVERABLES" -> "NOS DERNIÈRES RÉALISATIONS" */}
            <section className="projects-container">
                <div className="projects-header-section">
                    <div>
                        <h1 className="projects-title-main">
                            NOS DERNIERS PROJETS
                        </h1>
                        <p className="projects-subtitle">
                            Bienvenue chez Avenir d'Ingénieur en Services et Solutions. Ici, l'élite étudiante de l'INPT transforme la théorie en produits technologiques complets. Explorez nos réalisations récentes
                        </p>
                    </div>
                    <div className="see-all-link group" onClick={scrollToProjects}>
                        VOIR TOUT
                        <ArrowRight className="arrow-icon" size={18} />
                    </div>
                </div>

                {/* Featured Projects List */}
                <div className="projects-list">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProject key={index} {...project} />
                    ))}
                </div>
            </section>

            {/* Bottom Section: Grid of Other Projects */}
            <section id="more-projects" className="more-projects-section">
                <div className="projects-container">
                    <div className="section-header">
                        <h2 className="section-title">PLUS DE PROJETS</h2>

                        {/* Search / Filter */}
                        <div className="search-bar">
                            <Search size={18} className="text-slate-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                className="search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                                className={`delay-${(index % 3) * 100 + 100}`} // Stagger: 100ms, 200ms, 300ms
                            />
                        ))}

                        {/* CTA Card */}
                        <div className="start-project-card">
                            <div className="plus-icon-circle">
                                +
                            </div>
                            <h3 className="start-title">Lancez Votre Projet</h3>
                            <p className="start-desc">Vous avez une idée ? Construisons quelque chose d'incroyable ensemble.</p>
                            <button className="get-in-touch-btn">
                                Contactez-nous
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> goes here */}
        </div>
    );
}