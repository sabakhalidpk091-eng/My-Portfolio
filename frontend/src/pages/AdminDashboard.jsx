import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Plus, Edit, Trash2, LogOut, CheckCircle,
    AlertTriangle, X, Code, Link2, FolderGit2
} from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:8000');

export default function AdminDashboard() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Toast Notification State
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    // Modals State
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null); // null if adding, object if editing
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image_url: '',
        github_link: '',
        demo_link: '',
        tech_stack: ''
    });

    const [deleteConfirmId, setDeleteConfirmId] = useState(null);
    const navigate = useNavigate();

    const triggerToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
        const timer = setTimeout(() => {
            setToast(prev => ({ ...prev, show: false }));
        }, 4000);
        return () => clearTimeout(timer);
    };

    const getToken = () => {
        return localStorage.getItem('admin_token');
    };

    const logout = () => {
        localStorage.removeItem('admin_token');
        navigate('/admin', { replace: true });
    };

    const fetchProjects = async () => {
        setLoading(true);
        const token = getToken();

        if (!token) {
            navigate('/admin', { replace: true });
            return;
        }

        try {
            const res = await fetch(`${API_URL}/api/admin/projects`, {
                headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' }
            });

            if (res.status === 401) {
                logout();
                return;
            }

            if (!res.ok) throw new Error(`Failed to load projects. Status: ${res.status}`);

            const data = await res.json();
            setProjects(data);
        } catch (err) {
            console.error(err);
            triggerToast('Unable to connect to database. Ensure backend services are running.', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const openAddModal = () => {
        setCurrentProject(null);
        setFormData({ title: '', description: '', image_url: '', github_link: '', demo_link: '', tech_stack: '' });
        setModalOpen(true);
    };

    const openEditModal = (proj) => {
        setCurrentProject(proj);
        let techString = '';
        if (Array.isArray(proj.tech_stack)) {
            techString = proj.tech_stack.join(', ');
        } else if (typeof proj.tech_stack === 'string') {
            techString = proj.tech_stack;
        }
        setFormData({
            title: proj.title || '',
            description: proj.description || '',
            image_url: proj.image_url || '',
            github_link: proj.github_link || '',
            demo_link: proj.demo_link || '',
            tech_stack: techString
        });
        setModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();

        if (!token) {
            logout();
            return;
        }

        const techArray = formData.tech_stack.split(',').map(tag => tag.trim()).filter(Boolean);
        const payload = { ...formData, tech_stack: techArray };
        const isEditMode = currentProject !== null;
        const url = isEditMode ? `${API_URL}/api/admin/projects/${currentProject.id}` : `${API_URL}/api/admin/projects`;
        const method = isEditMode ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(payload)
            });

            if (res.status === 401) {
                logout();
                return;
            }

            if (!res.ok) throw new Error(`Failed to save project. Server code: ${res.status}`);

            triggerToast(isEditMode ? 'Project configurations successfully updated.' : 'New portfolio project successfully added.', 'success');
            setModalOpen(false);
            setFormData({ title: '', description: '', image_url: '', github_link: '', demo_link: '', tech_stack: '' });
            fetchProjects();
        } catch (err) {
            console.error(err);
            triggerToast(err.message || 'Error occurred saving project data.', 'error');
        }
    };

    const handleDelete = async (id) => {
        const token = getToken();
        if (!token) {
            logout();
            return;
        }

        try {
            const res = await fetch(`${API_URL}/api/admin/projects/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (res.status === 401) {
                logout();
                return;
            }

            if (!res.ok) throw new Error(`Failed to delete record. Server status: ${res.status}`);

            triggerToast('Project successfully deleted from database.', 'success');
            fetchProjects();
        } catch (err) {
            console.error(err);
            triggerToast(err.message || 'Error processing delete command.', 'error');
        } finally {
            setDeleteConfirmId(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#080b14] text-white flex flex-col font-sans relative">
            <header className="w-full bg-[#0d1120]/80 backdrop-blur-md border-b border-[#1e2d45] sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
                <span className="font-outfit font-extrabold text-xl text-[#8b5cf6] tracking-wide">SABA.DEV Admin</span>
                <button onClick={logout} className="px-4 py-2 rounded-xl border border-[#1e2d45] hover:border-red-500/50 bg-[#131929] hover:bg-red-500/10 text-[#94a3b8] hover:text-red-400 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer">
                    <LogOut className="w-4 h-4" /> Logout
                </button>
            </header>

            <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 mt-2">
                    <div className="flex items-center gap-4 bg-[#0d1120]/90 p-5 rounded-2xl border border-[#1e2d45] shadow-lg min-w-[200px]">
                        <div className="p-3 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-xl">
                            <FolderGit2 className="w-7 h-7" />
                        </div>
                        <div>
                            <p className="text-xs text-[#94a3b8] font-bold uppercase tracking-wider">Total Projects</p>
                            <h2 className="text-2xl font-extrabold font-outfit mt-0.5 text-white">{loading ? '...' : projects.length}</h2>
                        </div>
                    </div>
                    <button onClick={openAddModal} className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] hover:from-[#7c3aed] hover:to-[#db2777] text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-purple-500/25 hover:-translate-y-0.5 cursor-pointer ml-auto sm:ml-0">
                        <Plus className="w-4 h-4" /> Add New Project
                    </button>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-32">
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 rounded-full border-4 border-[#8b5cf6]/10"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-t-[#8b5cf6] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                        </div>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-20 bg-[#0d1120] rounded-2xl border border-[#1e2d45] max-w-lg mx-auto">
                        <FolderGit2 className="w-12 h-12 text-[#475569] mx-auto mb-4" />
                        <p className="text-[#94a3b8] text-sm mb-6">No projects registered in the database grid.</p>
                        <button onClick={openAddModal} className="text-xs font-semibold px-5 py-2.5 bg-[#8b5cf6]/10 text-[#a78bfa] hover:bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 rounded-xl transition-all cursor-pointer">
                            Create First Project
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-[#0d1120] border border-[#1e2d45] rounded-2xl overflow-hidden hover:border-[#8b5cf6]/50 transition-all duration-300 shadow-xl flex flex-col group hover:-translate-y-1">
                                <div className="w-full h-48 bg-[#131929] overflow-hidden relative border-b border-[#1e2d45]">
                                    {project.image_url ? (
                                        <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600'; }} />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-xs text-[#475569] gap-2">
                                            <FolderGit2 className="w-8 h-8" />
                                            <span>No Image Provided</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <h3 className="font-extrabold text-lg text-white group-hover:text-[#a78bfa] transition-colors line-clamp-1 mb-2">{project.title}</h3>
                                    <p className="text-[#94a3b8] text-xs leading-relaxed line-clamp-3 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                                        {(Array.isArray(project.tech_stack) ? project.tech_stack : typeof project.tech_stack === 'string' ? project.tech_stack.split(',') : []).map((tag, idx) => (
                                            <span key={idx} className="px-2.5 py-0.5 rounded bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[10px] text-[#a78bfa] font-semibold whitespace-nowrap">{tag.trim()}</span>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-[#1e2d45]">
                                        {project.github_link ? (
                                            <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-lg bg-[#131929] hover:bg-[#1e2d45] text-xs text-[#94a3b8] hover:text-white border border-[#1e2d45] flex items-center justify-center gap-1.5 transition-all text-center">
                                                <Code className="w-3.5 h-3.5" /> Repository
                                            </a>
                                        ) : (
                                            <span className="py-2 px-3 rounded-lg bg-[#131929]/50 text-xs text-[#475569] border border-[#1e2d45]/50 flex items-center justify-center gap-1.5 select-none">No GitHub</span>
                                        )}
                                        {project.demo_link ? (
                                            <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-lg bg-[#131929] hover:bg-[#1e2d45] text-xs text-[#94a3b8] hover:text-white border border-[#1e2d45] flex items-center justify-center gap-1.5 transition-all text-center">
                                                <Link2 className="w-3.5 h-3.5" /> Live Demo
                                            </a>
                                        ) : (
                                            <span className="py-2 px-3 rounded-lg bg-[#131929]/50 text-xs text-[#475569] border border-[#1e2d45]/50 flex items-center justify-center gap-1.5 select-none">No Demo</span>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-2 pt-3 border-t border-[#1e2d45]/60">
                                        <button onClick={() => openEditModal(project)} className="py-2.5 px-3 rounded-lg bg-[#2563eb]/10 hover:bg-[#2563eb] border border-[#2563eb]/20 text-[#60a5fa] hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer">
                                            <Edit className="w-3.5 h-3.5" /> Edit
                                        </button>
                                        <button onClick={() => setDeleteConfirmId(project.id)} className="py-2.5 px-3 rounded-lg bg-[#dc2626]/10 hover:bg-[#dc2626] border border-[#dc2626]/20 text-[#f87171] hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer">
                                            <Trash2 className="w-3.5 h-3.5" /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                    <div className="w-full max-w-2xl p-6 md:p-8 rounded-2xl bg-[#0d1120] border border-[#1e2d45] shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button onClick={() => setModalOpen(false)} className="p-2 rounded-lg bg-[#131929] hover:bg-[#1e2d45] text-[#94a3b8] hover:text-white transition-colors absolute top-4 right-4 cursor-pointer">
                            <X className="w-4 h-4" />
                        </button>
                        <h2 className="font-outfit font-extrabold text-2xl text-white mb-6 pr-8">{currentProject ? 'Edit Project Configs' : 'Add New Project'}</h2>
                        <form onSubmit={handleFormSubmit} className="space-y-5">
                            <div>
                                <label className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Project Title *</label>
                                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required placeholder="Enter Project Title" className="w-full px-4 py-3 rounded-xl border border-[#1e2d45] bg-[#131929] text-white placeholder-[#475569] focus:outline-none focus:border-[#8b5cf6] text-sm transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Description *</label>
                                <textarea name="description" value={formData.description} onChange={handleInputChange} required rows="4" placeholder="Explain your project features and design details..." className="w-full px-4 py-3 rounded-xl border border-[#1e2d45] bg-[#131929] text-white placeholder-[#475569] focus:outline-none focus:border-[#8b5cf6] text-sm resize-none transition-all" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Image URL Address</label>
                                    <input type="url" name="image_url" value={formData.image_url} onChange={handleInputChange} placeholder="https://images.unsplash.com/..." className="w-full px-4 py-3 rounded-xl border border-[#1e2d45] bg-[#131929] text-white placeholder-[#475569] focus:outline-none focus:border-[#8b5cf6] text-sm transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Tech Stack (comma separated) *</label>
                                    <input type="text" name="tech_stack" value={formData.tech_stack} onChange={handleInputChange} required placeholder="React, FastAPI, Supabase" className="w-full px-4 py-3 rounded-xl border border-[#1e2d45] bg-[#131929] text-white placeholder-[#475569] focus:outline-none focus:border-[#8b5cf6] text-sm transition-all" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">GitHub Link (optional)</label>
                                    <input type="url" name="github_link" value={formData.github_link} onChange={handleInputChange} placeholder="https://github.com/..." className="w-full px-4 py-3 rounded-xl border border-[#1e2d45] bg-[#131929] text-white placeholder-[#475569] focus:outline-none focus:border-[#8b5cf6] text-sm transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Demo Link (optional)</label>
                                    <input type="url" name="demo_link" value={formData.demo_link} onChange={handleInputChange} placeholder="https://..." className="w-full px-4 py-3 rounded-xl border border-[#1e2d45] bg-[#131929] text-white placeholder-[#475569] focus:outline-none focus:border-[#8b5cf6] text-sm transition-all" />
                                </div>
                            </div>
                            <div className="pt-4 border-t border-[#1e2d45] flex justify-end gap-3">
                                <button type="button" onClick={() => setModalOpen(false)} className="px-5 py-3 rounded-xl border border-[#1e2d45] hover:border-white/40 bg-transparent text-[#94a3b8] hover:text-white text-xs font-bold transition-all cursor-pointer">Cancel</button>
                                <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] hover:from-[#7c3aed] hover:to-[#db2777] text-white font-bold text-xs transition-colors shadow-md shadow-purple-500/20 cursor-pointer">{currentProject ? 'Save Changes' : 'Add Project'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {deleteConfirmId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                    <div className="w-full max-w-md p-6 rounded-2xl bg-[#0d1120] border border-[#1e2d45] shadow-2xl relative">
                        <h3 className="font-outfit font-extrabold text-xl text-white mb-3">Delete Project</h3>
                        <p className="text-[#94a3b8] text-sm mb-6">Are you sure you want to delete?</p>
                        <div className="flex justify-end gap-3">
                            <button onClick={() => setDeleteConfirmId(null)} className="px-5 py-2.5 rounded-xl border border-[#1e2d45] hover:border-white/30 bg-transparent text-[#94a3b8] hover:text-white text-xs font-bold transition-all cursor-pointer">Cancel</button>
                            <button onClick={() => handleDelete(deleteConfirmId)} className="px-5 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs transition-all shadow-md shadow-red-950/20 cursor-pointer">Confirm</button>
                        </div>
                    </div>
                </div>
            )}

            {toast.show && (
                <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl border shadow-2xl transition-all duration-300 ${toast.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200 shadow-emerald-950/10' : 'bg-red-500/10 border-red-500/25 text-red-200 shadow-red-950/10'}`}>
                    {toast.type === 'success' ? <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" /> : <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />}
                    <span className="text-xs font-bold">{toast.message}</span>
                    <button onClick={() => setToast(prev => ({ ...prev, show: false }))} className="ml-3 text-[#94a3b8] hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
                </div>
            )}
        </div>
    );
}
