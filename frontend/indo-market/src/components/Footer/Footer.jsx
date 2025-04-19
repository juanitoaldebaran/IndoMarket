import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    const handleSubmit = () => {

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
        <form onSubmit={handleSubmit} className="form-container">
           <h4 className="form-header">Identity Form</h4>
           <div className="form-content">
            <div className="first-name-input-container">
                <label htmlFor="first-name">Name</label>
                <input type="text" className="first-name-input" id="first-name"/>
            </div>
            <div className="last-name-container">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" className="last-name-input" id="last-name"/>
            </div>
            <div className="business-email-container">
                <label htmlFor="business-email">Business Email</label>
                <input type="text" className="business-email-input" id="business-email"/>
            </div>
            <div className="comment-container">
                <label htmlFor="comment">Questions/Comment</label>
                <input type="text" placeholder="Any comments for our services?" id="comment"/>
           </div>
           <button className="submit-btn">Submit</button>
           </div>
        </form>
      </footer>
    )
}