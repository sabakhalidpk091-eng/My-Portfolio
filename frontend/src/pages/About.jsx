import React from 'react';

export default function About() {
    return (
        <div className="page active">
            <div className="section">
                <p className="section-label">Get To Know Me</p>
                <h2 className="section-title">About <span>Me</span></h2>
                <div className="about-grid">
                    <div>
                        <p className="about-bio">Motivated and detail-oriented BSIT graduate with strong expertise in full-stack web development. Skilled in building scalable, responsive, and user-focused web applications using modern technologies including React, Tailwind CSS, and Django.</p>
                        <p className="about-bio">Experienced in backend development, API integration, and real-world project delivery through freelance work and internships at <strong style={{ color: 'var(--purple2)' }}>Osho Technology</strong> and <strong style={{ color: 'var(--purple2)' }}>FBR (Federal Board of Revenue)</strong>. Passionate about problem-solving and continuously improving technical skills.</p>
                        <div className="about-highlights">
                            <div className="highlight-card">
                                <h4>🏗️ Clean Code Architecture</h4>
                                <p>Modular, maintainable, and well-documented codebases.</p>
                            </div>
                            <div className="highlight-card">
                                <h4>🔗 Backend &amp; API Integration</h4>
                                <p>Django REST and FastAPI for production-grade backends.</p>
                            </div>
                            <div className="highlight-card">
                                <h4>📱 Responsive Design</h4>
                                <p>Mobile-first UIs with Tailwind CSS.</p>
                            </div>
                            <div className="highlight-card">
                                <h4>🔍 Problem-Solving Focus</h4>
                                <p>Real-world debugging experience from internships.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="sidebar-card">
                            <h3>🎓 Education</h3>
                            <div className="edu-name">Rawalpindi Women University</div>
                            <div className="edu-degree">BS Information Technology</div>
                            <div className="edu-meta">2021 – 2025 · Rawalpindi, Pakistan</div>
                        </div>
                        <div className="sidebar-card">
                            <h3>📬 Contact</h3>
                            <div className="contact-info-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                sabakhalidpk091@gmail.com
                            </div>
                            <div className="contact-info-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                03482195468
                            </div>
                            <div className="contact-info-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                Islamabad, Pakistan
                            </div>
                        </div>
                        <a className="btn-primary" href="#" style={{ width: '100%', justifyContent: 'center' }}>⬇ Download CV</a>
                    </div>
                </div>

                <div className="skills-full">
                    <p className="section-label">Technical Skills</p>
                    <h2 className="section-title" style={{ marginBottom: '32px' }}>Skills &amp; <span>Expertise</span></h2>
                    <div className="skills-cats">
                        <div className="skills-cat-card">
                            <div className="skills-cat-title">⚛️ Frontend</div>
                            <div className="skills-badges">
                                <span className="skill-badge">HTML5</span>
                                <span className="skill-badge">CSS3</span>
                                <span className="skill-badge">JavaScript (ES6+)</span>
                                <span className="skill-badge">React.js</span>
                                <span className="skill-badge">Tailwind CSS</span>
                            </div>
                        </div>
                        <div className="skills-cat-card">
                            <div className="skills-cat-title">⚡ Backend</div>
                            <div className="skills-badges">
                                <span className="skill-badge">Django</span>
                                <span className="skill-badge">FastAPI</span>
                                <span className="skill-badge">REST API Development</span>
                            </div>
                        </div>
                        <div className="skills-cat-card">
                            <div className="skills-cat-title">🗄️ Database</div>
                            <div className="skills-badges">
                                <span className="skill-badge">Supabase</span>
                                <span className="skill-badge">Database Integration</span>
                                <span className="skill-badge">Responsive Web Design</span>
                            </div>
                        </div>
                        <div className="skills-cat-card">
                            <div className="skills-cat-title">🛠️ Tools</div>
                            <div className="skills-badges">
                                <span className="skill-badge">Git</span>
                                <span className="skill-badge">Cursor IDE</span>
                                <span className="skill-badge">AI Tools</span>
                                <span className="skill-badge">MS Word</span>
                                <span className="skill-badge">MS Excel</span>
                                <span className="skill-badge">Debugging Tools</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
