import { useState, useEffect } from 'react';
import { Upload, Cpu, CheckCircle, AlertCircle, FileImage, Video, Loader2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STEPS = [
    { id: 1, label: "Data Ingestion", icon: Upload },
    { id: 2, label: "AI & Point Cloud Processing", icon: Cpu },
    { id: 3, label: "Verification", icon: CheckCircle }
];

export default function NewCaseWizard({ onClose }) {
    const [step, setStep] = useState(1);
    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState([]);
    const navigate = useNavigate();

    // Mock processing log
    useEffect(() => {
        if (step === 2) {
            const messages = [
                "Initializing NeRF engine...",
                "Analyzing Lidar point clouds...",
                "Detecting biological traces (Confidence > 90%)...",
                "Triangulating ballistics trajectories...",
                "Stitching 360° panoramas...",
                "Generating volumetric mesh...",
                "Finalizing evidence integrity hashes..."
            ];

            let i = 0;
            const interval = setInterval(() => {
                if (i >= messages.length) {
                    clearInterval(interval);
                    setTimeout(() => setStep(3), 1000);
                    return;
                }
                setLogs(prev => [...prev, messages[i]]);
                setProgress(prev => prev + (100 / messages.length));
                i++;
            }, 800);

            return () => clearInterval(interval);
        }
    }, [step]);

    const handleDrop = (e) => {
        e.preventDefault();
        // In a real app, handle files here. We'll just mock it.
        setFiles([
            { name: "drone_scan_v1.ply", size: "1.2GB", type: "lidar" },
            { name: "bodycam_footage_001.mp4", size: "450MB", type: "video" },
            { name: "scene_photos_raw.zip", size: "2.1GB", type: "images" }
        ]);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 fade-in">
            <div className="w-full max-w-4xl bg-[#0a0a0f] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">

                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            New Case Reconstruction
                        </h2>
                        <p className="text-gray-400 text-sm">Target ID: AUTO-GEN-2024-{Math.floor(Math.random() * 1000)}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Steps */}
                <div className="flex bg-surface/50 border-b border-white/10">
                    {STEPS.map((s, idx) => (
                        <div
                            key={s.id}
                            className={`flex-1 p-4 flex items-center justify-center gap-2 text-sm font-medium transition-colors ${step === s.id ? "text-primary bg-primary/5 border-b-2 border-primary" :
                                step > s.id ? "text-success border-b-2 border-success" : "text-gray-500"
                                }`}
                        >
                            <s.icon size={18} /> {s.label}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="p-8 flex-1 overflow-y-auto">
                    {step === 1 && (
                        <div className="space-y-6">
                            <div
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleDrop}
                                className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer group"
                                onClick={handleDrop}
                            >
                                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Upload className="text-primary" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Drop Evidence Files Here</h3>
                                <p className="text-gray-400 max-w-md mx-auto">
                                    Supports Lidar (.ply, .las), 360° Images (.jpg, .exr), Drone Footage (.mp4), and Standard Evidence Photos.
                                </p>
                            </div>

                            {files.length > 0 && (
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase">Staged Files ({files.length})</h4>
                                    {files.map((f, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-surface rounded-lg border border-white/5 animate-in slide-in-from-bottom-2">
                                            <div className="flex items-center gap-3">
                                                {f.type === 'lidar' ? <Cpu size={20} className="text-purple-500" /> :
                                                    f.type === 'video' ? <Video size={20} className="text-blue-500" /> :
                                                        <FileImage size={20} className="text-yellow-500" />}
                                                <span className="text-sm font-medium">{f.name}</span>
                                            </div>
                                            <span className="text-xs font-mono text-gray-500">{f.size}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8">
                            <div className="relative pt-4">
                                <div className="flex justify-between text-xs font-mono text-primary mb-2">
                                    <span>PROCESSING CORE: ACTIVE</span>
                                    <span>{Math.round(progress)}%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="bg-black border border-white/10 rounded-xl p-4 font-mono text-xs text-green-500 h-64 overflow-y-auto w-full">
                                    {logs.map((log, i) => (
                                        <div key={i} className="mb-1">{`> ${log}`}</div>
                                    ))}
                                    <div className="animate-pulse">{`> _`}</div>
                                </div>

                                {/* Visualizer Mockup */}
                                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover bg-center mix-blend-overlay"></div>
                                    <div className="grid grid-cols-6 gap-0.5 animate-pulse opacity-30 w-full h-full absolute">
                                        {[...Array(36)].map((_, i) => <div key={i} className="bg-primary/20"></div>)}
                                    </div>
                                    <Loader2 size={48} className="text-primary animate-spin relative z-10" />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6 text-success animate-in zoom-in">
                                <CheckCircle size={48} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">Reconstruction Complete</h2>
                            <p className="text-gray-400 max-w-lg mx-auto mb-8">
                                The scene has been successfully voxelized. 14 pieces of potential evidence detected.
                                Master hash: <span className="font-mono text-white bg-white/10 px-2 py-1 rounded">8f92...a12b</span>
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-surface/30 flex justify-end gap-3">
                    {step === 1 && (
                        <button
                            onClick={() => setStep(2)}
                            disabled={files.length === 0}
                            className="px-6 py-2 bg-primary text-black font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/80 transition-colors"
                        >
                            Initiate Processing
                        </button>
                    )}
                    {step === 3 && (
                        <button
                            onClick={() => {
                                onClose();
                                navigate('/cases/CS-2024-001'); // Redirect to the mock case
                            }}
                            className="px-6 py-2 bg-success text-black font-bold rounded-lg hover:bg-success/80 transition-colors shadow-[0_0_20px_rgba(0,255,157,0.3)]"
                        >
                            Launch VR Environment
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}
