import "../AboutUs/AboutUs.css";
import { useEffect, useState } from "react";

export default function AboutUs() {
    const valueText = "-We help businesses create their own products";
    const [typedText, setIsTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        let timeOut;
        const timeInterval = isTyping ? 100 : 80;

        if (isTyping && textIndex < valueText.length) {
            timeOut = setTimeout(() => {
                setIsTypedText(prevText => prevText + valueText.charAt(textIndex));
                setTextIndex(prevIndex => prevIndex + 1);
            }, timeInterval);
        } else if (!isTyping && textIndex > 0) {
            timeOut = setTimeout(() => {
                setIsTypedText(prevText => prevText.slice(0, -1));
                setTextIndex(prevIndex => prevIndex - 1);
            }, timeInterval);
        } else if (textIndex === valueText.length) {
            setIsTyping(false);
        } else if (textIndex === 0) {
            setIsTyping(true);
        }

        return () => clearTimeout(timeOut);
    }, [valueText, typedText, isTyping, textIndex]);

    return (
        <div className="about-us-container">
            <section className="about-us-overview">
                <h1 className="about-us-header">
                    About <span className="span-about-us">Us</span>
                </h1>
                <div className="overview-content">
                    <p className="overview-text">{typedText}<span className="blinking-cursor">|</span></p>
                </div>
                <div className="overview-message">
                    <h2 className="message-title">
                        What is Our <span className="message-title-span">Mission?</span>
                    </h2>
                    <p className="message-text">
                        At IndoMarket, we are committed to delivering quality, innovation, and excellence in every product we offer.
                        Established with the vision to revolutionize the retail experience, we have grown into a leading marketplace
                        that connects customers with a wide range of premium products across various industries, including electronics,
                        fashion, home goods, and more. 
                    </p>
                </div>
                <div className="overview-message">
                    <h2 className="message-title">
                        What is Our <span className="message-title-span">Value?</span>
                    </h2>
                    <p className="message-text">
                        At IndoMarket, we are committed to delivering quality, innovation, and excellence in every product we offer.
                        Established with the vision to revolutionize the retail experience, we have grown into a leading marketplace
                        that connects customers with a wide range of premium products across various industries, including electronics,
                        fashion, home goods, and more.
                    </p>
                </div>
            </section>

            <section className="about-us-journey">
                <h1 className="about-us-header">Our Journey</h1>
            </section>

            <section className="about-us-services">
                <h1 className="about-us-header">Our Services</h1>
            </section>

            <section className="about-us-contact">
                <h1 className="about-us-header">Contact Us</h1>
            </section>
        </div>
    );
}
