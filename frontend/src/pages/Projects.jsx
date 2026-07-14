import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:8000');

export default function Projects() {
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
        <div className="page">
            <div className="page-title">
                <h1>All Projects</h1>
            </div>

            <section>
                <div className="sec-head">
                    <p>Dynamic full-stack platforms built, configured, and deployed.</p>
                </div>

                {loading ? (
                    <div className="proj-list">
                        <p style={{ color: 'var(--muted)' }}>Loading projects...</p>
                    </div>
                ) : (
                    <div className="proj-list">
                        {projects.map((project) => {
                            const techStack = Array.isArray(project.tech_stack)
                                ? project.tech_stack
                                : typeof project.tech_stack === 'string'
                                    ? project.tech_stack.split(',')
                                    : [];

                            return (
                                <div key={project.id} className="proj-card2">
                                    <div className="proj-thumb2" style={{ background: 'linear-gradient(135deg, #0d1220, #1c2740)' }}>
                                        <div className="thumb-top-row">
                                            <span className="thumb-badge">Full Stack</span>
                                            <span className="thumb-status">Live</span>
                                        </div>
                                        <div className="thumb-center">
                                            <div className="em">{getProjectIcon(project.title)}</div>
                                            <div className="nm">{project.title}</div>
                                            <div className="sub">Web App</div>
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
                                            <span className="proj-hint">👆 Click to inspect links</span>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                {project.github_link && (
                                                    <a className="proj-view font-semibold" href={project.github_link} target="_blank" rel="noreferrer">⌥ GitHub ↗</a>
                                                )}
                                                {project.demo_link && (
                                                    <a className="proj-view font-semibold" href={project.demo_link} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)' }}>Live Demo ↗</a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {projects.length === 0 && (
                            <p style={{ color: 'var(--muted)' }}>No projects found in the database.</p>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
}
