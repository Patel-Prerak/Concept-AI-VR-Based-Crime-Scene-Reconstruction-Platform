import Layout from '../components/layout/Layout';
import { CASES, MOCK_EVIDENCE_LIST } from '../lib/mockData';
import { Shield, Lock, Download, Printer } from 'lucide-react';

const ReportView = () => {
    const activeCase = CASES[0];
    const date = new Date().toLocaleDateString();

    return (
        <Layout>
            <div className="max-w-4xl mx-auto bg-white text-black p-12 min-h-screen shadow-2xl relative font-sans">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>

                <header className="flex justify-between items-end border-b-2 border-black pb-6 mb-8">
                    <div>
                        <h1 className="text-4xl font-bold uppercase tracking-widest text-black mb-2">Forensic Analysis Report</h1>
                        <p className="font-mono text-sm text-gray-600">CASE ID: {activeCase.id} | REF: {date}-AX99</p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center gap-2 justify-end mb-1 text-red-600 font-bold uppercase text-xs border border-red-600 px-2 py-1 inline-block">
                            <Lock size={12} /> Confidential / Court Admissible
                        </div>
                        <p className="font-bold text-lg">NexForensics Lab 1</p>
                        <p className="text-sm text-gray-500">Certified ISO/IEC 17025</p>
                    </div>
                </header>

                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-4 border border-gray-200">
                        <h3 className="font-bold text-sm uppercase text-gray-500 mb-2">Case Metadata</h3>
                        <table className="w-full text-sm">
                            <tbody>
                                <tr className="border-b border-gray-200"><td className="py-1 text-gray-500">Incident Type</td><td className="font-medium text-right">{activeCase.title}</td></tr>
                                <tr className="border-b border-gray-200"><td className="py-1 text-gray-500">Location</td><td className="font-medium text-right">{activeCase.location}</td></tr>
                                <tr className="border-b border-gray-200"><td className="py-1 text-gray-500">Lead Investigator</td><td className="font-medium text-right">{activeCase.investigator}</td></tr>
                                <tr><td className="py-1 text-gray-500">Date</td><td className="font-medium text-right">{activeCase.date}</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-gray-50 p-4 border border-gray-200">
                        <h3 className="font-bold text-sm uppercase text-gray-500 mb-2">Chain of Custody Verification</h3>
                        <div className="flex items-center gap-3 text-sm mb-2">
                            <Shield className="text-green-600" size={16} />
                            <span className="font-medium text-green-700">Digital Signature Valid</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-tight">
                            This document is digitally signed and timestamped on the blockchain.
                            Hash: <code className="bg-gray-200 px-1">0x7f83...9a12</code>
                        </p>
                    </div>
                </div>

                <section className="mb-8">
                    <h2 className="text-xl font-bold border-b border-black mb-4 pb-1">Identified Evidence</h2>
                    <table className="w-full text-left text-sm">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">ID</th>
                                <th className="p-2">Type</th>
                                <th className="p-2">Description</th>
                                <th className="p-2">AI Confidence</th>
                                <th className="p-2">Location (XYZ)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_EVIDENCE_LIST.map((ev, i) => (
                                <tr key={ev.id} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="p-2 font-mono">EV-{ev.id}</td>
                                    <td className="p-2 font-bold">{ev.type}</td>
                                    <td className="p-2">{ev.label}</td>
                                    <td className="p-2">{Math.round(ev.confidence * 100)}%</td>
                                    <td className="p-2 font-mono text-xs">[{ev.x}, {ev.y}, {ev.z}]</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section>
                    <h2 className="text-xl font-bold border-b border-black mb-4 pb-1">Scene Analysis Summary</h2>
                    <p className="text-sm leading-relaxed text-gray-800 columns-2 gap-8 text-justify">
                        Based on the reconstruction analysis performed on {new Date().toLocaleDateString()},
                        the AI system identified {MOCK_EVIDENCE_LIST.length} primary points of interest.
                        Trajectory analysis is consistent with the initial hypothesis.
                        The VR reconstruction module has locked the spatial coordinates of all evidence items
                        to ensure scene integrity preservation. All data has been hashed and committed to the
                        ledger for permanent record keeping.
                    </p>
                </section>

                <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center print:hidden">
                    <p className="text-xs text-gray-400">Preview Mode</p>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                            <Download size={16} /> PDF Export
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
                            <Printer size={16} /> Print
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ReportView;
