import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Layout = ({ children, fullWidth = false }) => {
    // Initialize sidebar state based on screen width
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

    return (
        <div className="min-h-screen bg-background text-white flex">
            <Sidebar isOpen={isSidebarOpen} />
            <div className={cn(
                "flex-1 transition-all duration-300 flex flex-col min-h-screen",
                // Desktop: Adjust margin based on sidebar state
                // Mobile: No margin (sidebar is overlay), content takes full width
                isSidebarOpen ? "md:ml-64" : "md:ml-20",
                "ml-0"
            )}>
                <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
                <main className={cn("flex-1 overflow-y-auto", !fullWidth && "p-4 md:p-6")}>
                    {children}
                </main>
            </div>

            {/* Mobile Overlay Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default Layout;
