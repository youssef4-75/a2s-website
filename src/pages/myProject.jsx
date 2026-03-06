import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, MessageSquare, ArrowLeft } from 'lucide-react';
import { getProjectBySlug } from '../data/projects';
import './Myprojects.css';

const MyProject = () => {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(true);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            const current = video.currentTime;
            const dur = video.duration || 1;
            setProgress((current / dur) * 100);
            setCurrentTime(formatTime(current));
        };

        const updateDuration = () => {
            setDuration(formatTime(video.duration));
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(100);
        };

        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('loadedmetadata', updateDuration);
        video.addEventListener('ended', handleEnded);

        return () => {
            video.removeEventListener('timeupdate', updateProgress);
            video.removeEventListener('loadedmetadata', updateDuration);
            video.removeEventListener('ended', handleEnded);
        };
    }, [slug]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleProgressChange = (e) => {
        const newProgress = parseFloat(e.target.value);
        if (videoRef.current) {
            const newTime = (newProgress / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
            setProgress(newProgress);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            if (!isMuted) setVolume(0);
            else setVolume(1);
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    };

    // ── Not Found Fallback ──
    if (!project) {
        return (
            <main>
                <div style={{ textAlign: 'center', marginTop: '20vh' }}>
                    <h1 className="title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                        Projet introuvable
                    </h1>
                    <p className="description" style={{ marginBottom: '2rem' }}>
                        Le projet que vous cherchez n'existe pas ou a été déplacé.
                    </p>
                    <Link to="/projects" className="btn btn-primary">
                        <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
                        Retour aux projets
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <>
            <main>
                {/* Back Link */}
                <Link to="/projects" className="back-link" style={{
                    alignSelf: 'flex-start',
                    maxWidth: '1000px',
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-grey)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '1.5rem',
                    transition: 'color 0.2s',
                }}>
                    <ArrowLeft size={16} />
                    Retour aux projets
                </Link>

                <div className='category'>
                    <h1>{project.category}</h1>
                </div>
                <div className='title-holder'>
                    <h1 className='title'>{project.title}</h1>
                </div>
                <div className='description-holder'>
                    <p className='description'>{project.description}</p>
                </div>
                <div className='buttonsHolder'>
                    <Link to="/Contact" className="btn btn-secondary">Contactez-nous</Link>
                    {project.demoLink && (
                        <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Voir la Démo &rarr;
                        </a>
                    )}
                </div>

                {/* Custom Video Player Container */}
                <div className={`video-container ${isPlaying ? 'playing' : 'paused'}`}>
                    <video
                        ref={videoRef}
                        src={project.videoSrc || '/assets/demo.mp4'}
                        className="custom-video"
                        onClick={togglePlay}
                        muted={isMuted}
                    ></video>

                    {/* Gradient Overlay & Centered Play Button */}
                    <div className="video-overlay" onClick={togglePlay}>
                        {!isPlaying && (
                            <div className="play-button-large">
                                <Play size={40} fill="white" className="ml-1" />
                            </div>
                        )}
                    </div>

                    {/* Bottom Controls Bar */}
                    <div className="video-controls">
                        {/* Progress Bar */}
                        <div className="progress-container">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={progress}
                                onChange={handleProgressChange}
                                className="progress-slider"
                                style={{ backgroundSize: `${progress}% 100%` }}
                            />
                        </div>

                        <div className="controls-row">
                            <div className="controls-left">
                                <button onClick={togglePlay} className="control-btn">
                                    {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" />}
                                </button>
                                <div className="time-display">
                                    {currentTime} / {duration}
                                </div>
                            </div>

                            <div className="controls-right">
                                <button onClick={toggleMute} className="control-btn">
                                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                </button>
                                <button className="control-btn">
                                    <MessageSquare size={20} />
                                </button>
                                <button className="control-btn">
                                    <Settings size={20} />
                                </button>
                                <button onClick={toggleFullscreen} className="control-btn">
                                    <Maximize size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='details'>
                    <div className='smart-icons'>
                        {project.smartIcons.map((icon, index) => (
                            <div className='icon-item' key={index}>
                                <div className='icon-box'>
                                    <span>{icon.emoji}</span>
                                </div>
                                <h1>{icon.title}</h1>
                                <p>{icon.subtitle}</p>
                            </div>
                        ))}
                    </div>
                    <div className='more-details'>
                        <h2>À propos de ce projet</h2>
                        <p>{project.details}</p>
                    </div>
                </div>

            </main>
        </>
    );
}

export default MyProject;