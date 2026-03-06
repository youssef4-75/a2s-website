import React, { useEffect, useState } from 'react';
import { Menu, Search, ArrowRight } from 'lucide-react';
import FeaturedProject from '../components/Projects/FeaturedProject';
import ProjectCard from '../components/Projects/ProjectCard';
import { getFeaturedProjects, getOtherProjects } from '../data/projects';
import './Projects.css';

const featuredProjects = getFeaturedProjects();
const allOtherProjects = getOtherProjects();

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