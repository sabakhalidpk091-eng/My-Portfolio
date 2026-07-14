import React from 'react';
import { FiBriefcase, FiCode, FiAward, FiCpu } from 'react-icons/fi';

export default function Experience() {
    return (
        <div className="page">
            <div className="page-title">
                <h1>Career Journey</h1>
            </div>

            <section>
                <div className="sec-head">
                    <div className="sec-eyebrow">Career</div>
                    <h2>Work Experience</h2>
                    <p>Real-world experience gained through internships in tech and government sectors.</p>
                </div>

                <div className="timeline">
                    <div className="exp-card">
                        <div className="exp-side">
                            <div className="exp-date">Dec 2024 – Jun 2025</div>
                            <div className="exp-org" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FiBriefcase size={14} style={{ color: 'var(--cyan)' }} /> Osho Technology
                            </div>
                        </div>
                        <div className="exp-main">
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FiCode size={16} style={{ color: 'var(--purple2)' }} /> Web Developer Intern
                            </h4>
                            <ul>
                                <li>Contributing to live web development projects using React and Django.</li>
                                <li>Working on both frontend and backend tasks in a production environment.</li>
                                <li>Enhancing debugging, code review, and real-world problem-solving skills.</li>
                                <li>Collaborating with the team on scalable and maintainable web solutions.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="exp-card" style={{ marginTop: '24px' }}>
                        <div className="exp-side">
                            <div className="exp-date">2024</div>
                            <div className="exp-org" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FiAward size={14} style={{ color: 'var(--cyan)' }} /> FBR (Federal Board of Revenue)
                            </div>
                        </div>
                        <div className="exp-main">
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FiCpu size={16} style={{ color: 'var(--purple2)' }} /> IT Intern
                            </h4>
                            <ul>
                                <li>Assisted in IT and software-related tasks within a government organization.</li>
                                <li>Supported database handling and system-related operations.</li>
                                <li>Gained exposure to real-world workflows and data management systems.</li>
                                <li>Worked in a professional environment with structured processes and compliance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
