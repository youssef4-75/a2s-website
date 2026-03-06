import React, { useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import useOnScreen from '../../hooks/useOnScreen';

export default function ProjectCard({ image = '', title = '', category = '', date = '', description = '', slug = '', className = '' }) {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    return (
        <div
            ref={ref}
            className={`project-card group animate-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            {/* Card Image */}
            <div className="card-image-wrapper">
                <img
                    src={image}
                    alt={title}
                    className="card-image"
                />
                <div className="card-badge">
                    {category}
                </div>
            </div>

            {/* Card Content */}
            <div className="card-content">
                <div className="card-date">
                    <Calendar size={12} className="mr-1" />
                    {date}
                </div>

                <h3 className="card-title">
                    {title}
                </h3>

                <p className="card-desc">
                    {description}
                </p>

                <div className="card-footer">
                    <Link to={`/projects/${slug}`} className="read-case-study">
                        plus d'information
                    </Link>
                    <Link to={`/projects/${slug}`} className="card-arrow">
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
