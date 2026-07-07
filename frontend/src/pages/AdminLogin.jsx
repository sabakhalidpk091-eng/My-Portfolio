import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldAlert, KeyRound } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // If token exists, direct redirect to Dashboard
        const token = localStorage.getItem('admin_token');
        if (token) {
            navigate('/admin/dashboard', { replace: true });
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch(`${API_URL}/api/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            if (!res.ok) {
                if (res.status === 401) {
                    throw new Error('Access denied. Incorrect security password entered.');
                }
                throw new Error(`Authentication server returned error: ${res.status}`);
            }

            const data = await res.json();
            if (data.token) {
                localStorage.setItem('admin_token', data.token);
                navigate('/admin/dashboard', { replace: true });
            } else {
                throw new Error('Server response was missing security token validation.');
            }
        } catch (err) {
            console.error("Login verification failed:", err);
            setError(err.message || 'Connecting to auth pipeline failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 pt-20 select-none">
            <div className="w-full max-w-sm p-6 md:p-8 rounded-2xl glass border border-slate-750/70 shadow-2xl relative">

                {/* Decorative Top Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                <div className="text-center mb-8">
                    <span className="inline-flex p-3 rounded-full bg-purple-500/10 text-purple-400 mb-4 border border-purple-500/20">
                        <Lock className="w-6 h-6" />
                    </span>
                    <h1 className="font-outfit font-extrabold text-2xl text-white">
                        Admin Auth Portal
                    </h1>
                    <p className="text-slate-450 text-xs mt-1">
                        Access credentials restricted to portfolio administrators.
                    </p>
                </div>

                {error && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-350 text-xs flex gap-2.5 items-start mb-6">
                        <ShieldAlert className="w-4 h-4 text-rose-455 flex-shrink-0 mt-0.5" />
                        <p className="leading-tight">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="admin-pass" className="block text-[10px] font-semibold text-slate-350 tracking-wider uppercase mb-2">
                            Secret Passphrase / Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="admin-pass"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter admin password"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-750 bg-slate-800/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                                disabled={loading}
                            />
                            <KeyRound className="w-4.5 h-4.5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <button
                        type="submit"
                        id="admin-login-submit"
                        className="w-full py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-purple-650 to-indigo-650 hover:from-purple-550 hover:to-indigo-550 text-white flex items-center justify-center gap-1.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Unlocking...
                            </>
                        ) : (
                            'Verify Password'
                        )}
                    </button>
                </form>

            </div>
        </div>
    );
}
