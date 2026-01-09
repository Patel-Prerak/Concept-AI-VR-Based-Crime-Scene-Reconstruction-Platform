import Layout from '../components/layout/Layout';
import { Cpu, Maximize, Lock, Database } from 'lucide-react';

const TechnologyPage = () => {
    return (
        <Layout>
            <div className="max-w-6xl mx-auto space-y-16 fade-in pb-20">

                {/* Hero */}
                <div className="text-center space-y-4 pt-10">
                    <h1 className="text-5xl font-bold">
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Neural Radiance Fields
                        </span> (NeRF)
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        NexForensics utilizes state-of-the-art volumetric rendering to turn sparse 2D image sets into continuous, photorealistic 3D crime scenes.
                    </p>
                </div>

                {/* Core Tech Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                        <Cpu size={48} className="text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Volumetric Ray Pricing</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Unlike traditional polygon meshes which can look jagged or artificial, NeRF models scene density and color at every point in space. This allows for:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Infinite resolution scaling</li>
                            <li>Realistic reflections and transparency (e.g., glass, liquids)</li>
                            <li>Sub-millimeter accuracy for ballistics</li>
                        </ul>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
                        <Maximize size={48} className="text-secondary mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Computer Vision & Segmentation</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Our pipeline doesn't just "see" pixels; it understands them. We run parallel ResNet models to identify objects within the 3D volume.
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Automated weapon classification</li>
                            <li>Blood spatter pattern isolation</li>
                            <li>Shoeprint detection and sizing</li>
                        </ul>
                    </div>
                </div>

                {/* Architecture Diagram */}
                <div className="glass-panel p-8 rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-bold mb-8 text-center">System Architecture</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">

                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 flex-1 w-full relative group">
                            <div className="text-4xl mb-4">📸</div>
                            <h4 className="font-bold mb-2">Input Layer</h4>
                            <p className="text-xs text-gray-500">Raw Photos • Lidar • Drone Video</p>
                            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-gray-600">→</div>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 flex-1 w-full relative shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                            <div className="text-4xl mb-4 text-primary animate-pulse">⚙️</div>
                            <h4 className="font-bold mb-2 text-primary">Core Engine</h4>
                            <p className="text-xs text-gray-400">NeRF Synthesis • Semantic AI • Hash Generation</p>
                            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-gray-600">→</div>
                        </div>

                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 flex-1 w-full">
                            <div className="text-4xl mb-4">🕶️</div>
                            <h4 className="font-bold mb-2">Application Layer</h4>
                            <p className="text-xs text-gray-500">VR Interface • Web Dashboard • Report Gen</p>
                        </div>

                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center">
                    <p className="text-gray-500 mb-4">Want to see the whitepaper?</p>
                    <button className="text-primary hover:text-white underline underline-offset-4 transition-colors">
                        Download Technical Specification PDF (2.4MB)
                    </button>
                </div>

            </div>
        </Layout>
    );
};

export default TechnologyPage;
