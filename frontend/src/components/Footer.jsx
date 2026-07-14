import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-brand">
                    <Link className="logo" to="/" style={{ marginBottom: '14px' }}>
                        <div className="logo-mark">SK</div>
                        <div>
                            <span>Saba Khalid</span>
                            <span className="logo-sub">FULL STACK DEVELOPER</span>
                        </div>
                    </Link>
                    <p style={{ marginTop: '14px' }}>Crafting production-feeling full-stack products with precision engineering and a full-stack skillset. Let's build something real together.</p>
                    <span className="footer-badge">✓ Verified Developer</span>
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
                    <a className="flink" href="mailto:sabakhalidpk091@gmail.com">✉️ Email</a>
                    <a className="flink" href="tel:03482195468">📞 Contact</a>
                    <a className="flink" href="#" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
                    <a className="flink" href="#" target="_blank" rel="noreferrer">⌥ GitHub</a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p>Made with ❤️ by Saba Khalid</p>
                    <p>© 2026 Saba Khalid · Full Stack Developer</p>
                </div>
            </div>
        </footer>
    );
}
