import React, { useState } from 'react';

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
                            <div className="contact-icon">✉️</div>
                            <div>
                                <div className="contact-lbl">Email Me</div>
                                <div className="contact-val">sabakhalidpk091@gmail.com</div>
                            </div>
                        </div>

                        <div className="contact-card" style={{ marginTop: '16px' }}>
                            <div className="contact-icon">💬</div>
                            <div>
                                <div className="contact-lbl">WhatsApp / Phone</div>
                                <div className="contact-val">03482195468</div>
                            </div>
                        </div>

                        <div className="avail-card" style={{ marginTop: '24px' }}>
                            <h4>Open for Freelance &amp; Remote Roles</h4>
                            <p>Looking for a full-stack developer who ships production-quality work and sweats the details? Let's talk.</p>
                            <div className="avail-tag">🟢 Available Now</div>
                        </div>
                    </div>

                    <div className="form-card">
                        <div className="form-head">✨ Direct Message</div>
                        {success && (
                            <div className="toast" style={{ marginBottom: '14px', position: 'static' }}>
                                ✅ Message sent! I'll get back to you soon.
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="f-field">
                                    <label>👤 Full Name</label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="f-field">
                                    <label>@ Email Address</label>
                                    <input type="email" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className="f-field">
                                <label>📄 Subject</label>
                                <input type="text" placeholder="Project Inquiry" required />
                            </div>
                            <div className="f-field">
                                <label>💬 Your Message</label>
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
