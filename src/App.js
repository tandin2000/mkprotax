import RouterPage from './home/Routerpage';
import * as React from 'react'
import './App.css';
import BannerPopup from './components/BannerPopup';
import { useState, useEffect } from 'react';

function App() {
    const [banners, setBanners] = useState([]);
    const [showBannerPopup, setShowBannerPopup] = useState(true);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await fetch('https://mkprotaxbe.onrender.com/api/banner');
                const data = await response.json();
                if (data.status === 'success') {
                    setBanners(data.data);
                }
            } catch (error) {
                console.error('Error fetching banners:', error);
            }
        };

        fetchBanners();
    }, []);

    return (
        <div className="App">
            <div id="content-wrapper">
                <RouterPage />
            </div>
            {showBannerPopup && banners.length > 0 && (
                <BannerPopup 
                    banners={banners} 
                    onClose={() => setShowBannerPopup(false)}
                />
            )}
        </div>
    );
}

export default App;