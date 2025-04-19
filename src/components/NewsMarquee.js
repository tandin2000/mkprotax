import React, { useState, useEffect } from 'react';
import './NewsMarquee.css';

const NewsMarquee = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://mkprotaxbe.onrender.com/api/news');
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                if (data.status === 'success' && data.data.length > 0) {
                    setNews(data.data);
                    setError(null);
                } else {
                    throw new Error('No news data available');
                }
            } catch (error) {
                console.error('Error fetching news:', error);
                setError(error.message);
                // Set some default news items if the fetch fails
                setNews([
                    { title: 'Welcome to ProTax - Your Tax Solution Partner' },
                    { title: 'Stay tuned for important updates and announcements' }
                ]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
        // Set up periodic refresh every 5 minutes
        const refreshInterval = setInterval(fetchNews, 300000);
        return () => clearInterval(refreshInterval);
    }, []);

    // Show loading state or error message briefly
    if (isLoading) {
        return (
            <div className="news-marquee-container">
                <div className="news-label">Loading News...</div>
            </div>
        );
    }

    return (
        <div className="news-marquee-container">
            <div className="news-label">Latest News:</div>
            <div className="marquee-wrapper">
                <div className="marquee-content">
                    {news.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="news-item">
                                {item.title}
                                {item.url && (
                                    <a 
                                        href={item.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="news-link"
                                    >
                                        Read More
                                    </a>
                                )}
                            </span>
                            {index < news.length - 1 && <span className="divider">|</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsMarquee; 