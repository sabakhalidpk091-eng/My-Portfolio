import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav>
            <Link className="nav-logo" to="/">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
                <span>SABA</span>.DEV
            </Link>
            <ul className="nav-links">
                <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
                <li><Link to="/experience" className={isActive('/experience') ? 'active' : ''}>Experience</Link></li>
                <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link></li>
                <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
            </ul>
            <div className="nav-status">Open to Work</div>
        </nav>
    );
}
