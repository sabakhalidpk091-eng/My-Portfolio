import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

    const getProjectIcon = (title) => {
        const t = title.toLowerCase();
        if (t.includes('counseling') || t.includes('career') || t.includes('education')) return '🎓';
        if (t.includes('real estate') || t.includes('home') || t.includes('property')) return '🏠';
        if (t.includes('commerce') || t.includes('store') || t.includes('shop')) return '🛒';
        if (t.includes('crm') || t.includes('system') || t.includes('manage')) return '📊';
        return '⭐';
    };

    return (
        <div className="page">
            {/* HERO */}
            <div className="hero">
                <div>
                    <div className="eyebrow">
                        <span className="dot"></span> Available for freelance & remote roles
                    </div>
                    <h1>
                        Building full-stack products that feel <span className="accent">production-ready</span>.
                    </h1>
                    <p>
                        Motivated full-stack developer based in Islamabad/Rawalpindi, Pakistan. Skilled in shipping real-world web apps — from real estate platforms to CRMs and HR systems — using React, FastAPI, Django, and Supabase. I care about the details that make a demo feel like a real product.
                    </p>
                    <div className="hero-btns">
                        <Link className="btn-primary" to="/projects">View Projects →</Link>
                        <Link className="btn-ghost" to="/contact">Get in Touch</Link>
                    </div>
                    <div className="hero-loc">📍 Islamabad / Rawalpindi, Pakistan</div>
                </div>

                <div className="term">
                    <div className="term-bar">
                        <div className="term-dot" style={{ background: '#ef4444' }}></div>
                        <div className="term-dot" style={{ background: '#f59e0b' }}></div>
                        <div className="term-dot" style={{ background: '#22c55e' }}></div>
                        <div className="term-title mono">developer.json</div>
                    </div>
                    <div className="term-body">
                        <div><span className="c4">const</span> <span className="c2">developer</span> <span className="c4">=</span> {'{'}</div>
                        <div>&nbsp;&nbsp;<span className="c1">name:</span> <span className="c3">"Saba Khalid"</span>,</div>
                        <div>&nbsp;&nbsp;<span className="c1">role:</span> <span className="c3">"Full Stack Developer"</span>,</div>
                        <div>&nbsp;&nbsp;<span className="c1">stack:</span> [<span className="c3">"React"</span>, <span className="c3">"FastAPI"</span>,</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c3">"Django"</span>, <span className="c3">"Supabase"</span>],</div>
                        <div>&nbsp;&nbsp;<span className="c1">status:</span> <span className="cy">"open_to_work"</span><span className="term-cursor"></span></div>
                        <div>{'};'}</div>
                    </div>
                    <div className="stack-pills">
                        <span className="pill">React / Vite</span>
                        <span className="pill">FastAPI</span>
                        <span className="pill">Django</span>
                        <span className="pill">Supabase</span>
                        <span className="pill">PostgreSQL</span>
                        <span className="pill">Tailwind CSS</span>
                        <span className="pill">Vercel</span>
                    </div>
                </div>
            </div>

            {/* STUDIO WORKSPACE */}
            <section id="studio">
                <div className="studio-head">
                    <h2>🖥️ Studio Workspace</h2>
                    <div className="studio-live">
                        <span className="bar"><span></span><span></span><span></span></span> Live Build
                    </div>
                </div>
                <div className="studio-grid">
                    <div className="editor-pane">
                        <div className="editor-tabs">
                            <div className="editor-tab active">📄 portfolio.tsx</div>
                            <div className="editor-tab">📄 api.py</div>
                        </div>
                        <div className="editor-code">
                            <div className="ln"><span className="lnum">1</span><span><span className="k1">import</span> <span className="k4">React</span> <span className="k1">from</span> <span className="k3">"react"</span>;</span></div>
                            <div className="ln"><span className="lnum">2</span><span></span></div>
                            <div className="ln"><span className="lnum">3</span><span><span className="k1">export const</span> <span className="k2">Developer</span> <span className="k4">{"= () =>"}</span> {'{'}</span></div>
                            <div className="ln"><span className="lnum">4</span><span>&nbsp;&nbsp;<span className="k1">const</span> <span className="k2">skills</span> <span className="k4">=</span> [</span></div>
                            <div className="ln"><span className="lnum">5</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k3">"React.js"</span>, <span className="k3">"FastAPI"</span>,</span></div>
                            <div className="ln"><span className="lnum">6</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k3">"Django"</span>, <span className="k3">"Supabase"</span></span></div>
                            <div className="ln"><span className="lnum">7</span><span>&nbsp;&nbsp;];</span></div>
                            <div className="ln"><span className="lnum">8</span><span>&nbsp;&nbsp;<span className="k1">return</span> (</span></div>
                            <div className="ln"><span className="lnum">9</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="k5">&lt;App</span> <span className="k4">available</span><span className="k4">=</span>{'{'}<span className="k1">true</span>{'}'} <span className="k5">/&gt;</span></span></div>
                            <div className="ln"><span className="lnum">10</span><span>&nbsp;&nbsp;)<span className="kcursor"></span></span></div>
                            <div className="ln"><span className="lnum">11</span><span>{'}'}</span></div>
                        </div>
                        <div className="editor-foot">
                            <span>FOCUS: <b style={{ color: 'var(--muted)' }}>FULL STACK DEVELOPMENT</b></span>
                            <span>UTF-8 · REACT MAIN</span>
                        </div>
                    </div>
                    <div className="term-pane">
                        <div className="term-pane-head">
                            <span className="dots">
                                <span style={{ background: '#ef4444' }}></span>
                                <span style={{ background: '#f59e0b' }}></span>
                                <span style={{ background: '#22c55e' }}></span>
                            </span>
                            COMPILER TERMINAL
                        </div>
                        <div className="compile-row">
                            <div className="compile-icon">📦</div>
                            <div className="compile-txt"><b>Compiling Project</b><span>...</span></div>
                        </div>
                        <div className="wave-box">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <div className="deploy-row">
                            <div className="dtop"><span className="di">☁️</span> Cloud Deployment</div>
                            <div className="deploy-line"></div>
                        </div>
                        <div className="success-block">
                            <div className="rocket">🚀</div>
                            <div className="stxt">SUCCESS</div>
                            <div className="stime">Service deployed at {deployTime}</div>
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
                        <div className="skill-icon cyan">🎨</div>
                        <h4>Frontend</h4>
                        <div className="skill-list">
                            <span>React.js / Vite</span>
                            <span>JavaScript (ES6+)</span>
                            <span>Tailwind CSS</span>
                            <span>CSS3 &amp; HTML5</span>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon purple">⚙️</div>
                        <h4>Backend</h4>
                        <div className="skill-list">
                            <span>Django</span>
                            <span>FastAPI</span>
                            <span>REST API Design</span>
                            <span>Python API Specs</span>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon cyan">🗄️</div>
                        <h4>Database &amp; Cloud</h4>
                        <div className="skill-list">
                            <span>Supabase</span>
                            <span>PostgreSQL</span>
                            <span>Database Integration</span>
                            <span>Vercel Deployments</span>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon purple">🛠️</div>
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

            {/* FEATURED PROJECTS */}
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
                                <div key={project.id} className="proj-card2">
                                    <div className="proj-thumb2" style={{ background: 'linear-gradient(135deg, #0d1220, #1c2740)' }}>
                                        <div className="thumb-top-row">
                                            <span className="thumb-badge">SaaS</span>
                                            <span className="thumb-status">Live</span>
                                        </div>
                                        <div className="thumb-center">
                                            <div className="em">{getProjectIcon(project.title)}</div>
                                            <div className="nm">{project.title}</div>
                                            <div className="sub">Project Deployment</div>
                                        </div>
                                    </div>
                                    <div className="proj-body2">
                                        <div className="proj-year2">2026</div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="proj-tags2">
                                            {techStack.map((tech, idx) => (
                                                <span key={idx} className="proj-tag2">{tech.trim()}</span>
                                            ))}
                                        </div>
                                        <div className="proj-foot">
                                            <span className="proj-hint">⚙️ Full Stack System</span>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                {project.github_link && (
                                                    <a className="proj-view" href={project.github_link} target="_blank" rel="noreferrer">⌥ GitHub ↗</a>
                                                )}
                                                {project.demo_link && (
                                                    <a className="proj-view font-semibold" href={project.demo_link} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)' }}>View Live ↗</a>
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
                <Link className="btn-primary" to="/contact">Hire Me Now 🚀</Link>
            </div>
        </div>
    );
}
