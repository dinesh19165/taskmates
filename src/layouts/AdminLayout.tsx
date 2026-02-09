import { Outlet, Link, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Settings, MessageSquare, LogOut } from 'lucide-react'
import Logo from '../components/Logo'

const AdminLayout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-deep text-white flex flex-col shadow-2xl z-20">
                <div className="p-6 border-b border-white/5 bg-black/20">
                    <Logo variant="light" className="scale-90 origin-left" />
                </div>
                <nav className="flex-grow p-4 space-y-2 mt-4">
                    <Link to="/admin/dashboard" className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-all group">
                        <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
                            <LayoutDashboard size={18} />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-[10px]">Dashboard</span>
                    </Link>
                    <Link to="/admin/services" className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-all group">
                        <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
                            <Settings size={18} />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-[10px]">Manage Services</span>
                    </Link>
                    <Link to="/admin/inquiries" className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-all group">
                        <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
                            <MessageSquare size={18} />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-[10px]">Inquiries</span>
                    </Link>
                </nav>
                <button
                    onClick={handleLogout}
                    className="p-6 border-t border-white/5 flex items-center gap-3 hover:bg-red-500/10 hover:text-red-500 transition-all text-xs font-bold uppercase tracking-widest bg-black/10"
                >
                    <LogOut size={16} />
                    System Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-8">
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
