import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Why Choose Us', path: '/why-choose-us' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className="bg-white border-b-2 border-accent/20 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <Logo />

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 font-semibold text-dark uppercase tracking-wider text-sm">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block">
                    <button className="bg-dark text-white px-6 py-2 rounded-md font-bold hover:bg-primary transition-all uppercase tracking-widest text-xs">
                        Admin Portal
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-dark p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
                    <div className="px-4 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-dark font-black uppercase tracking-widest text-sm py-3 border-b border-gray-50 flex justify-between items-center group"
                            >
                                {link.name}
                                <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                        ))}
                        <Link
                            to="/admin/login"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 bg-dark text-white text-center py-4 rounded-lg font-black uppercase tracking-widest text-xs"
                        >
                            Admin Portal
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
