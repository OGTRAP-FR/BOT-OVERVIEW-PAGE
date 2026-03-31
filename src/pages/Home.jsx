import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            gsap.from('.hero-badge', {
                y: -50, opacity: 0, duration: 1, ease: 'power2.out', clearProps: 'all'
            });

            gsap.from('.hero h1 span', {
                y: 100, opacity: 0, stagger: 0.2, duration: 1.2, ease: 'power3.out', delay: 0.5, clearProps: 'all'
            });

            gsap.from('.hero p', {
                y: 50, opacity: 0, duration: 1, delay: 1.2, clearProps: 'all'
            });

            gsap.from('.btn', {
                y: 50, opacity: 0, stagger: 0.2, duration: 1, delay: 1.5, ease: 'back', clearProps: 'all'
            });

            gsap.utils.toArray('.card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
                    y: 100, opacity: 0, duration: 0.8, delay: i * 0.1, clearProps: 'all'
                });
            });

            gsap.from('.premium-content', {
                scrollTrigger: { trigger: '.premium-section', start: 'top 70%', toggleActions: 'play none none none' },
                x: -100, opacity: 0, duration: 1, clearProps: 'all'
            });

            gsap.from('.mockup-window', {
                scrollTrigger: { trigger: '.premium-section', start: 'top 70%', toggleActions: 'play none none none' },
                x: 100, opacity: 0, duration: 1, rotateY: -20, clearProps: 'all'
            });

            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <Header />
            <div className="bg-grid"></div>

            <section className="hero">
                <div className="hero-badge">V2.0 IS NOW LIVE</div>
                <h1>
                    <span>TAKE YOUR SERVER</span>
                    <span>TO THE</span>
                    <span className="highlight">NEXT LEVEL</span>
                </h1>
                <p>THE MOST ADVANCED DISCORD AUTOMATION TOOL. POWERFUL MODERATION, HIGH-QUALITY MUSIC, AND ENGAGING ECONOMY SYSTEMS.</p>

                <div className="btn-group">
                    <a href="https://discord.com/oauth2/authorize?client_id=1045368778441101312" className="btn btn-primary">INVITE NOW</a>
                    <a href="https://discord.gg/M7DJFf2qzm" className="btn btn-secondary">SUPPORT SERVER</a>
                </div>
            </section>

            <section id="features" className="section">
                <div className="section-header">
                    <h2>UNMATCHED FEATURES</h2>
                    <p>EVERYTHING YOU NEED TO MANAGE YOUR COMMUNITY</p>
                </div>
                <div className="features-grid">
                    <div className="card">
                        <div className="card-icon"><i className="fas fa-shield-virus"></i></div>
                        <h3>ADVANCED ANTINUKE</h3>
                        <p>PROTECT YOUR SERVER FROM RAIDS AND MALICIOUS ATTACKS WITH OUR STATE-OF-THE-ART SECURITY MODULES.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon"><i className="fas fa-music"></i></div>
                        <h3>HIGH-RES MUSIC</h3>
                        <p>EXPERIENCE CRYSTAL CLEAR AUDIO WITH SUPPORT FOR SPOTIFY, SOUNDCLOUD, AND CUSTOM PLAYLISTS.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon"><i className="fas fa-robot"></i></div>
                        <h3>AI AUTOMATION</h3>
                        <p>POWERED BY ADVANCED AI TO HANDLE MODERATION AND USER QUERIES AUTOMATICALLY.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon"><i className="fas fa-gift"></i></div>
                        <h3>GIVEAWAY SYSTEM</h3>
                        <p>HOST COMPLEX GIVEAWAYS WITH ROLE REQUIREMENTS, SERVER JOIN CHECKS, AND MORE.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon"><i className="fas fa-chart-pie"></i></div>
                        <h3>SERVER STATS</h3>
                        <p>TRACK YOUR SERVER'S GROWTH WITH DETAILED ANALYTICS AND GRAPHICAL REPORTS.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon"><i className="fas fa-gamepad"></i></div>
                        <h3>MINIGAMES</h3>
                        <p>KEEP YOUR CHAT ACTIVE WITH ENGAGING MINIGAMES LIKE TRIVIA, ECONOMY, AND RPG ELEMENTS.</p>
                    </div>
                </div>
            </section>

            <section id="premium" className="premium-section">
                <div className="premium-content">
                    <h2>PREMIUM POWER</h2>
                    <ul className="premium-list">
                        <li><i className="fas fa-check-circle"></i> HIGHER QUALITY MUSIC AUDIO</li>
                        <li><i className="fas fa-check-circle"></i> CUSTOMIZABLE BOT PROFILE</li>
                        <li><i className="fas fa-check-circle"></i> UNLIMITED REACTION ROLES</li>
                        <li><i className="fas fa-check-circle"></i> PRIORITY SUPPORT ACCESS</li>
                        <li><i className="fas fa-check-circle"></i> ADVANCED LOGGING RETENTION</li>
                    </ul>
                </div>
                <div className="premium-visual">
                    <div className="mockup-window">
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
                            <div style={{ width: '12px', height: '12px', background: '#ff5f56', borderRadius: '50%' }}></div>
                            <div style={{ width: '12px', height: '12px', background: '#ffbd2e', borderRadius: '50%' }}></div>
                            <div style={{ width: '12px', height: '12px', background: '#27c93f', borderRadius: '50%' }}></div>
                        </div>
                        <div style={{ color: '#ddd', fontFamily: 'monospace' }}>
                            <span style={{ color: '#00f3ff' }}>TR4P</span> <span style={{ color: '#666' }}>&gt;&gt;</span> <span style={{ color: '#bc13fe' }}>/play</span> song: <span style={{ color: '#fff' }}>NCS Release</span><br /><br />
                            <span style={{ color: '#00f3ff' }}>A.X.L BLADE</span> <span style={{ background: '#5865F2', color: '#fff', fontSize: '10px', padding: '2px 4px', borderRadius: '3px' }}>BOT</span><br />
                            <div style={{ background: 'rgba(0,243,255,0.1)', borderLeft: '3px solid #00f3ff', padding: '10px', marginTop: '5px' }}>
                                <strong>NOW PLAYING</strong><br />
                                Unknown Brain - Superhero (feat. Chris Linton)<br />
                                <span style={{ fontSize: '0.8em', color: '#888' }}>Requested by TR4P</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
