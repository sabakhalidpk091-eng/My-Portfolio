import React, { useState } from 'react';
import { FiMail, FiPhone, FiInfo, FiMessageSquare, FiUser, FiAtSign, FiTag, FiMessageCircle, FiCheckCircle, FiArrowUpRight, FiSmartphone, FiHeart } from 'react-icons/fi';

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
                <h1 style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Initiate Inquiry</h1>
            </div>

            <section>
                <div className="contact-grid">
                    <div>
                        <a href="mailto:sabakhalidpk091@gmail.com" className="contact-card" style={{ textDecoration: 'none', display: 'flex' }}>
                            <div className="contact-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FiMail size={16} />
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <div className="contact-lbl">Email Me</div>
                                <div className="contact-val" style={{ color: 'var(--text)' }}>sabakhalidpk091@gmail.com</div>
                            </div>
                            <div style={{ color: 'var(--dim)', display: 'flex', alignItems: 'center' }}>
                                <FiArrowUpRight size={18} />
                            </div>
                        </a>

                        <a href="https://wa.me/923482195468" target="_blank" rel="noreferrer" className="contact-card" style={{ marginTop: '16px', textDecoration: 'none', display: 'flex' }}>
                            <div className="contact-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FiPhone size={16} />
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <div className="contact-lbl">WhatsApp</div>
                                <div className="contact-val" style={{ color: 'var(--text)' }}>+92 348 2195468</div>
                            </div>
                            <div style={{ color: 'var(--dim)', display: 'flex', alignItems: 'center' }}>
                                <FiArrowUpRight size={18} />
                            </div>
                        </a>

                        <div className="avail-card" style={{ marginTop: '24px' }}>
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                                Open for Global Partnerships &amp; Remote Roles
                            </h4>
                            <p style={{ marginTop: '10px', fontSize: '0.86rem', color: 'var(--muted)', lineHeight: '1.7' }}>
                                Looking for a senior developer with strong data discipline and architectural vision? Let's connect.
                            </p>
                            <div className="avail-tag" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '18px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '6px 14px', borderRadius: '20px', width: 'fit-content' }}>
                                <FiSmartphone size={14} />
                                <span style={{ textTransform: 'uppercase', fontSize: '0.72rem', letterSpacing: '0.05em' }}>Available Now</span>
                            </div>
                        </div>

                        <div className="synergy-badge">
                            <FiHeart style={{ color: '#50c4df' }} /> Synergy
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
                            <button type="submit" className="send-btn" disabled={loading} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', fontWeight: '700' }}>
                                {loading ? 'Dispatching Message...' : 'DISPATCH MESSAGE'}
                                {!loading && <FiArrowUpRight size={16} />}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
