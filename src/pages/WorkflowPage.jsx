import Layout from '../components/layout/Layout';
import { Camera, Server, BrainCircuit, Glasses, Gavel, ArrowRight } from 'lucide-react';

const WorkflowPage = () => {
    const steps = [
        {
            id: 1,
            title: "Data Collection",
            icon: Camera,
            color: "text-blue-400",
            description: "Forensic teams capture the scene using standard equipment.",
            details: [
                "DSLR / Smartphone Photos (200+ images)",
                "Lidar Scans (iPad Pro / Leica)",
                "Drone Photogrammetry",
                "Bodycam Footage"
            ]
        },
        {
            id: 2,
            title: "Secure Ingestion",
            icon: Server,
            color: "text-purple-400",
            description: "Raw data is securely uploaded to the NexForensics cloud.",
            details: [
                "AES-256 Encryption",
                "Chain of Custody Hashing (SHA-256)",
                "Metadata Extraction",
                "Automated Virus Scanning"
            ]
        },
        {
            id: 3,
            title: "AI Processing",
            icon: BrainCircuit,
            color: "text-primary",
            description: "Our core engine reconstructs the scene and analyzes evidence.",
            details: [
                "NeRF Volumetric Fusion",
                "Object Detection (ResNet)",
                "Blood Spatter Analysis",
                "Trajectory Calculation"
            ]
        },
        {
            id: 4,
            title: "Analysis & Collaboration",
            icon: Glasses,
            color: "text-pink-400",
            description: "Analysts and students explore the scene in a true-to-life virtual space.",
            details: [
                "1:1 Scale Walkthroughs",
                "Virtual Student Labs",
                "Advanced Trajectory Analysis",
                "Multi-User Team Review"
            ]
        },
        {
            id: 5,
            title: "Presentation & Education",
            icon: Gavel,
            color: "text-yellow-400",
            description: "Final outputs for legal proceedings and academic training.",
            details: [
                "Admissible Court Reports",
                "Classroom Case Simulations",
                "Interactive Tablet View",
                "Graded Student Assessments"
            ]
        }
    ];

    return (
        <Layout>
            <div className="max-w-6xl mx-auto pb-20 fade-in">
                <div className="text-center pt-10 mb-16 space-y-4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        End-to-End Workflow
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From raw evidence collection to the final verdict, see how NexForensics powers the entire investigative lifecycle.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2"></div>

                    <div className="space-y-24 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <div className="flex-1 w-full">
                                    <div className={`glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                            <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
                                                <step.icon size={24} className={step.color} />
                                            </div>
                                            <h3 className="text-2xl font-bold">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-400 mb-6">{step.description}</p>
                                        <ul className={`space-y-2 ${index % 2 === 0 ? 'flex flex-col items-end' : ''}`}>
                                            {step.details.map((detail, i) => (
                                                <li key={i} className="text-sm text-gray-500 bg-white/5 py-1 px-3 rounded-full border border-white/5 w-fit">
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-black border-4 border-primary/50 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                                        <span className="font-bold text-white">{step.id}</span>
                                    </div>
                                </div>

                                {/* Spacer Side */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2 mx-auto">
                        Start Your First Case <ArrowRight size={20} />
                    </button>
                    <p className="mt-4 text-sm text-gray-500">No credit card required for demo access.</p>
                </div>
            </div>
        </Layout>
    );
};

export default WorkflowPage;
