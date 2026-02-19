import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, SkipBack, SkipForward, MessageSquare } from 'lucide-react';
import './Myprojects.css';

const MyProject = ({ category = '', title = '', description = '', videoLink = '', details = '', smartIcons = [] }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay policy usually, but we want custom controls

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
    }, []);

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

    return (
        <>
            <main>
                <div className='category' >
                    <h1>Featured Project</h1>
                </div>
                <div className='title-holder' >
                    <h1 className='title' >Project Demonstration</h1>
                </div>
                <div className='description-holder'>
                    <p className='description' >Discover our latest innovation in action. This video showcases the core features and capabilities of our solution, demonstrating how we solve real-world problems with cutting-edge technology.</p>
                </div>
                <div className='buttonsHolder'>
                    <a href="" className="btn btn-secondary">Contact Us</a>
                    <a href="" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Try Demo &rarr;</a>
                </div>

                {/* Custom Video Player Container */}
                <div className={`video-container ${isPlaying ? 'playing' : 'paused'}`}>
                    <video
                        ref={videoRef}
                        src="/assets/demo.mp4"
                        className="custom-video"
                        onClick={togglePlay}
                        muted={isMuted} // Controlled by state
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
                        <div className='icon-item'>
                            <div className='icon-box'>
                                <span>🚀</span>
                            </div>
                            <h1>Innovation</h1>
                            <p>Cutting-edge solutions</p>
                        </div>
                        <div className='icon-item'>
                            <div className='icon-box'>
                                <span>⚡</span>
                            </div>
                            <h1>Performance</h1>
                            <p>Optimized for speed</p>
                        </div>
                        <div className='icon-item'>
                            <div className='icon-box'>
                                <span>🛡️</span>
                            </div>
                            <h1>Reliability</h1>
                            <p>Built to last</p>
                        </div>
                    </div>
                    <div className='more-details'>
                        <h2>About This Project</h2>
                        <p>
                            We combine technical expertise with creative problem-solving to deliver impactful results. This project highlights our commitment to quality, user experience, and technological advancement. Watch the video above to see the key functionalities and the seamless flow of the application.
                        </p>
                    </div>

                </div>

            </main>
        </>
    );
}

export default MyProject;