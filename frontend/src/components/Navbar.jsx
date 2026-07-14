import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.add('light-preview');
        } else {
            document.body.classList.remove('light-preview');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav>
            <div className="nav-inner">
                <Link className="logo" to="/">
                    <div className="logo-mark">SK</div>
                    <div>
                        <span>Saba Khalid</span>
                        <span className="logo-sub">FULL STACK DEVELOPER</span>
                    </div>
                </Link>

                <ul className="nav-links">
                    <li>
                        <Link to="/" className={isActive('/') ? 'active' : ''}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" className={isActive('/experience') ? 'active' : ''}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="7" width="18" height="13" rx="2" />
                                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="nav-right">
                    <button className="theme-btn" onClick={toggleTheme}>
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <Link className="nav-cta" to="/contact">📨 Hire</Link>
                </div>
            </div>
        </nav>
    );
}
