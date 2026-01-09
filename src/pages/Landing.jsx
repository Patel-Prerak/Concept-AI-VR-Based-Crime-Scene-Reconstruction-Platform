import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Shield, Cpu, Activity } from 'lucide-react';

const Landing = () => {
    return (
        <Layout fullWidth>
            <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-30"></div>
                    <div className="container mx-auto text-center max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-mono mb-8 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            AI-POWERED CRIME SCENE ANALYSIS v2.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Forensic Reconstruction</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Transform crime scenes into immersive, interactive VR environments.
                            Automated evidence detection, court-admissible reporting, and tamper-proof chain of custody.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/dashboard" className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2">
                                Launch Console <ArrowRight size={20} />
                            </Link>
                            <button className="px-8 py-4 bg-surface border border-white/10 rounded-lg hover:bg-white/5 transition-colors font-medium text-white flex items-center gap-2">
                                <Box size={20} className="text-secondary" /> View Demo
                            </button>
                        </div>
                    </div>

                    {/* Abstract 3D Mockup Graphic */}
                    <div className="mt-20 relative mx-auto max-w-5xl h-[400px] bg-surface/50 border border-white/10 rounded-xl backdrop-blur-md overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] opacity-20">
                            {[...Array(20)].map((_, i) => <div key={i} className="border-r border-primary/30"></div>)}
                        </div>
                        <div className="relative z-10 text-center">
                            <div className="border border-primary/50 p-8 rounded-full pointer-events-none animate-[spin_10s_linear_infinite]">
                                <div className="w-32 h-32 rounded-full border-2 border-dashed border-secondary"></div>
                            </div>
                            <p className="mt-4 font-mono text-primary text-sm">PROCESSING SCENE DATA...</p>
                        </div>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <div className="px-2 py-1 bg-black/50 rounded text-xs text-success border border-success/30">LIDAR: ACTIVE</div>
                            <div className="px-2 py-1 bg-black/50 rounded text-xs text-primary border border-primary/30">AI: CONNECTED</div>
                        </div>
                    </div>
                </section>


                <section id="features" className="py-24 px-6 bg-surface/30">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Forensic Grade Intelligence</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">Our platform combines cutting-edge computer vision with certified forensic standards.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-2xl bg-black/20 border border-white/5 hover:border-primary/50 transition-colors group">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Cpu className="text-primary" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">AI Object Recognition</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Automatically identifies and classifies over 500 types of forensic evidence including ballistics, biological traces, and digital footprints.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-black/20 border border-white/5 hover:border-secondary/50 transition-colors group">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                                    <Box className="text-secondary" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Instant VR Generation</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Convert standard 2D crime scene photos into a fully navigable 3D volumetric space in seconds using NeRF technology.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-black/20 border border-white/5 hover:border-accent/50 transition-colors group">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                    <Shield className="text-accent" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Chain of Custody</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Immutable blockchain-backed logging ensures every annotation, view, and report generation is court-admissible.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="technology" className="py-24 px-6 bg-black relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Powered by <br /><span className="text-primary">Neural Radiance Fields (NeRF)</span></h2>
                            <div className="space-y-6 text-gray-400 leading-relaxed">
                                <p>
                                    Traditional photogrammetry is slow and brittle. NexForensics allows investigators to take standard 2D photos from any camera—drone, bodycam, or smartphone—and instantly synthesize a photorealistic 3D volumetric scene.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">1</div>
                                        <span><strong>Multi-View Synthesis:</strong> AI fills in the gaps between photos to create a hole-free 3D environment.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">2</div>
                                        <span><strong>Semantic Segmentation:</strong> Every pixel is classified. Blood, glass, and casings are auto-tagged in 3D space.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">3</div>
                                        <span><strong>Physics-Based Lighting:</strong> Relight the scene to see shadows or trajectories that weren't visible originally.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-[500px] bg-gradient-to-br from-surface to-black border border-white/10 rounded-2xl overflow-hidden relative group">
                            {/* Abstract Vis of a 3D Scan */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 border border-primary/30 rounded-full animate-[spin_8s_linear_infinite] absolute"></div>
                                <div className="w-48 h-48 border border-secondary/30 rounded-full animate-[spin_12s_linear_infinite_reverse] absolute"></div>
                                <div className="w-32 h-32 border border-accent/30 rounded-full animate-[spin_4s_linear_infinite] absolute"></div>
                            </div>
                            <div className="absolute bottom-0 text-center w-full p-4 bg-black/60 backdrop-blur">
                                <p className="font-mono text-xs text-primary">AI MODEL TRAINING: 99.98% COMPLETE</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 bg-surface/30">
                    <div className="container mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Unified Forensic Ecosystem</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A single platform bridging the gap between field investigators, lab analysts, legal teams, and forensic students.
                        </p>
                    </div>

                    <div className="container mx-auto max-w-5xl relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-24 left-10 right-10 h-0.5 bg-gradient-to-r from-primary/30 via-white/20 to-secondary/30"></div>

                        <div className="grid md:grid-cols-4 gap-6 relative z-10">
                            {[
                                { title: "Capture", icon: "📸", desc: "Drone/Lidar Input" },
                                { title: "Process", icon: "⚡", desc: "AI Reconstruction" },
                                { title: "Analyze", icon: "🔬", desc: "Lab & VR Investigation" },
                                { title: "Educate & Present", icon: "🎓", desc: "Courtroom & Classroom" }
                            ].map((step, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-20 h-20 mx-auto bg-black border border-white/10 rounded-full flex items-center justify-center text-3xl mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-primary/50 transition-colors bg-surface">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-500 text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}

                <footer className="py-20 border-t border-white/10 bg-black">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-4 gap-12 mb-16">
                            <div className="col-span-1 md:col-span-2">
                                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mb-6">
                                    NexForensics
                                </Link>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                    Pioneering the next generation of digital evidence. We empower truth-seekers with immutable, volumetric reality capture technology.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-white mb-6">Platform</h4>
                                <ul className="space-y-4 text-sm text-gray-500">
                                    <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                                    <li><Link to="/technology" className="hover:text-primary transition-colors">Technology</Link></li>
                                    <li><Link to="/compliance" className="hover:text-primary transition-colors">Compliance & Security</Link></li>
                                    <li><Link to="/workflow" className="hover:text-primary transition-colors">Workflow</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-white mb-6">Company</h4>
                                <ul className="space-y-4 text-sm text-gray-500">
                                    <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                                    <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                                    <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Sales</Link></li>
                                    <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                            <p>© 2026 NexForensics Technologies. All rights reserved.</p>
                            <div className="flex gap-6">
                                <span>Goa, India</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Layout >
    );
};

export default Landing;
