import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiLayers, FiCpu, FiLayout, FiDatabase, FiTool, FiTerminal, FiCode, FiZap, FiServer, FiLock, FiLink, FiGitBranch, FiMonitor, FiBox, FiCloudLightning, FiTriangle, FiFileText } from 'react-icons/fi';

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:8000');

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deployTime, setDeployTime] = useState('');

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

        // compiler time setup
        setDeployTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, []);

    return (
        <div className="page">
            {/* HERO (Centered Layout matching Saqib screenshot content layout for Saba Khalid) */}
            <div className="hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '820px', margin: '0 auto', padding: '90px 20px 40px' }}>
                <div className="eyebrow" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                    <span className="dot"></span> Available for freelance & remote roles
                </div>
                <h1 style={{ textAlign: 'center', fontSize: '3.6rem', fontWeight: 800, margin: '0 0 10px' }}>
                    I'm <span className="accent">Saba Khalid</span>
                </h1>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>
                    Full Stack Developer
                </h2>
                <p style={{ margin: '0 auto 30px', maxWidth: '720px', fontSize: '1.02rem', lineHeight: '1.85', color: 'var(--muted)' }}>
                    Full-Stack Developer with a Bachelor's degree in Information Technology and hands-on experience building and deploying responsive web applications. Skilled in developing end-to-end solutions using React, FastAPI, Django, and Supabase. Passionate about designing secure, scalable, and user-focused web platforms that solve real-world problems while continuously exploring modern tech stacks.
                </p>
                <div className="hero-btns" style={{ justifyContent: 'center', marginBottom: '24px' }}>
                    <Link className="btn-primary" to="/projects">View Projects →</Link>
                    <Link className="btn-ghost" to="/contact">Get in Touch</Link>
                </div>
                <div className="hero-loc" style={{ justifyContent: 'center', marginBottom: '30px' }}>📍 Islamabad / Rawalpindi, Pakistan</div>

                {/* Developer Skills Stack pills relocated under hero content */}
                <div className="stack-pills" style={{ justifyContent: 'center', borderTop: 'none', padding: '10px 0 0', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="pill">React / Vite</span>
                    <span className="pill">FastAPI</span>
                    <span className="pill">Django</span>
                    <span className="pill">Supabase</span>
                    <span className="pill">PostgreSQL</span>
                    <span className="pill">Tailwind CSS</span>
                    <span className="pill">Vercel</span>
                </div>
            </div>

            {/* SYSTEM ARCHITECTURE & ENGINEERING WORKFLOW */}
            <section id="architecture">
                <div className="sec-head">
                    <div className="sec-eyebrow">Engineering Workflow</div>
                    <h2>Application <span>Architecture Flow</span></h2>
                    <p>How I structure, code, and deploy web applications to production.</p>
                </div>
                <div className="arch-grid">
                    <div className="arch-card">
                        <span className="arch-num">01 / CLIENT</span>
                        <div className="arch-head">
                            <div className="arch-icon">
                                <FiLayout size={18} />
                            </div>
                            <h4>Frontend Interface</h4>
                        </div>
                        <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: '1.7' }}>
                            Crafting modular interactive components using React and Vite. Designing with vanilla CSS/Tailwind layouts to build responsive user controls, state hooks, and routers.
                        </p>
                        <div className="arch-stack">
                            <span className="arch-tag">React.js</span>
                            <span className="arch-tag">Vite</span>
                            <span className="arch-tag">Tailwind CSS</span>
                        </div>
                    </div>

                    <div className="arch-card">
                        <span className="arch-num">02 / ROUTER</span>
                        <div className="arch-head">
                            <div className="arch-icon">
                                <FiCpu size={18} />
                            </div>
                            <h4>API Engine Layer</h4>
                        </div>
                        <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: '1.7' }}>
                            Constructing clean REST APIs in Python. Supporting secure routers, CORS origins middleware, JSON validations, and high-performance server structures.
                        </p>
                        <div className="arch-stack">
                            <span className="arch-tag">FastAPI</span>
                            <span className="arch-tag">Django</span>
                            <span className="arch-tag">JWT Auth</span>
                        </div>
                    </div>

                    <div className="arch-card">
                        <span className="arch-num">03 / STORAGE</span>
                        <div className="arch-head">
                            <div className="arch-icon">
                                <FiDatabase size={18} />
                            </div>
                            <h4>Database Management</h4>
                        </div>
                        <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: '1.7' }}>
                            Structuring relational models, database indexes, and foreign key relations. Linking PostgreSQL servers through Supabase for fast data querying.
                        </p>
                        <div className="arch-stack">
                            <span className="arch-tag">PostgreSQL</span>
                            <span className="arch-tag">Supabase</span>
                            <span className="arch-tag">SQLAlchemy</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills">
                <div className="sec-head">
                    <div className="sec-eyebrow">Toolkit</div>
                    <h2>Core <span>Skills</span></h2>
                    <p>Technologies I use to build full-stack web applications.</p>
                </div>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon cyan" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FiLayout size={18} />
                        </div>
                        <h4>Frontend</h4>
                        <div className="skill-list">
                            <span>React.js / Vite</span>
                            <span>JavaScript (ES6+)</span>
                            <span>Tailwind CSS</span>
                            <span>CSS3 &amp; HTML5</span>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon purple" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FiCpu size={18} />
                        </div>
                        <h4>Backend</h4>
                        <div className="skill-list">
                            <span>Django</span>
                            <span>FastAPI</span>
                            <span>REST API Design</span>
                            <span>Python API Specs</span>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon cyan" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FiDatabase size={18} />
                        </div>
                        <h4>Database &amp; Cloud</h4>
                        <div className="skill-list">
                            <span>Supabase</span>
                            <span>PostgreSQL</span>
                            <span>Database Integration</span>
                            <span>Vercel Deployments</span>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon purple" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FiTool size={18} />
                        </div>
                        <h4>Tools / Other</h4>
                        <div className="skill-list">
                            <span>Git &amp; GitHub</span>
                            <span>Cursor IDE</span>
                            <span>Debugging &amp; AI Tools</span>
                            <span>MS Office suite</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CARD‑STYLE SKILL STACKS */}
            {/* Frontend Tech Cards */}
            <section id="frontend-cards">
                <div className="sec-head">
                    <div className="sec-eyebrow">Frontend Technologies</div>
                    <h2>Frontend <span>Stack</span></h2>
                    <p>Core UI libraries and frameworks.</p>
                </div>
                <div className="cards-grid">
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiCode size={24} /></div>
                        <div className="tech-card-title">React</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiZap size={24} /></div>
                        <div className="tech-card-title">Vite</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiFileText size={24} /></div>
                        <div className="tech-card-title">JavaScript</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiLayout size={24} /></div>
                        <div className="tech-card-title">Tailwind CSS</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiCode size={24} /></div>
                        <div className="tech-card-title">HTML5</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiLayout size={24} /></div>
                        <div className="tech-card-title">CSS3</div>
                    </div>
                </div>
            </section>

            {/* Backend Tech Cards */}
            <section id="backend-cards">
                <div className="sec-head">
                    <div className="sec-eyebrow">Backend Technologies</div>
                    <h2>Backend <span>Stack</span></h2>
                    <p>Server‑side frameworks and APIs.</p>
                </div>
                <div className="cards-grid">
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiServer size={24} /></div>
                        <div className="tech-card-title">Django</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiZap size={24} /></div>
                        <div className="tech-card-title">FastAPI</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiCpu size={24} /></div>
                        <div className="tech-card-title">Python</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiLink size={24} /></div>
                        <div className="tech-card-title">REST API</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiLock size={24} /></div>
                        <div className="tech-card-title">JWT Auth</div>
                    </div>
                </div>
            </section>

            {/* Tools & Other Tech Cards */}
            <section id="tools-cards">
                <div className="sec-head">
                    <div className="sec-eyebrow">Tools & Utilities</div>
                    <h2>Tools <span>Stack</span></h2>
                    <p>Productivity and DevOps tools.</p>
                </div>
                <div className="cards-grid">
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiGitBranch size={24} /></div>
                        <div className="tech-card-title">Git</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiGithub size={24} /></div>
                        <div className="tech-card-title">GitHub</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiMonitor size={24} /></div>
                        <div className="tech-card-title">Cursor IDE</div>
                    </div>
                    <div className="tech-card">
                        <div className="tech-card-icon"><FiBox size={24} /></div>
                        <div className="tech-card-title">AI Tools</div>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS (Image column / proj-thumb2 removed) */}




            <section id="featured-projects">
                <div className="sec-head">
                    <div className="sec-eyebrow">My Work</div>
                    <h2>Featured <span>Projects</span></h2>
                    <p>Real-world applications built with modern technologies.</p>
                </div>

                {loading ? (
                    <div className="proj-list">
                        <p style={{ color: 'var(--muted)' }}>Loading projects...</p>
                    </div>
                ) : (
                    <div className="proj-list">
                        {projects.slice(0, 3).map((project) => {
                            const techStack = Array.isArray(project.tech_stack)
                                ? project.tech_stack
                                : typeof project.tech_stack === 'string'
                                    ? project.tech_stack.split(',')
                                    : [];

                            return (
                                <div key={project.id} className="proj-card2 text-only-card">
                                    <div className="proj-body2" style={{ width: '100%' }}>
                                        <div className="proj-year2">2026</div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="proj-tags2">
                                            {techStack.map((tech, idx) => (
                                                <span key={idx} className="proj-tag2">{tech.trim()}</span>
                                            ))}
                                        </div>
                                        <div className="proj-foot">
                                            <span className="proj-hint" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                <FiLayers size={13} /> Full Stack System
                                            </span>
                                            <div style={{ display: 'flex', gap: '12px' }}>
                                                {project.github_link && (
                                                    <a className="proj-view font-semibold" href={project.github_link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                        <FiGithub size={14} /> GitHub ↗
                                                    </a>
                                                )}
                                                {project.demo_link && (
                                                    <a className="proj-view font-bold" href={project.demo_link} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                        <FiExternalLink size={14} /> Live Demo ↗
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {projects.length === 0 && (
                            <p style={{ color: 'var(--muted)' }}>No projects available.</p>
                        )}
                    </div>
                )}
            </section>

            <div className="cta-banner">
                <h2>Ready for an <span className="accent">epic</span> build?</h2>
                <Link className="btn-primary" to="/contact">Let's Build Something 🚀</Link>
            </div>
        </div>
    );
}
