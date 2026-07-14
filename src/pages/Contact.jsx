import React, { useState } from 'react';
import { FiMail, FiPhone, FiInfo, FiMessageSquare, FiUser, FiAtSign, FiTag, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate sending
        setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            e.target.reset();
            setTimeout(() => setSuccess(false), 4000);
        }, 1200);
    };

    return (
        <div className="page">
            <div className="page-title">
                <h1>Start a Conversation</h1>
            </div>

            <section>
                <div className="contact-grid">
                    <div>
                        <div className="contact-card">
                            <div className="contact-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FiMail size={16} />
                            </div>
                            <div>
                                <div className="contact-lbl">Email Me</div>
                                <div className="contact-val">sabakhalidpk091@gmail.com</div>
                            </div>
                        </div>

                        <div className="contact-card" style={{ marginTop: '16px' }}>
                            <div className="contact-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FiPhone size={16} />
                            </div>
                            <div>
                                <div className="contact-lbl">WhatsApp / Phone</div>
                                <div className="contact-val">03482195468</div>
                            </div>
                        </div>

                        <div className="avail-card" style={{ marginTop: '24px' }}>
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FiInfo size={16} style={{ color: 'var(--cyan)' }} />
                                Open for Freelance &amp; Remote Roles
                            </h4>
                            <p>Looking for a full-stack developer who ships production-quality work and sweats the details? Let's talk.</p>
                            <div className="avail-tag" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }}></span>
                                Available Now
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <div className="form-head" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FiMessageSquare size={14} /> Direct Message
                        </div>
                        {success && (
                            <div className="toast" style={{ marginBottom: '14px', position: 'static', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FiCheckCircle size={15} style={{ color: 'var(--green)' }} />
                                Message sent! I'll get back to you soon.
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="f-field">
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <FiUser size={13} /> Full Name
                                    </label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="f-field">
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <FiAtSign size={13} /> Email Address
                                    </label>
                                    <input type="email" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className="f-field">
                                <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <FiTag size={13} /> Subject
                                </label>
                                <input type="text" placeholder="Project Inquiry" required />
                            </div>
                            <div className="f-field">
                                <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <FiMessageCircle size={13} /> Your Message
                                </label>
                                <textarea placeholder="Tell me about your vision..." required></textarea>
                            </div>
                            <button type="submit" className="send-btn" disabled={loading}>
                                {loading ? 'Dispatching Message...' : 'Dispatch Message →'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
