import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PageLayout.css';

const Privacy = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="page-header">
                    <h1>PRIVACY POLICY</h1>
                    <p>LAST UPDATED: DECEMBER 12, 2024</p>
                </div>

                <div className="content">
                    <h2>1. INTRODUCTION</h2>
                    <p>WELCOME TO A.X.L BLADE ("WE," "OUR," OR "US"). WE ARE COMMITTED TO PROTECTING YOUR PRIVACY AND ENSURING THE SECURITY OF YOUR PERSONAL INFORMATION. THIS PRIVACY POLICY EXPLAINS HOW WE COLLECT, USE, DISCLOSE, AND SAFEGUARD YOUR INFORMATION WHEN YOU USE OUR DISCORD BOT SERVICE.</p>

                    <h2>2. INFORMATION WE COLLECT</h2>
                    <p>WE COLLECT THE FOLLOWING TYPES OF INFORMATION:</p>
                    <ul>
                        <li><span className="highlight">DISCORD USER DATA:</span> USER IDS, USERNAMES, SERVER IDS, AND ROLE INFORMATION</li>
                        <li><span className="highlight">SERVER CONFIGURATION:</span> BOT SETTINGS, CUSTOM COMMANDS, AND SERVER PREFERENCES</li>
                        <li><span className="highlight">USAGE DATA:</span> COMMAND USAGE, FEATURE INTERACTIONS, AND BOT PERFORMANCE METRICS</li>
                        <li><span className="highlight">MESSAGE CONTENT:</span> ONLY WHEN NECESSARY FOR MODERATION FEATURES (DELETED IMMEDIATELY AFTER PROCESSING)</li>
                    </ul>

                    <h2>3. HOW WE USE YOUR INFORMATION</h2>
                    <p>WE USE THE COLLECTED INFORMATION TO:</p>
                    <ul>
                        <li>PROVIDE AND MAINTAIN OUR BOT SERVICES</li>
                        <li>IMPROVE AND OPTIMIZE BOT PERFORMANCE</li>
                        <li>DETECT AND PREVENT ABUSE OR MALICIOUS ACTIVITY</li>
                        <li>PROVIDE CUSTOMER SUPPORT</li>
                        <li>SEND IMPORTANT SERVICE ANNOUNCEMENTS</li>
                        <li>ANALYZE USAGE PATTERNS TO ENHANCE FEATURES</li>
                    </ul>

                    <h2>4. YOUR RIGHTS</h2>
                    <p>YOU HAVE THE RIGHT TO:</p>
                    <ul>
                        <li>ACCESS YOUR PERSONAL DATA</li>
                        <li>REQUEST DATA CORRECTION OR DELETION</li>
                        <li>OPT-OUT OF DATA COLLECTION (BY REMOVING THE BOT)</li>
                        <li>EXPORT YOUR SERVER DATA</li>
                        <li>FILE A COMPLAINT WITH RELEVANT AUTHORITIES</li>
                    </ul>

                    <h2>5. CONTACT US</h2>
                    <p>IF YOU HAVE QUESTIONS ABOUT THIS PRIVACY POLICY, PLEASE CONTACT US:</p>
                    <ul>
                        <li>EMAIL: PRIVACY@AXLBLADE.BOT</li>
                        <li>DISCORD: <a href="https://discord.gg/support" style={{ color: '#00f3ff' }}>SUPPORT SERVER</a></li>
                        <li>CONTACT FORM: <Link to="/contact" style={{ color: '#00f3ff' }}>CONTACT PAGE</Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Privacy;
