import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PageLayout.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "HOW DO I INVITE ARKIII TO MY SERVER?",
            answer: "CLICK THE \"INVITE NOW\" BUTTON ON OUR HOMEPAGE AND SELECT YOUR SERVER FROM THE DROPDOWN MENU. MAKE SURE YOU HAVE THE \"MANAGE SERVER\" PERMISSION TO ADD THE BOT."
        },
        {
            question: "WHAT PERMISSIONS DOES ARKIII NEED?",
            answer: "ARKIII REQUIRES ADMINISTRATOR PERMISSIONS FOR FULL FUNCTIONALITY, INCLUDING MODERATION, CHANNEL MANAGEMENT, AND ANTINUKE FEATURES. YOU CAN CUSTOMIZE PERMISSIONS BASED ON YOUR NEEDS."
        },
        {
            question: "IS ARKIII FREE TO USE?",
            answer: "YES! ARKIII OFFERS A COMPLETELY FREE TIER WITH ALL ESSENTIAL FEATURES. PREMIUM SUBSCRIPTIONS UNLOCK ADVANCED FEATURES LIKE HIGHER QUALITY MUSIC, UNLIMITED REACTION ROLES, AND PRIORITY SUPPORT."
        },
        {
            question: "HOW DO I SET UP MUSIC PLAYBACK?",
            answer: "JOIN A VOICE CHANNEL AND USE THE /PLAY COMMAND FOLLOWED BY A SONG NAME, URL, OR PLAYLIST. ARKIII SUPPORTS SPOTIFY, YOUTUBE, SOUNDCLOUD, AND MORE!"
        },
        {
            question: "HOW DOES THE ANTINUKE SYSTEM WORK?",
            answer: "OUR ANTINUKE SYSTEM AUTOMATICALLY DETECTS AND PREVENTS MALICIOUS ACTIONS LIKE MASS BANS, CHANNEL DELETIONS, AND ROLE CHANGES. YOU CAN WHITELIST TRUSTED USERS AND CUSTOMIZE DETECTION THRESHOLDS."
        },
        {
            question: "CAN I CUSTOMIZE THE BOT'S PREFIX?",
            answer: "YES! USE THE /SETPREFIX COMMAND TO CHANGE THE BOT'S COMMAND PREFIX TO ANYTHING YOU LIKE. THE DEFAULT PREFIX IS \"/\"."
        },
        {
            question: "HOW DO I GET SUPPORT?",
            answer: "JOIN OUR DISCORD SUPPORT SERVER, CHECK THE DOCUMENTATION, OR USE OUR CONTACT FORM. PREMIUM USERS GET PRIORITY SUPPORT WITH FASTER RESPONSE TIMES."
        },
        {
            question: "DOES ARKIII WORK IN MULTIPLE LANGUAGES?",
            answer: "CURRENTLY, ARKIII PRIMARILY SUPPORTS ENGLISH, BUT WE'RE WORKING ON ADDING MULTI-LANGUAGE SUPPORT IN FUTURE UPDATES!"
        }
    ];

    return (
        <>
            <Header />
            <div className="container">
                <div className="page-header">
                    <h1>FREQUENTLY ASKED QUESTIONS</h1>
                    <p>FIND ANSWERS TO COMMON QUESTIONS</p>
                </div>

                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        <div className="faq-answer">
                            <div className="faq-answer-content">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default FAQ;
