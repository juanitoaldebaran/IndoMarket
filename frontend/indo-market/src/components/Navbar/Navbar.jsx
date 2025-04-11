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
                <Link to="/create" className="navbar-content">Add Product</Link>
                <Link to="/update" className="navbar-content">Edit Product</Link>
                <Link to="/delete" className="navbar-content">Delete Product</Link>
            </div>
        </nav>
    )
}

