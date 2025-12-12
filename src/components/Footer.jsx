import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-col" style={{ textAlign: 'center' }}>
                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px',
                        fontSize: '2.5rem',
                        marginBottom: '15px'
                    }}>
                        <img
                            src="/bot.ico"
                            alt="ARKIII Icon"
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                border: '2px solid var(--primary)'
                            }}
                        />
                        ARKIII
                    </h1>
                    <p style={{
                        color: 'var(--text-dim)',
                        fontSize: '1.2rem',
                        letterSpacing: '2px'
                    }}>
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
                &copy; 2024 ARKIII AUTOMATION. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
};

export default Footer;
