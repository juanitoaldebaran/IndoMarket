import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../SignIn/SignIn.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SignIn() {
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
    }

    const handleSubmit = () => {
        
    }

    return (
        <div className="sign-in-container">
            <div className="sign-in-wrapper">
                <div className="sign-in-header-container">
                     <h3 className="sign-in-header">Sign In</h3>
                </div>

                {errors.generals && (
                    <div className="error-container">
                        {errors.generals}
                    </div>
                )}


                <form onSubmit={handleSubmit} className="sign-in-form-container">
                    <div className="form-group">
                        <label htmlFor="email" className="form-email-label">
                            <FontAwesomeIcon icon={faEnvelope} className="envelope-icon"/>
                        </label>
                        <input id="email" name="email" type="text" value={signInData.email} onChange={handleChange} className="email-input" placeholder="Email"/> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-email-password">
                            <FontAwesomeIcon icon={faLock} className="lock-icon"/>
                        </label>
                        <input id="password" name="password" type="password" value={signInData.password} onChange={handleChange} className="password-input" placeholder="Password"/>
                    </div>
                    <div className="form-options">
                        <input id="remembe" name="remember" type="checkbox" />
                        <label htmlFor="remember">Remember Me</label>
                        <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
                    </div>
            
                    <button type="submit" className="signin-btn">Sign In</button>

                    <div className="switch-sign-up">
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link> </p> 
                    </div>
                </form>
            </div>
        </div>
    )
}