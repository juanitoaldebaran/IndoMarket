import { useEffect, useState } from "react";
import "../CarouselCard/CarouselCard.css";


export default function CarouselCard({journeyData}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        let interval;
        if (autoPlay) {
            interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % journeyData.length);
                setIsAutoPlay(true);
            }, 4000);
        }
        
        return () => clearInterval(interval);
    }, [autoPlay, activeIndex]);

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + journeyData.length) % journeyData.length);
        setIsAutoPlay(false);
    }

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % journeyData.length);
        setIsAutoPlay(false);
    }

    const handleDotClick = (index) => {
        setActiveIndex((index));
        setIsAutoPlay(false);
    }

    return(
        <div className="carousel-container">
            <div className="carousel-wrapper">
               <button className="carousel-arrow prev-arrow" onClick={handlePrevClick}>&lt;</button>
               <div className="carousel-content">
                {journeyData.map((item, index) => (
                    <div 
                    key={item.id} 
                    className={`carousel-card ${index === activeIndex ? "active" : ""}` }
                    style={{transform: `translateX(${(index - activeIndex) * 100}%)`}}
                    >
                        <div className="card-year">{item.year}</div>
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-description">{item.description}</p>
                    </div>
                ))}
               </div>
               <button className="carousel-arrow next-arrow" onClick={handleNextClick}>&gt;</button>
            </div>

            <div className="carousel-dots">
                {journeyData.map((_, index) => (
                    <button
                    key={index}
                    className={`carousel-dot ${index === activeIndex ? "active" : ""}`} onClick={() => handleDotClick(index)}></button>
                ))}
            </div>
        </div>
    )
}