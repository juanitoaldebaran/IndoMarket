import "../Footer/Footer.css";
import { data, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Footer() {

    const initialDataForm = {
        name: "",
        email: "",
        message: "",
    }

    const [dataForm, setDataForm] = useState(initialDataForm);

    const handleChange = (e) => {
       const {name, value} = e.target;
       setDataForm((prevData) => ({...prevData, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            console.log("Form submitted", dataForm);
            setDataForm(initialDataForm);
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <footer className="footer">
        <div className="footer-container">
            <div className="footer-section logo">
               <h1 className="logo-name">IndoMarket</h1>
               <div className="social-links">
                    <h4 className="footer-header">Our Social</h4>
                    <div className="social-icon-container">
                        <a href="" className="social-link instagram">
                            <FontAwesomeIcon icon={faInstagram} className="instagram-icon"/>
                        </a>
                        <a href="" className="social-link linkedin">
                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/>
                        </a>
                        <a href="" className="social-link email">
                            <FontAwesomeIcon icon={faEnvelope} className="email-icon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-section quick-link">
                <h3 className="footer-header">Quick Link</h3>
                <Link to="/about-us" className="footer-quick-link-content">About Us</Link>
                <Link to="/about-us"  className="footer-quick-link-content">Products</Link>
                <Link to="/about-us" className="footer-quick-link-content">Contact</Link>
                <Link to="/about-us" className="footer-quick-link-content">Setting</Link>
            </div>
            <div className="footer-section services">
                <h3 className="footer-header">Our Services</h3>
                <Link to="/about-us" className="footer-services-content">Product Management</Link>
                <Link to="/about-us" className="footer-services-content">Inventory Visualization</Link>
                <Link to="/about-us" className="footer-services-content">Content Enhancement</Link>
                <Link to="/about-us" className="footer-services-content">Product Lifecycle</Link>
            </div>
            <div className="footer-section contact">
                <h3 className="footer-header">Contact</h3>
                <div className="contact-number-container">
                    <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                    <p className="phone-content">+1234567</p>
                </div>
                <div className="contact-location-container">
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon"/>
                    <p className="location-content">Bukit Golf Cibubur</p>
                </div>
                <div className="contact-email-container">
                    <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
                    <p className="envelope-content">indomarket@gmail.com</p>
                </div>
            </div>
        </div>

        <div className="footer-form-container">
            <h3 className="footer-header-form">Send Us Message</h3>
            <form onSubmit={handleSubmit} className="footer-form">
                <div className="name-container">
                    <label htmlFor="name">Name</label>
                    <input 
                    id="name"
                    name="name"
                    type="text" 
                    value={dataForm.name}
                    onChange={handleChange}
                    required
                    className="footer-form-input"
                    />
                </div>
                <div className="email-container">
                    <label htmlFor="email">Email</label>
                    <input 
                    id="email"
                    name="email"
                    type="text" 
                    value={dataForm.email}
                    onChange={handleChange}
                    required
                    className="footer-form-input"
                    />
                </div>     
                <div className="message-container">
                    <label htmlFor="message">Message</label>
                    <input 
                    id="message"
                    name="message"
                    type="text" 
                    value={dataForm.message}
                    onChange={handleChange}
                    required
                    className="footer-form-input"
                    placeholder="Please ask us questions"
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
      </footer>
    )
}