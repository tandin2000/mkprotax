import React, { useState, useEffect } from 'react';
import './BannerPopup.css';

const BannerPopup = ({ banners, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleClose = () => {
        onClose();
    };

    const handleNext = () => {
        setImageLoaded(false);
        setCurrentIndex((prevIndex) => 
            prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setImageLoaded(false);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    const handleBannerClick = (url) => {
        window.open(url, '_blank');
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    if (!banners.length) return null;

    const currentBanner = banners[currentIndex];

    return (
        <div className="banner-popup-overlay">
            <div className="banner-popup-container">
                <div className="banner-header">
                    <h2>Announcements</h2>
                    <button className="close-button" onClick={handleClose}>×</button>
                </div>
                <div className="banner-wrapper">
                    <button onClick={handlePrev} className="nav-button prev-button">❮</button>
                    <div 
                        className="banner-content"
                        onClick={() => handleBannerClick(currentBanner.url)}
                    >
                        {!imageLoaded && (
                            <div className="skeleton-loader">
                                <div className="skeleton-image"></div>
                            </div>
                        )}
                        <img 
                            src={currentBanner.imageUrl} 
                            alt={currentBanner.title}
                            className={`banner-image ${imageLoaded ? 'loaded' : 'hidden'}`}
                            onLoad={handleImageLoad}
                        />
                        <div className="banner-info">
                            <h3>{currentBanner.title}</h3>
                            <p>{currentBanner.description}</p>
                        </div>
                    </div>
                    <button onClick={handleNext} className="nav-button next-button">❯</button>
                </div>
                <div className="banner-indicators">
                    {banners.map((_, index) => (
                        <span 
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                setImageLoaded(false);
                                setCurrentIndex(index);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerPopup; 