import "../AboutUs/AboutUs.css";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";

export default function AboutUs() {
    const valueText = "We help businesses create their own products";
    const [typedText, setIsTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);

    const journeyData = [
        {
            id: 1,
            year: "2024",
            title: "Established",
            description: "IndoMarket was found in 2024 to solve the issues for several companies facing in economical recession",
        },
        {
            id: 2,
            year: "2025",
            title: "Developed",
            description: "We scale up IndoMarket into several of sectors focusing on products growth",
        },
        {
            id: 3,
            year: "2025",
            title: "Partnership",
            description: "Gained partnership with Indonesian's companies that enrich and focus on product development",
        },
        {
            id: 4,
            year: "2025",
            title: "Found",
            description: "IndoMarket was found in 2024 to solve the issues for several companies facing in economical recession",
        },
        {
            id: 5,
            year: "2025",
            title: "Found",
            description: "IndoMarket was found in 2024 to solve the issues for several companies facing in economical recession",
        },
    ];

    const serviceProduct = [
        {
            id: 1,
            name: "Add Products",
            description: "We help customer to add products",
        },
        {
            id: 2,
            name: "View Products",
            description: "We help customer to view products",
        },
        {
            id: 3,
            name: "Edit Products",
            description: "We help customer to edit products",
        },
        {
            id: 4,
            name: "Delete Products",
            description: "We help customer to delete products",
        },
    ]

   useEffect(() => {
    let timeOut;
    const timeInterval = isTyping ? 200 : 150;
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
                <div className="overview-message">
                    <h2 className="message-title">
                        Why Choose <span className="message-title-span">Us?</span>
                    </h2>
                    <p className="message-text">
                    IndoMarket stands out by combining innovative solutions, customer-centric services, and unmatched product quality. 
                    We prioritize trust, transparency, and timely delivery, ensuring every customer experience exceeds expectations. 
                    Our dedicated team constantly adapts to market trends, allowing us to deliver future-ready solutions today.
                    </p>
                </div>
            </section>

            <section className="about-us-journey">
                <h1 className="about-us-header">
                    Our <span className="span-about-us">Journey</span>
                </h1>
                <CarouselCard journeyData={journeyData}/>
            </section>

            <section className="about-us-services">
                <h1 className="about-us-header">
                    Our <span className="span-about-us">Services</span> 
                    <Card serviceProduct={serviceProduct} />
                </h1>
            </section>
        </div>
    );
}
