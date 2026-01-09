import Layout from '../components/layout/Layout';
import Scene3D from '../components/3d/Scene3D';
import { MOCK_EVIDENCE_LIST, CASES } from '../lib/mockData';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Camera, FileText, Share2, Layers, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const CaseDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('3d');
    const [selectedEvidence, setSelectedEvidence] = useState(null);

    const caseData = CASES.find(c => c.id === id) || CASES[0];

    return (
        <Layout>
            <div className="h-[calc(100vh-8rem)] flex flex-col gap-4 fade-in">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold text-white">{caseData.title}</h1>
                            <span className="px-2 py-0.5 rounded text-xs border border-primary text-primary bg-primary/10">ACTIVE INVESTIGATION</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1 font-mono">{caseData.id} • {caseData.location}</p>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-sm">
                            <Share2 size={16} /> Share Case
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold rounded-lg hover:bg-primary/80 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.3)] text-sm">
                            <FileText size={16} /> Generate Report
                        </button>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
                    {/* Main Viewport */}
                    <div className="col-span-8 flex flex-col gap-4 min-h-0">
                        <div className="flex items-center gap-2 bg-surface/50 p-1 rounded-lg w-fit border border-white/10">
                            <button
                                onClick={() => setActiveTab('3d')}
                                className={cn("px-4 py-1.5 rounded-md text-sm font-medium transition-all", activeTab === '3d' ? "bg-primary text-black" : "text-gray-400 hover:text-white")}
                            >
                                3D Reconstruction
                            </button>
                            <button
                                onClick={() => setActiveTab('photos')}
                                className={cn("px-4 py-1.5 rounded-md text-sm font-medium transition-all", activeTab === 'photos' ? "bg-primary text-black" : "text-gray-400 hover:text-white")}
                            >
                                Original Photos
                            </button>
                            <button
                                onClick={() => setActiveTab('map')}
                                className={cn("px-4 py-1.5 rounded-md text-sm font-medium transition-all", activeTab === 'map' ? "bg-primary text-black" : "text-gray-400 hover:text-white")}
                            >
                                Geo Map
                            </button>
                        </div>

                        <div className="flex-1 bg-black rounded-xl border border-white/10 relative overflow-hidden group">
                            {activeTab === '3d' ? (
                                <Scene3D evidence={MOCK_EVIDENCE_LIST} onSelectEvidence={setSelectedEvidence} />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500 font-mono">
                                    [ VIEW MODE: {activeTab.toUpperCase()} - NO DATA ]
                                </div>
                            )}

                            {/* Overlay HUD */}
                            <div className="absolute bottom-4 left-4 p-4 bg-black/60 backdrop-blur rounded-lg border border-white/10 text-xs font-mono pointer-events-none">
                                <p className="text-primary">AI DETECTION: ONLINE</p>
                                <p>CONFIDENCE THRESHOLD: 85%</p>
                                <p>OBJECTS TRACKED: {MOCK_EVIDENCE_LIST.length}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Evidence & Tools */}
                    <div className="col-span-4 flex flex-col gap-4 min-h-0 overflow-y-auto pr-1">
                        {selectedEvidence ? (
                            <div className="glass-panel p-5 rounded-xl animate-in slide-in-from-right-10 fade-in duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{selectedEvidence.label}</h3>
                                        <span className="text-xs font-mono text-primary">ID: EV-{selectedEvidence.id}</span>
                                    </div>
                                    <button onClick={() => setSelectedEvidence(null)} className="text-gray-400 hover:text-white">✕</button>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-black/50 p-3 rounded-lg border border-white/10">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-400">AI Confidence</span>
                                            <span className="text-success">{selectedEvidence.confidence * 100}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-success" style={{ width: `${selectedEvidence.confidence * 100}%` }}></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div className="p-3 bg-surface rounded border border-white/5">
                                            <p className="text-gray-400 text-xs">Type</p>
                                            <p className="font-medium text-white">{selectedEvidence.type}</p>
                                        </div>
                                        <div className="p-3 bg-surface rounded border border-white/5">
                                            <p className="text-gray-400 text-xs">Distance</p>
                                            <p className="font-medium text-white">1.2m from Center</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-gray-300">AI Analysis Notes:</p>
                                        <p className="text-xs text-gray-400 leading-relaxed bg-black/30 p-3 rounded border-l-2 border-primary">
                                            High probability of match with known sample types. Trajectory analysis suggests impact from 45-degree angle. Suggest collecting samples for DNA analysis.
                                        </p>
                                    </div>

                                    <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded border border-white/10 text-sm transition-colors">
                                        View Chain of Custody
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="glass-panel p-5 rounded-xl">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Layers size={18} className="text-primary" />
                                    Evidence Log
                                </h3>
                                <div className="space-y-3">
                                    {MOCK_EVIDENCE_LIST.map(ev => (
                                        <div
                                            key={ev.id}
                                            onClick={() => setSelectedEvidence(ev)}
                                            className="p-3 bg-surface border border-white/5 hover:border-primary/50 rounded-lg cursor-pointer transition-all flex items-center justify-between group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${ev.type === 'BLOOD' ? 'bg-red-500' :
                                                        ev.type === 'WEAPON' ? 'bg-yellow-500' : 'bg-blue-500'
                                                    }`}></div>
                                                <span className="text-sm font-medium group-hover:text-white text-gray-300">{ev.label}</span>
                                            </div>
                                            <span className="text-xs font-mono text-gray-500">{Math.round(ev.confidence * 100)}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="glass-panel p-5 rounded-xl flex-1">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <AlertTriangle size={18} className="text-yellow-500" />
                                Scene Notes
                            </h3>
                            <textarea
                                className="w-full h-32 bg-black/30 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 text-gray-300 resize-none"
                                placeholder="Add investigator notes here..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CaseDetails;
