import { Bell, Search, PanelLeft, Menu, X, Home, Workflow, Cpu, Shield, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ onToggleSidebar, isSidebarOpen }) => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/workflow', label: 'Process', icon: Workflow },
        { path: '/technology', label: 'Tech', icon: Cpu },
        { path: '/compliance', label: 'Compliance', icon: Shield },
        { path: '/contact', label: 'Contact', icon: Phone },
    ];

    return (
        <header className="h-16 border-b border-white/10 bg-background/50 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors"
                >
                    <PanelLeft size={20} className={!isSidebarOpen ? "rotate-180" : ""} />
                </button>

                {/* Desktop Search */}
                <div className="hidden md:flex items-center gap-4 w-96">
                    <div className="relative w-full group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-primary transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search cases, evidence ID, or tags..."
                            className="w-full bg-surface/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                {navLinks.map(link => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`hover:text-white transition-colors ${location.pathname === link.path ? 'text-primary' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-400 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <button className="relative p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:block">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-ping"></span>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
                </button>
                <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
                <span className="text-xs font-mono text-primary/80 hidden sm:block">SYS: ONLINE</span>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-5">
                    {/* Mobile Search */}
                    <div className="relative w-full mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-surface/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50"
                        />
                    </div>
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors ${location.pathname === link.path ? 'text-primary bg-primary/10' : 'text-gray-300'}`}
                        >
                            <link.icon size={18} />
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-500 font-mono mt-2">
                        <span>SYSTEM STATUS:</span>
                        <span className="text-success">OPERATIONAL</span>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
