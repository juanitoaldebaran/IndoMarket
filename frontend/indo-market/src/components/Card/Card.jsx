import { useState } from "react";
import "../Card/Card.css";

export default function Card({serviceProduct}) {
    const [activeIndex, setActiveIndex] = useState(2);

    const handleContainerClick = (index) => {
        setActiveIndex(index);
    }

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + serviceProduct.length) % serviceProduct.length);
    }

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % serviceProduct.length);
    }
    
    return (
        <div className="card-container">
            <div className="card-wrapper">
                <button className="card-arrow prev-arrow" onClick={handlePrevClick}>
                    &lt;
                </button>
                {serviceProduct.map((item, index) => (
                    <div 
                    key={item.id}
                    className={`service-container ${index === activeIndex ? "active" : ""}`}
                    onClick={() => handleContainerClick(index)}>
                        <h3 className="service-name">
                            {item.name}
                        </h3>
                        <p className="service-description">
                            {item.description}
                        </p>
                    </div>
                ))}
                 <button className="card-arrow next-arrow" onClick={handleNextClick}>
                    &gt;
                </button>
            </div>
        </div>
    )
}