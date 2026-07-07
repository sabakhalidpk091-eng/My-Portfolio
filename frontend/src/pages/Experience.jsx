import React from 'react';

export default function Experience() {
    return (
        <div className="page active">
            <div className="section">
                <p className="section-label">Career Journey</p>
                <h2 className="section-title">Work <span>Experience</span></h2>
                <p className="section-desc">Real-world experience gained through internships in tech and government sectors.</p>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <div className="timeline-header">
                                <div className="timeline-role">Web Developer Intern</div>
                                <div className="timeline-period">Dec 2024 – Jun 2025</div>
                            </div>
                            <div className="timeline-company">🏢 Osho Technology</div>
                            <ul className="timeline-list">
                                <li>Contributing to live web development projects using React and Django</li>
                                <li>Working on both frontend and backend tasks in a production environment</li>
                                <li>Enhancing debugging, code review, and real-world problem-solving skills</li>
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
                            <div className="timeline-company">🏛️ FBR – Federal Board of Revenue</div>
                            <ul className="timeline-list">
                                <li>Assisted in IT and software-related tasks within a government organization</li>
                                <li>Supported database handling and system-related operations</li>
                                <li>Gained exposure to real-world workflows and data management systems</li>
                                <li>Worked in a professional environment with structured processes and compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '60px' }}>
                    <p className="section-label">Achievements</p>
                    <h2 className="section-title" style={{ marginBottom: '32px' }}>Certifications &amp; <span>Training</span></h2>
                    <div className="certs-grid">
                        <div className="cert-card">
                            <div className="cert-icon">🏛️</div>
                            <div>
                                <div className="cert-name">FBR Internship Certificate</div>
                                <div className="cert-year">Federal Board of Revenue · 2024</div>
                            </div>
                        </div>
                        <div className="cert-card">
                            <div className="cert-icon">🎓</div>
                            <div>
                                <div className="cert-name">Web Development Training</div>
                                <div className="cert-year">NAVTTC Pakistan</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
