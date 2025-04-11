import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <Link to="/" className="title-content">IndoMarket</Link>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? "✖" : "☰"}
            </div>
            <div className={`navbar-right ${isOpen ? "open" : ""}`}>
                <Link to="/about-us" className="navbar-content">About Us</Link>
                <Link to="/getProducts" className="navbar-content">Products</Link>
                <Link to="/contact" className="navbar-content">Contact</Link>
                <Link to="/settings" className="navbar-content">Settings</Link>
            </div>
        </nav>
    )
}

