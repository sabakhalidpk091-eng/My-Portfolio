import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch(`${API_URL}/api/projects`, {
                    headers: { 'Accept': 'application/json' }
                });
                if (res.ok) {
                    const data = await res.json();
                    setProjects(data);
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const getProjectIcon = (title) => {
        const t = title.toLowerCase();
        if (t.includes('counseling') || t.includes('career') || t.includes('education')) return '🎓';
        if (t.includes('real estate') || t.includes('home') || t.includes('property')) return '🏠';
        if (t.includes('commerce') || t.includes('store') || t.includes('shop')) return '🛒';
        if (t.includes('crm') || t.includes('system') || t.includes('manage')) return '📊';
        return '⭐';
    };
    return (
        <div className="page active">
            {/* HERO */}
            <div className="hero">
                <div className="hero-badge">✦ Open to Opportunities</div>
                <h1 className="fade-in">Hi, I'm <span className="name">Saba Khalid</span></h1>
                <p className="hero-sub fade-in">Full-Stack Web Developer &amp; BSIT Graduate</p>
                <p className="hero-bio fade-in">
                    Motivated developer skilled in building <strong>scalable, responsive</strong> web applications using
                    <strong>React, FastAPI &amp; Django</strong>. Real-world experience through internships at
                    <strong>Osho Technology</strong> &amp; <strong>FBR</strong>.
                </p>
                <div className="hero-btns fade-in">
                    <Link className="btn-primary" to="/projects">View Projects →</Link>
                    <Link className="btn-outline" to="/contact">Contact Me</Link>
                </div>
                <div className="hero-info fade-in">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        sabakhalidpk091@gmail.com
                    </span>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        Islamabad, Pakistan
                    </span>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                        BSIT 2021–2025
                    </span>
                </div>
            </div>

            <div className="divider"></div>

            {/* STATS */}
            <div className="section" style={{ paddingBottom: 0 }}>
                <div className="stats-grid">
                    <div className="stat-card fade-in">
                        <div className="stat-number">4+</div>
                        <div className="stat-label">Projects Completed</div>
                    </div>
                    <div className="stat-card fade-in">
                        <div className="stat-number">2</div>
                        <div className="stat-label">Internships</div>
                    </div>
                    <div className="stat-card fade-in">
                        <div className="stat-number">3+</div>
                        <div className="stat-label">Years of Coding</div>
                    </div>
                    <div className="stat-card fade-in">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Technologies</div>
                    </div>
                </div>
            </div>

            <div className="divider" style={{ marginTop: '60px' }}></div>

            {/* CORE SKILLS */}
            <div className="section">
                <p className="section-label">What I Work With</p>
                <h2 className="section-title">Core <span>Skills</span></h2>
                <p className="section-desc">Technologies I use to build full-stack web applications.</p>
                <div className="skills-grid">
                    <div className="skill-card fade-in">
                        <div className="skill-icon">⚛️</div>
                        <div className="skill-name">React.js</div>
                        <div className="skill-type">Frontend</div>
                    </div>
                    <div className="skill-card fade-in">
                        <div className="skill-icon">🐍</div>
                        <div className="skill-name">Django</div>
                        <div className="skill-type">Backend</div>
                    </div>
                    <div className="skill-card fade-in">
                        <div className="skill-icon">⚡</div>
                        <div className="skill-name">FastAPI</div>
                        <div className="skill-type">Backend</div>
                    </div>
                    <div className="skill-card fade-in">
                        <div className="skill-icon">🎨</div>
                        <div className="skill-name">Tailwind CSS</div>
                        <div className="skill-type">Frontend</div>
                    </div>
                    <div className="skill-card fade-in">
                        <div className="skill-icon">🟢</div>
                        <div className="skill-name">Supabase</div>
                        <div className="skill-type">Database</div>
                    </div>
                    <div className="skill-card fade-in">
                        <div className="skill-icon">🔗</div>
                        <div className="skill-name">REST APIs</div>
                        <div className="skill-type">Integration</div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            {/* FEATURED PROJECTS */}
            <div className="section">
                <p className="section-label">My Work</p>
                <h2 className="section-title">Featured <span>Projects</span></h2>
                <p className="section-desc">Real-world applications built with modern technologies.</p>

                {loading ? (
                    <div className="projects-grid">
                        <p style={{ color: 'var(--muted)' }}>Loading projects...</p>
                    </div>
                ) : (
                    <div className="projects-grid">
                        {projects.slice(0, 4).map((project) => {
                            const techStack = Array.isArray(project.tech_stack)
                                ? project.tech_stack
                                : typeof project.tech_stack === 'string'
                                    ? project.tech_stack.split(',')
                                    : [];

                            return (
                                <div key={project.id} className="project-card fade-in" style={{ opacity: 1, transform: 'none' }}>
                                    <div className="project-img">{getProjectIcon(project.title)}</div>
                                    <div className="project-body">
                                        <div className="project-tags">
                                            <span className="tag status-done">Active</span>
                                        </div>
                                        <div className="project-title">{project.title}</div>
                                        <div className="project-desc">{project.description}</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                                            {techStack.slice(0, 3).map((tech, idx) => (
                                                <span key={idx} className="tag">{tech.trim()}</span>
                                            ))}
                                        </div>
                                        <div className="project-links">
                                            {project.github_link && (
                                                <Link className="btn-sm ghost" to={project.github_link} target="_blank">⌥ GitHub</Link>
                                            )}
                                            {project.demo_link && (
                                                <Link className="btn-sm filled" to={project.demo_link} target="_blank">↗ Live</Link>
                                            )}
                                            {!project.github_link && !project.demo_link && (
                                                <Link className="btn-sm ghost" to="/projects">View Details</Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {projects.length === 0 && (
                            <p style={{ color: 'var(--muted)', gridColumn: '1 / -1' }}>No projects available.</p>
                        )}
                    </div>
                )}
            </div>

            <div className="divider"></div>

            {/* EXPERIENCE HIGHLIGHTS */}
            <div className="section">
                <p className="section-label">Where I've Worked</p>
                <h2 className="section-title">Work <span>Experience</span></h2>
                <p className="section-desc">Real-world experience building production applications.</p>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <div className="timeline-header">
                                <div className="timeline-role">Web Developer Intern</div>
                                <div className="timeline-period">Dec 2024 – Jun 2025</div>
                            </div>
                            <div className="timeline-company">Osho Technology</div>
                            <ul className="timeline-list">
                                <li>Contributing to live web development projects using React and Django</li>
                                <li>Working on both frontend and backend tasks in a production environment</li>
                                <li>Collaborating with the team on scalable and maintainable web solutions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <div className="timeline-header">
                                <div className="timeline-role">IT Intern</div>
                                <div className="timeline-period">2024</div>
                            </div>
                            <div className="timeline-company">FBR – Federal Board of Revenue</div>
                            <ul className="timeline-list">
                                <li>Assisted in IT and software-related tasks within a government organization</li>
                                <li>Supported database handling and system-related operations</li>
                                <li>Gained exposure to real-world workflows and data management systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            {/* CERTIFICATIONS */}
            <div className="section">
                <p className="section-label">Achievements</p>
                <h2 className="section-title">Certifications &amp; <span>Awards</span></h2>
                <p className="section-desc">Recognized training and professional development.</p>
                <div className="certs-grid">
                    <div className="cert-card fade-in">
                        <div className="cert-icon">🏛️</div>
                        <div>
                            <div className="cert-name">FBR Internship Certificate</div>
                            <div className="cert-year">Federal Board of Revenue · 2024</div>
                        </div>
                    </div>
                    <div className="cert-card fade-in">
                        <div className="cert-icon">🎓</div>
                        <div>
                            <div className="cert-name">Web Development Training</div>
                            <div className="cert-year">NAVTTC Pakistan</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            {/* LANGUAGES */}
            <div className="section">
                <p className="section-label">Communication</p>
                <h2 className="section-title">Language <span>Skills</span></h2>
                <p className="section-desc">Languages I communicate in professionally and personally.</p>
                <div className="lang-grid">
                    <div className="lang-card fade-in">
                        <div className="lang-header">
                            <div className="lang-name"><span className="lang-flag">🇬🇧</span> English</div>
                            <div className="lang-level">Intermediate</div>
                        </div>
                        <div className="lang-bar-bg"><div className="lang-bar" style={{ width: '60%' }}></div></div>
                        <div className="lang-desc">Professional communication, technical documentation, client correspondence and project discussions.</div>
                    </div>
                    <div className="lang-card fade-in">
                        <div className="lang-header">
                            <div className="lang-name"><span className="lang-flag">🇵🇰</span> Urdu</div>
                            <div className="lang-level">Native</div>
                        </div>
                        <div className="lang-bar-bg"><div className="lang-bar" style={{ width: '100%' }}></div></div>
                        <div className="lang-desc">Native speaker — fully fluent in reading, writing, and speaking. Primary language for daily communication.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
