import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PageLayout.css';

const Cookies = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="page-header">
                    <h1>COOKIE POLICY</h1>
                    <p>LAST UPDATED: DECEMBER 12, 2024</p>
                </div>

                <div className="content">
                    <h2>1. WHAT ARE COOKIES?</h2>
                    <p>COOKIES ARE SMALL TEXT FILES STORED ON YOUR DEVICE WHEN YOU VISIT OUR WEBSITE. THEY HELP US PROVIDE A BETTER USER EXPERIENCE AND ANALYZE SITE USAGE.</p>

                    <h2>2. TYPES OF COOKIES WE USE</h2>

                    <table className="cookie-table">
                        <thead>
                            <tr>
                                <th>COOKIE TYPE</th>
                                <th>PURPOSE</th>
                                <th>DURATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ESSENTIAL</td>
                                <td>REQUIRED FOR SITE FUNCTIONALITY</td>
                                <td>SESSION</td>
                            </tr>
                            <tr>
                                <td>ANALYTICS</td>
                                <td>TRACK USAGE AND PERFORMANCE</td>
                                <td>1 YEAR</td>
                            </tr>
                            <tr>
                                <td>PREFERENCES</td>
                                <td>REMEMBER YOUR SETTINGS</td>
                                <td>6 MONTHS</td>
                            </tr>
                            <tr>
                                <td>MARKETING</td>
                                <td>DELIVER RELEVANT ADS</td>
                                <td>3 MONTHS</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>3. MANAGING COOKIES</h2>
                    <p>YOU CAN CONTROL COOKIES IN SEVERAL WAYS:</p>
                    <ul>
                        <li>USE YOUR BROWSER'S COOKIE SETTINGS TO BLOCK OR DELETE COOKIES</li>
                        <li>OPT-OUT OF ANALYTICS THROUGH OUR COOKIE BANNER</li>
                        <li>USE BROWSER EXTENSIONS FOR COOKIE MANAGEMENT</li>
                        <li>CLEAR COOKIES REGULARLY THROUGH BROWSER SETTINGS</li>
                    </ul>

                    <h2>4. CONTACT US</h2>
                    <p>FOR QUESTIONS ABOUT OUR COOKIE POLICY:</p>
                    <ul>
                        <li>EMAIL: PRIVACY@ARKIII.BOT</li>
                        <li>DISCORD: <a href="https://discord.gg/support" style={{ color: '#00f3ff' }}>SUPPORT SERVER</a></li>
                        <li>SEE ALSO: <Link to="/privacy" style={{ color: '#00f3ff' }}>PRIVACY POLICY</Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cookies;
