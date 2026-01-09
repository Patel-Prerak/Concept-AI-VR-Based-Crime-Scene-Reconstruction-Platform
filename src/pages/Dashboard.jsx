import Layout from '../components/layout/Layout';
import { TrendingUp, Users, AlertCircle, Clock, FolderOpen } from 'lucide-react';
import { CASES } from '../lib/mockData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NewCaseWizard from '@/components/case/NewCaseWizard';

const StatCard = ({ title, value, sub, icon: Icon, color }) => (
    <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
        <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
            <Icon size={64} />
        </div>
        <div className="relative z-10">
            <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
            <p className="text-xs text-gray-500 font-mono">{sub}</p>
        </div>
    </div>
);

const Dashboard = () => {
    const [showWizard, setShowWizard] = useState(false);

    return (
        <Layout>
            <div className="space-y-8 fade-in">
                <div className="flex items-end justify-between">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Investigator Dashboard</h1>
                        <p className="text-gray-400 mt-1">Welcome back, Detective. System status: NORMAL.</p>
                    </div>
                    <button
                        onClick={() => setShowWizard(true)}
                        className="bg-primary hover:bg-primary/80 text-black font-bold py-2 px-4 rounded-lg transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    >
                        + New Case Upload
                    </button>
                </div>

                {showWizard && <NewCaseWizard onClose={() => setShowWizard(false)} />}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="Active Cases" value="12" sub="+2 from last week" icon={FolderOpen} color="text-blue-500" />
                    <StatCard title="Evidence Processed" value="1,284" sub="98% confidence rate" icon={TrendingUp} color="text-green-500" />
                    <StatCard title="Pending Review" value="5" sub="Urgent attention needed" icon={AlertCircle} color="text-red-500" />
                    <StatCard title="VR Sessions" value="48h" sub="This month" icon={Clock} color="text-purple-500" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <span className="w-2 h-6 bg-primary rounded-sm"></span>
                            Recent Cases
                        </h2>
                        <div className="grid gap-4">
                            {CASES.map(c => (
                                <Link key={c.id} to={`/cases/${c.id}`} className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-all cursor-pointer group">
                                    <div className={`w-16 h-16 rounded-lg ${c.thumbnail} flex items-center justify-center border border-white/5`}>
                                        <span className="text-xs font-mono opacity-50">IMG</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{c.title}</h3>
                                            <span className={`px-2 py-1 rounded text-xs border ${c.status === 'Active' ? 'border-primary/30 text-primary bg-primary/10' :
                                                c.status === 'Closed' ? 'border-gray-500/30 text-gray-400 bg-gray-500/10' :
                                                    'border-orange-500/30 text-orange-400 bg-orange-500/10'
                                                }`}>{c.status}</span>
                                        </div>
                                        <div className="flex items-center gap-4mt-1 text-sm text-gray-400">
                                            <span>{c.id}</span>
                                            <span>•</span>
                                            <span>{c.location}</span>
                                            <span>•</span>
                                            <span>{c.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <span className="w-2 h-6 bg-secondary rounded-sm"></span>
                            System Activity
                        </h2>
                        <div className="glass-panel p-6 rounded-xl space-y-6">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="flex gap-3 relative before:absolute before:left-[11px] before:top-8 before:bottom-[-24px] before:w-px before:bg-white/10 last:before:hidden">
                                    <div className="w-6 h-6 rounded-full bg-surface border border-primary/50 flex items-center justify-center shrink-0 z-10">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Evidence #492 analyzed</p>
                                        <p className="text-xs text-gray-500">2 minutes ago • AI Confidence 99.2%</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
