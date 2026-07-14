import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiLayers } from 'react-icons/fi';

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
                                                <FiLayers size={13} /> Full Stack Project
                                            </span>
                                            <div style={{ display: 'flex', gap: '12px' }}>
                                                {project.github_link && (
                                                    <a className="proj-view font-semibold" href={project.github_link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                        <FiGithub size={14} /> GitHub ↗
                                                    </a>
                                                )}
                                                {project.demo_link && (
                                                    <a className="proj-view font-bold" href={project.demo_link} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
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
                            <p style={{ color: 'var(--muted)' }}>No projects found in the database.</p>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
}
