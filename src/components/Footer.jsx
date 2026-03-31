import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-col brand-col">
                    <h1 className="footer-brand">
                        <img src="/bot.ico" alt="A.X.L BLADE Icon" className="brand-icon" />
                        A.X.L BLADE
                    </h1>
                    <p className="brand-tagline">
                        THE ULTIMATE BOT
                    </p>
                </div>
                <div className="footer-col">
                    <h4>SUPPORT</h4>
                    <Link to="/documentation">DOCUMENTATION</Link>
                    <Link to="/contact">CONTACT US</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
                <div className="footer-col">
                    <h4>LEGAL</h4>
                    <Link to="/privacy">PRIVACY POLICY</Link>
                    <Link to="/terms">TERMS OF SERVICE</Link>
                    <Link to="/cookies">COOKIE POLICY</Link>
                </div>
            </div>
            <div className="copyright">
                &copy; 2024 A.X.L BLADE AUTOMATION. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
};

export default Footer;
