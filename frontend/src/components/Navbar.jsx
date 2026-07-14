import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiFolder, FiMessageSquare, FiSun, FiMoon, FiSend, FiCode } from 'react-icons/fi';

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
                    <div className="logo-mark">
                        <FiCode size={17} style={{ strokeWidth: 3 }} />
                    </div>
                    <div>
                        <span>Saba Khalid</span>
                        <span className="logo-sub">FULL STACK DEVELOPER</span>
                    </div>
                </Link>

                <ul className="nav-links">
                    <li>
                        <Link to="/" className={isActive('/') ? 'active' : ''}>
                            <FiHome size={15} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                            <FiUser size={15} />
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" className={isActive('/experience') ? 'active' : ''}>
                            <FiBriefcase size={15} />
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
                            <FiFolder size={15} />
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                            <FiMessageSquare size={15} />
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="nav-right">
                    <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
                    </button>
                    <Link className="nav-cta" to="/contact">
                        <FiSend size={14} style={{ marginRight: '6px' }} />
                        Hire
                    </Link>
                </div>
            </div>
        </nav>
    );
}
