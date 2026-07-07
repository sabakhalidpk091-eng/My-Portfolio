import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

    // Helper to extract icons based on title or default
    const getProjectIcon = (title) => {
        const t = title.toLowerCase();
        if (t.includes('counseling') || t.includes('career') || t.includes('education')) return '🎓';
        if (t.includes('real estate') || t.includes('home') || t.includes('property')) return '🏠';
        if (t.includes('commerce') || t.includes('store') || t.includes('shop')) return '🛒';
        if (t.includes('crm') || t.includes('system') || t.includes('manage')) return '📊';
        return '⭐'; // default
    };

    return (
        <div className="page active">
            <div className="section">
                <p className="section-label">My Work</p>
                <h2 className="section-title">All <span>Projects</span></h2>
                <p className="section-desc">Full-stack applications built with modern technologies — from concept to deployment.</p>

                {loading ? (
                    <div className="projects-grid">
                        <p style={{ color: 'var(--muted)', marginTop: '20px' }}>Loading projects...</p>
                    </div>
                ) : (
                    <div className="projects-grid">
                        {projects.map((project) => {
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
                                            {techStack.map((tech, idx) => (
                                                <span key={idx} className="tag">{tech.trim()}</span>
                                            ))}
                                        </div>
                                        <div className="project-links">
                                            {project.github_link && (
                                                <a className="btn-sm ghost" href={project.github_link} target="_blank" rel="noreferrer">⌥ GitHub</a>
                                            )}
                                            {project.demo_link && (
                                                <a className="btn-sm filled" href={project.demo_link} target="_blank" rel="noreferrer">↗ Live Demo</a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {projects.length === 0 && (
                            <p style={{ color: 'var(--muted)', gridColumn: '1 / -1' }}>No projects found in the database.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
