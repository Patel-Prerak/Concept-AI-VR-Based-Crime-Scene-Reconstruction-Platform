import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderOpen, Box, FileText, Settings, ShieldAlert, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = ({ isOpen }) => {
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: FolderOpen, label: 'Cases', path: '/cases' },
        { icon: Box, label: 'VR Lab', path: '/vrlab' },
        { icon: FileText, label: 'Reports', path: '/reports' },
        { icon: GraduationCap, label: 'Training', path: '/training' },
        { icon: ShieldAlert, label: 'Evidence', path: '/evidence' },
        { icon: Settings, label: 'Admin', path: '/admin' },
    ];

    return (
        <aside className={cn(
            "fixed left-0 top-0 z-40 h-screen bg-surface/90 border-r border-white/10 backdrop-blur-xl transition-all duration-300 flex flex-col",
            // Mobile: Slide in/out
            isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64",
            // Desktop: Collapsible
            "md:translate-x-0",
            isOpen ? "md:w-64" : "md:w-20"
        )}>
            <div className="flex items-center justify-center p-4 border-b border-white/10 h-16">
                {(isOpen) ? (
                    <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NexForensics</h1>
                ) : (
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent md:block hidden">NF</span>
                )}
            </div>

            <nav className="p-4 space-y-2 flex-1">
                {navItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex items-center gap-3 p-3 rounded-lg transition-all group",
                                isActive
                                    ? "bg-primary/20 text-primary border border-primary/20 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon size={22} className={cn(isActive && "animate-pulse")} />
                            {/* Label visibility: Always show on mobile (if sidebar is open), on Desktop only if open */}
                            <span className={cn("font-medium", !isOpen && "md:hidden")}>{item.label}</span>

                            {/* Tooltip for collapsed state (Desktop only) */}
                            {!isOpen && (
                                <div className="hidden md:block absolute left-full ml-4 px-2 py-1 bg-surface border border-white/10 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                    {item.label}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="absolute bottom-0 w-full p-4 border-t border-white/10 overflow-hidden">
                <div className={cn("flex items-center gap-3 transition-opacity duration-300", !isOpen ? "md:opacity-0" : "opacity-100")}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold flex-shrink-0">JD</div>
                    <div className="flex flex-col whitespace-nowrap">
                        <span className="text-sm font-bold text-white">John Doe</span>
                        <span className="text-xs text-gray-400">Sr. Investigator</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
