import React, { useState, useEffect } from 'react';
import './NewsMarquee.css';

const NewsMarquee = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/news');
                const data = await response.json();
                if (data.status === 'success') {
                    setNews(data.data);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (isLoading || !news.length) return null;

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