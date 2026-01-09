import React from 'react'; // Fix missing import if needed
import PublicNavbar from '../components/layout/PublicNavbar';
import { Shield, BookOpen, Users, Lock, ChevronRight } from 'lucide-react';
import { CASES } from '@/lib/mockData';
import Layout from '../components/layout/Layout';


export const LegalPage = () => (
    <Layout>
        <div className="max-w-4xl mx-auto space-y-8 fade-in">
            <div className="border-b border-white/10 pb-6">
                <h1 className="text-3xl font-bold text-white mb-2">Legal Compliance & Admissibility</h1>
                <p className="text-gray-400">Governance, Standards, and Forensic Integrity Protocols.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-panel p-6 rounded-xl">
                    <Shield className="text-primary mb-4" size={32} />
                    <h2 className="text-xl font-bold mb-2">ISO/IEC 27037:2012</h2>
                    <p className="text-gray-400 text-sm">
                        Our digital evidence handling procedures adhere strictly to ISO guidelines for identification, collection, acquisition, and preservation of digital evidence.
                    </p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <Lock className="text-secondary mb-4" size={32} />
                    <h2 className="text-xl font-bold mb-2">Blockchain Ledgers</h2>
                    <p className="text-gray-400 text-sm">
                        Every pixel change, annotation, and report generation is hashed (SHA-256) and notarized on a private permissioned ledger to prevent tampering.
                    </p>
                </div>
            </div>

            <div className="glass-panel p-8 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Admissibility Statement</h2>
                <div className="prose prose-invert max-w-none text-gray-300 text-sm space-y-4">
                    <p>
                        NexForensics generates outputs designed to meet the Daubert Standard for expert testimony.
                        The underlying algorithms have been peer-reviewed and error rates are transparently displayed alongside every confidence score.
                    </p>
                    <p>
                        <strong>Chain of Custody:</strong> Using our proprietary 'Chronos' engine, we maintain a non-repudiable log of all user interactions.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
);

export const TrainingPage = () => (
    <Layout>
        <div className="space-y-6 fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-white">Forensic Simulation Training</h1>
                    <p className="text-gray-400">Cadet Application / Module 4: Blood Spatter Analysis</p>
                </div>
                <div className="px-4 py-2 bg-success/20 text-success border border-success/30 rounded-lg text-sm font-bold">
                    Sim Mode Active
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="glass-panel p-6 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-all cursor-pointer">
                        <div className="absolute top-0 right-0 p-3 bg-white/5 rounded-bl-xl">
                            <BookOpen size={20} className="text-gray-500 group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Scenario {i}: Ballistics</h3>
                        <div className="w-full bg-black/50 h-2 rounded-full mb-4">
                            <div className="bg-primary h-full rounded-full" style={{ width: `${i * 30}%` }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mb-4">Difficulty: Intermediate • 45 Mins</p>
                        <button className="w-full py-2 bg-surface border border-white/10 rounded group-hover:bg-primary group-hover:text-black transition-all text-sm font-bold">
                            Continue Module
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
);

export const AdminPage = () => (
    <Layout>
        <div className="space-y-6 fade-in">
            <h1 className="text-3xl font-bold text-white">System Administration</h1>
            <div className="glass-panel p-6 rounded-xl">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Users size={20} /> User Management</h2>
                <table className="w-full text-left text-sm text-gray-400">
                    <thead className="border-b border-white/10">
                        <tr>
                            <th className="pb-3">User</th>
                            <th className="pb-3">Role</th>
                            <th className="pb-3">Access Level</th>
                            <th className="pb-3">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr>
                            <td className="py-3 text-white">Det. Miller</td>
                            <td>Lead Investigator</td>
                            <td>Level 4</td>
                            <td className="text-success">Active</td>
                        </tr>
                        <tr>
                            <td className="py-3 text-white">Sgt. Kowalski</td>
                            <td>Admin</td>
                            <td>Level 5</td>
                            <td className="text-success">Active</td>
                        </tr>
                        <tr>
                            <td className="py-3 text-white">Cadet Sarah</td>
                            <td>Student</td>
                            <td>Level 1</td>
                            <td className="text-warning">Probation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
);
