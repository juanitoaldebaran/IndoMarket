import { useEffect, useState } from "react";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const fullTitle = "IndoMarket";
    const [typedTitle, setTypedTitle] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true); 
    const navigate = useNavigate();

    useEffect(() => {
        const intervalTime = isTyping ? 200 : 150; 
        if (isTyping && titleIndex < fullTitle.length) {
            const timeout = setTimeout(() => {
                setTypedTitle(prev => prev + fullTitle.charAt(titleIndex));
                setTitleIndex(titleIndex + 1);
            }, intervalTime);
            return () => clearTimeout(timeout);
        } else if (!isTyping && titleIndex > 0) {
            const timeout = setTimeout(() => {
                setTypedTitle(typedTitle.slice(0, -1)); 
                setTitleIndex(titleIndex - 1);
            }, intervalTime);
            return () => clearTimeout(timeout);
        } else if (titleIndex === fullTitle.length) {
            setIsTyping(false); 
        } else if (titleIndex === 0) {
            setIsTyping(true); 
        }
    }, [titleIndex, isTyping, fullTitle, typedTitle]);


    const aboutUsBtn = () => {
        navigate("/about-us");
    }

    return (
        <>
            <section className="home-container">
                <div className="home-container-header">
                    <h1 className="home-title">
                        <span className="welcome-text">Welcome to </span>
                        <span className="typed-title">{typedTitle}</span>
                        <span className="cursor">|</span>
                    </h1>
                </div>
                <div className="home-container-paragraph">
                    <p className="paragraph-content">
                        Your trusted Indonesian marketplace - bringing the spirit of 
                        traditional markets into the modern world
                    </p>
                    <p className="paragraph-content">
                        Products are made from Indonesia to Indonesian
                    </p>
                    <p className="paragraph-content">
                        Your gateway for Indonesian products and craftmanship
                    </p>
                </div>
                <div className="learn-more-container">
                    <button className="about-us-btn" onClick={aboutUsBtn}>Learn More About Us</button>
                </div>
            </section>
        </>
    )
}