import React from 'react';

export default function About() {
    return (
        <div className="page">
            <div className="page-title">
                <h1>About Me</h1>
            </div>

            <section>
                <div className="philo-card">
                    <h3><span className="ic">🛡️</span> Philosophy &amp; Focus</h3>
                    <p>
                        Detail-oriented BSIT graduate with strong expertise in full-stack web development. Experienced in building scalable, responsive, and user-focused web applications. I plan projects precisely before implementation, then sweat the details — real database flows, working token-based authentication, and mobile-responsive UI layouts — to match real-world product specifications.
                    </p>
                    <div className="tag-cloud">
                        <span className="tag-pill"><span className="star">★</span> React.js</span>
                        <span className="tag-pill"><span className="star">★</span> Vite</span>
                        <span className="tag-pill"><span className="star">★</span> JavaScript (ES6+)</span>
                        <span className="tag-pill"><span className="star">★</span> Tailwind CSS</span>
                        <span className="tag-pill"><span className="star">★</span> Django</span>
                        <span className="tag-pill"><span className="star">★</span> FastAPI</span>
                        <span className="tag-pill"><span className="star">★</span> REST API Design</span>
                        <span className="tag-pill"><span className="star">★</span> JWT Authentication</span>
                        <span className="tag-pill"><span className="star">★</span> Supabase</span>
                        <span className="tag-pill"><span className="star">★</span> PostgreSQL</span>
                        <span className="tag-pill"><span className="star">★</span> Git &amp; GitHub</span>
                        <span className="tag-pill"><span className="star">★</span> Responsive Web Design</span>
                        <span className="tag-pill"><span className="star">★</span> Debugging Tools</span>
                    </div>
                </div>
            </section>

            {/* ACADEMIC FOUNDATION */}
            <section id="education">
                <div className="sec-head">
                    <div className="sec-eyebrow">Academic</div>
                    <h2>Education</h2>
                </div>
                <div className="edu-card">
                    <div className="edu-icon">📖</div>
                    <div>
                        <h4>BS Information Technology</h4>
                        <div className="sub">Rawalpindi Women University</div>
                        <div className="meta">2021 – 2025 · Rawalpindi, Pakistan</div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE & ACHIEVEMENTS */}
            <section id="certifications">
                <div className="sec-head">
                    <div className="sec-eyebrow">Achievements</div>
                    <h2>Certifications &amp; Training</h2>
                </div>
                <div className="cert-grid">
                    <div className="cert-card">
                        <div className="top">
                            <div className="cert-icon">🏛️</div>
                            <div>
                                <h4>FBR Internship Certificate</h4>
                                <div className="org">Federal Board of Revenue</div>
                            </div>
                        </div>
                        <span className="cert-status done">Completed</span>
                    </div>
                    <div className="cert-card">
                        <div className="top">
                            <div className="cert-icon">🎓</div>
                            <div>
                                <h4>Web Development Training</h4>
                                <div className="org">NAVTTC Pakistan</div>
                            </div>
                        </div>
                        <span className="cert-status done">Completed</span>
                    </div>
                </div>
            </section>

            {/* LANGUAGES */}
            <section id="languages">
                <div className="sec-head">
                    <div className="sec-eyebrow">Communication</div>
                    <h2>Language Skills</h2>
                </div>
                <div className="lang-grid">
                    <div className="lang-card">
                        <div className="lang-top">
                            <div className="lang-icon">🇬🇧</div>
                            <h4>English</h4>
                        </div>
                        <div className="lang-meta"><span>Intermediate / Professional</span><b>85%</b></div>
                        <div className="lang-bar"><div style={{ width: '85%' }}></div></div>
                        <p className="lang-desc">Technical documentation, client communications, and codebase explanations.</p>
                    </div>
                    <div className="lang-card">
                        <div className="lang-top">
                            <div className="lang-icon">🇵🇰</div>
                            <h4>Urdu</h4>
                        </div>
                        <div className="lang-meta"><span>Native / Fluent</span><b>100%</b></div>
                        <div className="lang-bar"><div style={{ width: '100%' }}></div></div>
                        <p className="lang-desc">Primary native language. Excellent written and verbal communication.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
