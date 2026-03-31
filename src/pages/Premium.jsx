import Header from '../components/Header';
import Footer from '../components/Footer';
import './Premium.css';

const Premium = () => {
    return (
        <>
            <Header />
            <div className="premium-page">
                <div className="premium-header">
                    <h1>PREMIUM PLANS</h1>
                    <p>UNLOCK THE FULL POTENTIAL OF A.X.L BLADE</p>
                </div>

                <div className="premium-tiers">
                    <div className="tier-card">
                        <h2>SERVER PREMIUM</h2>
                        <ul className="tier-features">
                            <li><i className="fas fa-check"></i> ACCESS TO ALL SERVER COMMANDS</li>
                            <li><i className="fas fa-check"></i> EXCLUSIVE SERVER FEATURES</li>
                            <li><i className="fas fa-check"></i> PRIORITY SUPPORT</li>
                            <li><i className="fas fa-check"></i> PREMIUM COMMANDS LIKE BIRTHDAY & MORE</li>
                            <li><i className="fas fa-check"></i> FILTERS FOR MUSIC</li>
                            <li><i className="fas fa-check"></i> 24/7 MUSIC MODE</li>
                        </ul>
                        <a href="https://discord.gg/M7DJFf2qzm" className="tier-btn">GET SERVER PREMIUM</a>
                    </div>

                    <div className="tier-card featured">
                        <div className="popular-badge">MOST POPULAR</div>
                        <h2>SERVER PREMIUM PLUS</h2>
                        <ul className="tier-features">
                            <li><i className="fas fa-check"></i> ALL SERVER PREMIUM FEATURES</li>
                            <li><i className="fas fa-check"></i> CUSTOM BOT BRANDING</li>
                            <li><i className="fas fa-check"></i> ADVANCED ANALYTICS DASHBOARD</li>
                            <li><i className="fas fa-check"></i> CUSTOM COMMAND ALIASES</li>
                            <li><i className="fas fa-check"></i> DEDICATED SUPPORT CHANNEL</li>
                            <li><i className="fas fa-check"></i> EARLY ACCESS TO NEW FEATURES</li>
                            <li><i className="fas fa-check"></i> UNLIMITED CUSTOM RESPONSES</li>
                        </ul>
                        <a href="https://discord.gg/M7DJFf2qzm" className="tier-btn featured-btn">GET PREMIUM PLUS</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Premium;
