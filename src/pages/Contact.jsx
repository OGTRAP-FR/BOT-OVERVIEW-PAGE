import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PageLayout.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('MESSAGE SENT! WE\'LL GET BACK TO YOU SOON.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Header />
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="page-header">
                    <h1>CONTACT US</h1>
                    <p>GET IN TOUCH WITH THE A.X.L BLADE TEAM</p>
                </div>

                <div className="contact-methods">
                    <div className="contact-method">
                        <i className="fab fa-discord"></i>
                        <h3>DISCORD</h3>
                        <p>JOIN OUR SUPPORT SERVER</p>
                        <a href="https://discord.gg/M7DJFf2qzm">DISCORD.GG/M7DJFF2QZM</a>
                    </div>
                    <div className="contact-method">
                        <i className="fas fa-envelope"></i>
                        <h3>EMAIL</h3>
                        <p>SEND US AN EMAIL</p>
                        <a href="mailto:support@axlblade.bot">SUPPORT@AXLBLADE.BOT</a>
                    </div>
                </div>

                <div className="contact-card">
                    <h2 style={{ color: '#00f3ff', marginBottom: '30px', textAlign: 'center' }}>SEND US A MESSAGE</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">YOUR NAME</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="ENTER YOUR NAME"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="YOUR.EMAIL@EXAMPLE.COM"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">SUBJECT</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="WHAT'S THIS ABOUT?"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">MESSAGE</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="TELL US MORE..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
