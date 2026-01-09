import Layout from '../components/layout/Layout';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black fade-in">

                <section className="pt-20 pb-20 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                            <p className="text-gray-400">Request a demo or speak with our sales team.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="glass-panel p-6 rounded-xl flex items-start gap-4">
                                    <Mail className="text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold mb-1">Email Sales</h3>
                                        <p className="text-gray-400 text-sm">enterprise@nexforensics.ai</p>
                                    </div>
                                </div>
                                <div className="glass-panel p-6 rounded-xl flex items-start gap-4">
                                    <Phone className="text-secondary mt-1" />
                                    <div>
                                        <h3 className="font-bold mb-1">Support Line</h3>
                                        <p className="text-gray-400 text-sm">+1 (888) 555-0192</p>
                                    </div>
                                </div>
                                <div className="glass-panel p-6 rounded-xl flex items-start gap-4">
                                    <MapPin className="text-accent mt-1" />
                                    <div>
                                        <h3 className="font-bold mb-1">Headquarters</h3>
                                        <p className="text-gray-400 text-sm">
                                            NFSU Goa Campus,<br />
                                            Curti, Ponda, Goa 403401
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <form className="glass-panel p-8 rounded-xl space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Full Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:border-primary focus:outline-none" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Work Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:border-primary focus:outline-none" placeholder="john@agency.gov" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm h-32 resize-none focus:border-primary focus:outline-none" placeholder="I'm interested in a demo for..." />
                                </div>
                                <button type="submit" className="w-full py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                                    Send Request <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ContactPage;
