import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PageLayout.css';

const Documentation = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="page-header">
                    <h1>DOCUMENTATION</h1>
                    <p>COMPREHENSIVE GUIDE TO ARKIII BOT</p>
                </div>

                <div className="doc-section">
                    <h2><i className="fas fa-rocket"></i> GETTING STARTED</h2>
                    <p>WELCOME TO ARKIII! FOLLOW THESE STEPS TO GET YOUR BOT UP AND RUNNING:</p>
                    <ul>
                        <li>INVITE ARKIII TO YOUR SERVER USING THE INVITE LINK</li>
                        <li>GRANT THE NECESSARY PERMISSIONS FOR FULL FUNCTIONALITY</li>
                        <li>RUN <code>/setup</code> TO CONFIGURE INITIAL SETTINGS</li>
                        <li>CUSTOMIZE FEATURES USING THE DASHBOARD OR COMMANDS</li>
                    </ul>
                </div>

                <div className="doc-section">
                    <h2><i className="fas fa-terminal"></i> BASIC COMMANDS</h2>

                    <h3>MODERATION</h3>
                    <ul>
                        <li><code>/ban [user] [reason]</code> - BAN A USER FROM THE SERVER</li>
                        <li><code>/kick [user] [reason]</code> - KICK A USER FROM THE SERVER</li>
                        <li><code>/mute [user] [duration]</code> - TEMPORARILY MUTE A USER</li>
                        <li><code>/warn [user] [reason]</code> - WARN A USER</li>
                        <li><code>/clear [amount]</code> - CLEAR MESSAGES IN A CHANNEL</li>
                    </ul>

                    <h3>MUSIC</h3>
                    <ul>
                        <li><code>/play [song]</code> - PLAY A SONG OR PLAYLIST</li>
                        <li><code>/pause</code> - PAUSE THE CURRENT TRACK</li>
                        <li><code>/resume</code> - RESUME PLAYBACK</li>
                        <li><code>/skip</code> - SKIP TO NEXT TRACK</li>
                        <li><code>/queue</code> - VIEW THE MUSIC QUEUE</li>
                    </ul>

                    <h3>UTILITY</h3>
                    <ul>
                        <li><code>/help</code> - DISPLAY ALL AVAILABLE COMMANDS</li>
                        <li><code>/serverinfo</code> - SHOW SERVER INFORMATION</li>
                        <li><code>/userinfo [user]</code> - SHOW USER INFORMATION</li>
                        <li><code>/ping</code> - CHECK BOT LATENCY</li>
                    </ul>
                </div>

                <div className="doc-section">
                    <h2><i className="fas fa-shield-alt"></i> ANTINUKE FEATURES</h2>
                    <p>PROTECT YOUR SERVER WITH OUR ADVANCED SECURITY FEATURES:</p>
                    <ul>
                        <li>AUTOMATIC DETECTION OF MASS BANS, KICKS, AND DELETIONS</li>
                        <li>ROLE CHANGE PROTECTION AND MONITORING</li>
                        <li>CHANNEL AND CATEGORY PROTECTION</li>
                        <li>WEBHOOK AND BOT SPAM PREVENTION</li>
                        <li>CUSTOMIZABLE WHITELIST SYSTEM</li>
                    </ul>
                </div>

                <div className="doc-section">
                    <h2><i className="fas fa-cog"></i> CONFIGURATION</h2>
                    <p>CUSTOMIZE ARKIII TO FIT YOUR SERVER'S NEEDS:</p>
                    <ul>
                        <li>SET UP CUSTOM PREFIXES AND COMMAND ALIASES</li>
                        <li>CONFIGURE AUTO-MODERATION RULES</li>
                        <li>SET WELCOME/GOODBYE MESSAGES</li>
                        <li>CREATE CUSTOM REACTION ROLES</li>
                        <li>CONFIGURE LOGGING CHANNELS</li>
                    </ul>
                </div>

                <div className="doc-section">
                    <h2><i className="fas fa-question-circle"></i> NEED HELP?</h2>
                    <p>IF YOU NEED ADDITIONAL ASSISTANCE:</p>
                    <ul>
                        <li>JOIN OUR <a href="https://discord.gg/support" style={{ color: '#00f3ff' }}>DISCORD SUPPORT SERVER</a></li>
                        <li>CHECK OUR <Link to="/faq" style={{ color: '#00f3ff' }}>FAQ PAGE</Link></li>
                        <li>CONTACT US VIA THE <Link to="/contact" style={{ color: '#00f3ff' }}>CONTACT FORM</Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Documentation;
