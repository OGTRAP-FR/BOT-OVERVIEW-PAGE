import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PageLayout.css';

const Terms = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="page-header">
                    <h1>TERMS OF SERVICE</h1>
                    <p>LAST UPDATED: DECEMBER 12, 2024</p>
                </div>

                <div className="content">
                    <h2>1. ACCEPTANCE OF TERMS</h2>
                    <p>BY USING A.X.L BLADE ("THE BOT"), YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE BOT.</p>

                    <h2>2. USE LICENSE</h2>
                    <p>WE GRANT YOU A LIMITED, NON-EXCLUSIVE, NON-TRANSFERABLE LICENSE TO USE A.X.L BLADE FOR LEGITIMATE PURPOSES. THIS LICENSE DOES NOT INCLUDE:</p>
                    <ul>
                        <li>MODIFYING OR COPYING THE BOT'S CODE</li>
                        <li>ATTEMPTING TO REVERSE ENGINEER THE BOT</li>
                        <li>REMOVING ANY COPYRIGHT OR PROPRIETARY NOTICES</li>
                        <li>TRANSFERRING THE BOT TO ANOTHER PLATFORM</li>
                        <li>USING THE BOT FOR ILLEGAL ACTIVITIES</li>
                    </ul>

                    <h2>3. USER RESPONSIBILITIES</h2>
                    <p>AS A USER, YOU AGREE TO:</p>
                    <ul>
                        <li>COMPLY WITH DISCORD'S TERMS OF SERVICE AND COMMUNITY GUIDELINES</li>
                        <li>NOT USE THE BOT TO SPAM, HARASS, OR ABUSE OTHER USERS</li>
                        <li>NOT ATTEMPT TO EXPLOIT OR ABUSE BOT FEATURES</li>
                        <li>KEEP YOUR SERVER SECURE AND PREVENT UNAUTHORIZED ACCESS</li>
                        <li>REPORT BUGS AND VULNERABILITIES RESPONSIBLY</li>
                    </ul>

                    <h2>4. PROHIBITED ACTIVITIES</h2>
                    <p>THE FOLLOWING ACTIVITIES ARE STRICTLY PROHIBITED:</p>
                    <ul>
                        <li>USING THE BOT TO CONDUCT ILLEGAL ACTIVITIES</li>
                        <li>ATTEMPTING TO HACK, DDOS, OR DISRUPT BOT SERVICES</li>
                        <li>CREATING MULTIPLE ACCOUNTS TO ABUSE FREE TRIALS OR FEATURES</li>
                        <li>RESELLING OR REDISTRIBUTING THE BOT WITHOUT PERMISSION</li>
                        <li>USING THE BOT TO SPREAD MALWARE OR MALICIOUS CONTENT</li>
                    </ul>

                    <h2>5. CONTACT INFORMATION</h2>
                    <p>FOR QUESTIONS ABOUT THESE TERMS, CONTACT US AT:</p>
                    <ul>
                        <li>EMAIL: LEGAL@AXLBLADE.BOT</li>
                        <li>DISCORD: <a href="https://discord.gg/support" style={{ color: '#00f3ff' }}>SUPPORT SERVER</a></li>
                        <li>CONTACT FORM: <Link to="/contact" style={{ color: '#00f3ff' }}>CONTACT PAGE</Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Terms;
