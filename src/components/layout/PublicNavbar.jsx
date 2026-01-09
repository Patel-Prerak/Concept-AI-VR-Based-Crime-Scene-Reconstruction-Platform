import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const PublicNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    NexForensics
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link to="/" className="hover:text-white transition-colors">Features</Link>
                    <Link to="/technology" className={`hover:text-white transition-colors ${location.pathname === '/technology' ? 'text-primary' : ''}`}>Technology</Link>
                    <Link to="/compliance" className={`hover:text-white transition-colors ${location.pathname === '/compliance' ? 'text-primary' : ''}`}>Compliance</Link>
                    <Link to="/contact" className={`hover:text-white transition-colors ${location.pathname === '/contact' ? 'text-primary' : ''}`}>Contact</Link>
                </div>

                <div className="hidden md:block">
                    <Link to="/dashboard" className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-colors border border-white/10">
                        Access Portal
                    </Link>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-surface border-b border-white/10 p-4 space-y-4">
                    <Link to="/" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Features</Link>
                    <Link to="/technology" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Technology</Link>
                    <Link to="/compliance" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Compliance</Link>
                    <Link to="/contact" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link to="/dashboard" className="block text-primary font-bold" onClick={() => setIsMenuOpen(false)}>Access Portal</Link>
                </div>
            )}
        </nav>
    );
};

export default PublicNavbar;
