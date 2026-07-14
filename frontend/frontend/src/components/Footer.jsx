import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiMail, FiPhone, FiLinkedin, FiGithub, FiCheckCircle, FiHeart } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-brand">
                    <Link className="logo" to="/" style={{ marginBottom: '14px' }}>
                        <div className="logo-mark">
                            <FiCode size={17} style={{ strokeWidth: 3 }} />
                        </div>
                        <div>
                            <span>Saba Khalid</span>
                            <span className="logo-sub">FULL STACK DEVELOPER</span>
                        </div>
                    </Link>
                    <p style={{ marginTop: '14px' }}>Crafting production-feeling full-stack products with precision engineering and a full-stack skillset. Let's build something real together.</p>
                    <span className="footer-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <FiCheckCircle size={12} /> Verified Developer
                    </span>
                </div>

                <div className="footer-col">
                    <h5>Navigation</h5>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-col">
                    <h5>Connect</h5>
                    <a className="flink" href="mailto:sabakhalidpk091@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiMail size={14} /> Email
                    </a>
                    <a className="flink" href="tel:03482195468" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiPhone size={14} /> Contact
                    </a>
                    <a className="flink" href="https://www.linkedin.com/in/saba-khalid-6ba1793b3/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiLinkedin size={14} /> LinkedIn
                    </a>
                    <a className="flink" href="https://github.com/sabakhalidpk091-eng" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FiGithub size={14} /> GitHub
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        Made with <FiHeart size={12} style={{ color: 'var(--pink)', fill: 'var(--pink)' }} /> by Saba Khalid
                    </p>
                    <p>© 2026 Saba Khalid · Full Stack Developer</p>
                </div>
            </div>
        </footer>
    );
}
