import { CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const WhyChooseUs = () => {
    const points = [
        { title: 'Quality Assurance', description: 'We maintain the highest standards in manpower selection and product supply.' },
        { title: 'Reliability', description: 'Consistent and timely delivery of services across all domains.' },
        { title: 'Expert Team', description: 'Professionals with years of experience in corporate management.' },
        { title: 'Customer Centric', description: 'Tailored solutions focused on your specific business goals.' },
    ];

    return (
        <div className="bg-white overflow-hidden">
            <SEO
                title="Why Choose Us"
                description="Discover why Task Support Solutions is the preferred partner for corporate services, offering unmatched precision and reliability."
            />
            <PageHeader
                title="Excellence"
                accentTitle="Guaranteed"
                imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                subtitle="We bring unparalleled precision to corporate services, ensuring your business stays ahead of the curve."
            />
            <div className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-8 md:w-12 bg-accent"></span>
                            <span className="text-accent font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">Why Partner with Us?</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-dark mb-8 leading-tight uppercase tracking-tighter">
                            Strategic <span className="text-primary block">Task Support</span> Solutions
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                            {points.map((point, i) => (
                                <div key={i} className="group p-5 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                        <CheckCircle size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <h4 className="font-black text-dark uppercase tracking-tight mb-2 text-xs md:text-sm">{point.title}</h4>
                                    <p className="text-secondary text-xs md:text-sm leading-relaxed">{point.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-12 md:mt-0">
                        <div className="absolute -inset-4 md:-inset-10 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
                        <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                                alt="Professional Collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white">
                                <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">Reliability</p>
                                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1 md:mt-2 text-primary">Our Core Foundation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
