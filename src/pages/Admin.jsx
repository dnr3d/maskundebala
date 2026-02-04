import { useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ContentEditor from '../components/Admin/ContentEditor';
import ProjectManager from '../components/Admin/ProjectManager';
import InquiryList from '../components/Admin/InquiryList';
import Login from '../components/Admin/Login';
import ProjectEditor from '../components/Admin/ProjectEditor';
import { LayoutDashboard, FolderKanban, LogOut, Mail } from 'lucide-react';

import ErrorBoundary from '../components/UI/ErrorBoundary';

function Dashboard() {
    return (
        <ErrorBoundary>
            <div style={{ padding: 20 }}>
                <h1 style={{ color: '#111', marginBottom: 20 }}>Dashboard Overview</h1>
                <div style={{ display: 'grid', gap: 20 }}>
                    <InquiryList />
                    <ProjectManager />
                    <ContentEditor />
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default function AdminPanel() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check local storage on load
        const auth = localStorage.getItem('isAdmin');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleLogin = (email, password) => {
        const ADMIN_EMAIL = 'dbeksultan6@gmail.com';
        const ADMIN_PASS = 'Medinabexultan_0109';

        // Trim inputs to avoid whitespace errors
        const cleanEmail = email.trim();
        const cleanPass = password.trim();

        console.log('Attempting login with:', cleanEmail);

        if (cleanEmail === ADMIN_EMAIL && cleanPass === ADMIN_PASS) {
            localStorage.setItem('isAdmin', 'true');
            setIsAuthenticated(true);
        } else {
            alert('Invalid credentials');
            console.error('Login failed');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        setIsAuthenticated(false);
        navigate('/');
    };

    if (isLoading) return <div style={{ color: 'white', padding: 50 }}>Loading...</div>;

    if (!isAuthenticated) {
        return <Login onLogin={handleLogin} />;
    }

    // Hide sidebar on editor page to give full space
    const isEditor = location.pathname.includes('/project/');

    if (isEditor) {
        return (
            <ErrorBoundary>
                <Routes>
                    <Route path="/project/:id" element={<ProjectEditor />} />
                </Routes>
            </ErrorBoundary>
        );
    }

    return (
        <ErrorBoundary>
            <div className="admin-layout">
                <aside className="admin-sidebar">
                    <h2 className="brand">D/W <span className="mono-text">Admin</span></h2>
                    <nav>
                        <Link to="/admin" className={`admin-link ${location.pathname === '/admin' ? 'active' : ''}`}>
                            <LayoutDashboard size={18} /> Dashboard
                        </Link>
                        <Link to="/admin/inquiries" className={`admin-link ${location.pathname === '/admin/inquiries' ? 'active' : ''}`}>
                            <Mail size={18} /> Inquiries
                        </Link>
                        <button onClick={handleLogout} className="admin-link logout-btn">
                            <LogOut size={18} /> Logout
                        </button>
                        <Link to="/" className="admin-link">
                            Back to Site
                        </Link>
                    </nav>
                </aside>

                <main className="admin-content">
                    <Routes>
                        <Route path="/project/:id" element={<ProjectEditor />} />
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/inquiries" element={<InquiryList />} />
                    </Routes>
                </main>

                <style jsx="true">{`
            .admin-layout {
                display: flex;
                min-height: 100vh;
                background: #f8f9fa; /* Light Grey Background */
                color: #111; /* Dark Text */
            }

            .admin-sidebar {
                width: 250px;
                background: #ffffff; /* White Sidebar */
                border-right: 1px solid #e5e5e5;
                padding: 30px;
                display: flex;
                flex-direction: column;
                gap: 40px;
            }

            .brand { color: #000; margin-bottom: 20px; }
            .brand span { font-size: 0.8rem; color: #888; }

            .admin-link {
                display: flex;
                align-items: center;
                gap: 15px;
                color: #666; /* Grey links */
                text-decoration: none;
                padding: 10px;
                border-radius: 6px;
                transition: 0.2s;
                background: none;
                border: none;
                font-size: 1rem;
                cursor: pointer;
                width: 100%;
                text-align: left;
            }

            .admin-link:hover, .admin-link.active {
                background: #f0f0f0;
                color: #000;
            }
            
            .logout-btn {
                color: #ef4444;
            }
            .logout-btn:hover {
                background: #fee2e2;
                color: #dc2626;
            }

            .admin-content {
                flex: 1;
                overflow-y: auto;
                max-height: 100vh;
            }
        `}</style>
            </div>
        </ErrorBoundary>
    );
}
