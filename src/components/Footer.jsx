import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-brand">
                    <div className="nav-logo" style={{ fontFamily: "'Fira Code', monospace", fontSize: "1rem", fontWeight: 500 }}>
                        <span style={{ color: "var(--purple)" }}>SABA</span>.DEV
                    </div>
                    <p>Full-Stack Web Developer based in Islamabad, Pakistan. Building scalable web applications with React, Django &amp; FastAPI.</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <a href="mailto:sabakhalidpk091@gmail.com">sabakhalidpk091@gmail.com</a>
                    <a href="tel:03482195468">03482195468</a>
                    <a>Islamabad, Pakistan</a>
                </div>
            </footer>
            <div className="footer-bottom">
                <p>© 2025 Saba Khalid. Built with React &amp; FastAPI.</p>
            </div>
        </>
    );
}
