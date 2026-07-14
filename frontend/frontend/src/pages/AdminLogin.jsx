import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldAlert, KeyRound, Eye, EyeOff } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:8000');

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
        <div className="min-h-screen bg-[#080b14] flex items-center justify-center px-4 relative overflow-hidden font-sans">
            {/* Background Glow Blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ec4899]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-md p-8 md:p-10 rounded-2xl bg-[#0d1120]/80 backdrop-blur-md border border-[#1e2d45] shadow-2xl relative z-10">
                {/* Top glow border stripe */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-[#ec4899] rounded-t-2xl" />

                <div className="text-center mb-8">
                    {/* Purple gradient lock icon */}
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] flex items-center justify-center text-white mb-5 shadow-lg shadow-purple-500/25 transform hover:scale-105 transition-transform duration-300">
                        <Lock className="w-7 h-7" />
                    </div>

                    <h1 className="font-outfit font-extrabold text-3xl text-white tracking-tight">
                        Admin Portal
                    </h1>
                    <p className="text-[#94a3b8] text-sm mt-2">
                        Restricted zone. Authentication credentials required.
                    </p>
                </div>

                {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm flex gap-3 items-start mb-6 animate-fade-in">
                        <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="admin-pass" className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">
                            Security Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="admin-pass"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter passphrase"
                                className="w-full pl-11 pr-11 py-3.5 rounded-xl border border-[#1e2d45] bg-[#131929]/70 text-white placeholder-[#475569] focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all text-sm"
                                disabled={loading}
                            />
                            <KeyRound className="w-5 h-5 text-[#475569] absolute left-3.5 top-1/2 -translate-y-1/2" />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                                disabled={loading}
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        id="admin-login-submit"
                        className="w-full py-3.5 px-4 rounded-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] hover:from-[#7c3aed] hover:to-[#db2777] text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-pink-500/10 hover:shadow-purple-500/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                <span>Verifying Access...</span>
                            </>
                        ) : (
                            <span>Access Dashboard</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
