import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Plus, Edit, Trash2, LogOut, CheckCircle,
    AlertTriangle, RefreshCw, X, Eye, Code, Link2
} from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:8000');

export default function AdminDashboard() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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

    const getToken = () => {
        return localStorage.getItem('admin_token');
    };

    const logout = () => {
        localStorage.removeItem('admin_token');
        navigate('/admin', { replace: true });
    };

    const fetchProjects = async () => {
        setLoading(true);
        setError('');
        const token = getToken();

        if (!token) {
            navigate('/admin', { replace: true });
            return;
        }

        try {
            const res = await fetch(`${API_URL}/api/admin/projects`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            });

            if (res.status === 401) {
                logout();
                return;
            }

            if (!res.ok) {
                throw new Error(`Failed to load admin project data. Status code: ${res.status}`);
            }

            const data = await res.json();
            setProjects(data);
        } catch (err) {
            console.error(err);
            setError('Unable to link with portfolio database. Verify backend services are active.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const openAddModal = () => {
        setCurrentProject(null);
        setFormData({
            title: '',
            description: '',
            image_url: '',
            github_link: '',
            demo_link: '',
            tech_stack: ''
        });
        setModalOpen(true);
    };

    const openEditModal = (proj) => {
        setCurrentProject(proj);

        // Parse tech_stack array back to comma-separated string for editing
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
        setError('');
        setSuccess('');
        const token = getToken();

        if (!token) {
            logout();
            return;
        }

        // Convert comma-separated string into list of trimmed strings
        const techArray = formData.tech_stack
            .split(',')
            .map(tag => tag.trim())
            .filter(Boolean);

        const payload = {
            title: formData.title,
            description: formData.description,
            image_url: formData.image_url,
            github_link: formData.github_link || '',
            demo_link: formData.demo_link || '',
            tech_stack: techArray
        };

        const isEditMode = currentProject !== null;
        const url = isEditMode
            ? `${API_URL}/api/admin/projects/${currentProject.id}`
            : `${API_URL}/api/admin/projects`;

        const method = isEditMode ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (res.status === 401) {
                logout();
                return;
            }

            if (!res.ok) {
                throw new Error(`Failed to save project. Server returned side status: ${res.status}`);
            }

            setSuccess(isEditMode ? 'Project configurations updated.' : 'New portfolio project logged.');
            setModalOpen(false);
            fetchProjects();
        } catch (err) {
            console.error(err);
            setError(err.message || 'Error occurred saving project data.');
        }
    };

    const handleDelete = async (id) => {
        setError('');
        setSuccess('');
        const token = getToken();

        if (!token) {
            logout();
            return;
        }

        try {
            const res = await fetch(`${API_URL}/api/admin/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.status === 401) {
                logout();
                return;
            }

            if (!res.ok) {
                throw new Error(`Failed to delete record. Server returned: ${res.status}`);
            }

            setSuccess('Project successfully deleted from database.');
            fetchProjects();
        } catch (err) {
            console.error(err);
            setError(err.message || 'Error processing delete command.');
        } finally {
            setDeleteConfirmId(null);
        }
    };

    return (
        <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto min-h-screen">

            {/* Header Panel */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-805">
                <div>
                    <h1 className="font-outfit font-extrabold text-3xl text-white">
                        Admin Dashboard
                    </h1>
                    <p className="text-slate-400 text-xs mt-1">
                        Maintain database records for active portfolio projects.
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                    <button
                        onClick={openAddModal}
                        id="admin-add-project-btn"
                        className="px-4 py-2.5 rounded-xl bg-purple-650 hover:bg-purple-550 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-purple-950/20"
                    >
                        <Plus className="w-4 h-4" /> Add Project
                    </button>

                    <button
                        onClick={logout}
                        id="admin-logout-btn"
                        className="px-4 py-2.5 rounded-xl border border-slate-750 hover:border-slate-600 bg-slate-800/40 text-slate-300 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all"
                    >
                        <LogOut className="w-4 h-4" /> Exit
                    </button>
                </div>
            </div>

            {/* Notifications bar */}
            {success && (
                <div className="p-3 text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-350 rounded-xl mb-6 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-450" />
                    {success}
                </div>
            )}

            {error && (
                <div className="p-3 text-xs bg-rose-500/10 border border-rose-500/20 text-rose-350 rounded-xl mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-450" />
                    {error}
                </div>
            )}

            {/* Projects Table */}
            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500" />
                </div>
            ) : projects.length === 0 ? (
                <div className="text-center py-16 glass rounded-2xl">
                    <p className="text-slate-450 text-sm mb-4">No projects registered in the database grid.</p>
                    <button
                        onClick={openAddModal}
                        className="text-xs font-semibold px-4 py-2 bg-purple-600/20 text-purple-400 hover:bg-purple-605/30 border border-purple-500/30 rounded-lg transition-colors"
                    >
                        Create first project entry
                    </button>
                </div>
            ) : (
                <div className="w-full overflow-hidden rounded-2xl glass border border-slate-750">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-750 bg-slate-900/80 text-xs font-bold text-slate-400 uppercase">
                                    <th className="py-4 px-5">Preview / Card</th>
                                    <th className="py-4 px-5">Details</th>
                                    <th className="py-4 px-5">Stack</th>
                                    <th className="py-4 px-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-805/60 text-sm">
                                {projects.map((project) => (
                                    <tr key={project.id} className="hover:bg-slate-800/10 transition-colors">

                                        {/* Art image container */}
                                        <td className="py-4 px-5 whitespace-nowrap">
                                            <div className="w-24 h-16 rounded-xl bg-slate-950 overflow-hidden relative border border-slate-800">
                                                {project.image_url ? (
                                                    <img
                                                        src={project.image_url}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=150';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[10px] text-slate-650">No Img</div>
                                                )}
                                            </div>
                                        </td>

                                        {/* Metadata text */}
                                        <td className="py-4 px-5 max-w-sm">
                                            <h4 className="font-semibold text-white truncate">{project.title}</h4>
                                            <p className="text-xs text-slate-450 mt-1 line-clamp-2 leading-relaxed">{project.description}</p>
                                            <div className="flex gap-3 mt-2">
                                                {project.github_link && (
                                                    <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-purple-400 hover:underline flex items-center gap-0.5" title="Git Repo">
                                                        <Code className="w-3 h-3" /> GitHub
                                                    </a>
                                                )}
                                                {project.demo_link && (
                                                    <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-sky-400 hover:underline flex items-center gap-0.5" title="Live demo link">
                                                        <Link2 className="w-3 h-3" /> Live
                                                    </a>
                                                )}
                                            </div>
                                        </td>

                                        {/* Stack labels */}
                                        <td className="py-4 px-5">
                                            <div className="flex flex-wrap gap-1 max-w-[200px]">
                                                {(Array.isArray(project.tech_stack)
                                                    ? project.tech_stack
                                                    : typeof project.tech_stack === 'string'
                                                        ? project.tech_stack.split(',')
                                                        : []
                                                ).map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[9px] text-slate-350 whitespace-nowrap"
                                                    >
                                                        {tag.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>

                                        {/* Options tools */}
                                        <td className="py-4 px-5 whitespace-nowrap text-right text-xs">
                                            {deleteConfirmId === project.id ? (
                                                <div className="flex items-center gap-1.5 justify-end">
                                                    <button
                                                        onClick={() => handleDelete(project.id)}
                                                        className="px-2.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-[10px] uppercase shadow-md shadow-rose-950/20"
                                                    >
                                                        Confirm Delete
                                                    </button>
                                                    <button
                                                        onClick={() => setDeleteConfirmId(null)}
                                                        className="px-2.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold text-[10px] uppercase"
                                                        title="Cancel delete verification"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1.5 justify-end">
                                                    <button
                                                        onClick={() => openEditModal(project)}
                                                        className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all"
                                                        title="Edit Project Configuration"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => setDeleteConfirmId(project.id)}
                                                        className="p-2 rounded-lg bg-slate-800/40 text-slate-400 hover:text-rose-400 hover:bg-rose-950/25 border border-slate-700/60 hover:border-rose-900/30 transition-all"
                                                        title="Delete Project Entry"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            )}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Add / Edit Drawer Panel (Glass Overlay Modal) */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm select-none">
                    <div className="w-full max-w-xl p-6 md:p-8 rounded-2xl glass border border-slate-750 shadow-2xl relative max-h-[90vh] overflow-y-auto">

                        <button
                            onClick={() => setModalOpen(false)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors absolute top-4 right-4"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <h2 className="font-outfit font-extrabold text-2xl text-white mb-6 pr-8">
                            {currentProject ? 'Edit Project Entry' : 'Register New Project'}
                        </h2>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-350 uppercase mb-1.5">Project Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g. Creative Portfolio"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-350 uppercase mb-1.5">Short Summary / Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    rows="3"
                                    placeholder="Summarize the core functionality of the project..."
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-350 uppercase mb-1.5">Image URL Address</label>
                                    <input
                                        type="url"
                                        name="image_url"
                                        value={formData.image_url}
                                        onChange={handleInputChange}
                                        placeholder="https://images.unsplash.com/..."
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-350 uppercase mb-1.5">Tech Stack (comma separated)</label>
                                    <input
                                        type="text"
                                        name="tech_stack"
                                        value={formData.tech_stack}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="React, FastAPI, PostgreSQL"
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-350 uppercase mb-1.5">GitHub Repository Link (optional)</label>
                                    <input
                                        type="url"
                                        name="github_link"
                                        value={formData.github_link}
                                        onChange={handleInputChange}
                                        placeholder="https://github.com/..."
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-350 uppercase mb-1.5">Deployment Live Demo URL (optional)</label>
                                    <input
                                        type="url"
                                        name="demo_link"
                                        value={formData.demo_link}
                                        onChange={handleInputChange}
                                        placeholder="https://example.com"
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 rounded-xl bg-purple-650 hover:bg-purple-550 text-white font-bold text-xs transition-colors shadow-md shadow-purple-950/20"
                                >
                                    {currentProject ? 'Save Changes' : 'Create Record'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}

        </div>
    );
}
