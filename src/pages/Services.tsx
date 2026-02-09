import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Service } from '../types';
import { Briefcase, X, CheckCircle2, Clock, Shield, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

interface ServiceDetail extends Service {
    features: string[];
    benefits: string[];
}

const Services = () => {
    const navigate = useNavigate();
    const [services, setServices] = useState<ServiceDetail[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

    useEffect(() => {
        const staticServices: ServiceDetail[] = [
            {
                id: '1',
                name: 'Manpower Supply',
                description: 'Providing highly skilled, semi-skilled, and general labor workforce solutions for industrial and corporate sectors.',
                image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
                features: ['Skilled Technical Staff', 'Semi-Skilled Workforce', 'General Labor Solutions', '24/7 Support Available'],
                benefits: ['Immediate Deployment', 'Vetted Professionals', 'Reduced HR Overheads', 'Flexible Contracts']
            },
            {
                id: '2',
                name: 'Stationery Supplies',
                description: 'Complete procurement of premium office stationery, pantry supplies, and essential corporate equipment.',
                image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=2070&auto=format&fit=crop',
                features: ['Premium Office Essentials', 'Pantry & Housekeeping', 'IT Peripherals', 'Bulk Ordering System'],
                benefits: ['Cost-Effective Pricing', 'Same-Day Delivery', 'Quality Assurance', 'Inventory Management']
            },
            {
                id: '3',
                name: 'Event Management',
                description: 'End-to-end management for corporate conferences, annual meetings, and product launches with precision.',
                image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop',
                features: ['Venue Selection & Setup', 'Catering Services', 'AV & Tech Support', 'Guest Management'],
                benefits: ['Stress-Free Execution', 'Modern Aesthetics', 'Timely Management', 'Customized Branding']
            },
            {
                id: '4',
                name: 'Corporate Meetings',
                description: 'Strategic planning and logistical support for executive board meetings and internal corporate gatherings.',
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
                features: ['Meeting Room Setup', 'Hospitality Services', 'Documentation Support', 'Digital Integration'],
                benefits: ['Focused Environment', 'Seamless Logistics', 'Professional Standards', 'Privacy Guaranteed']
            },
        ];
        setServices(staticServices);
        setLoading(false);
    }, []);

    const openModal = (service: ServiceDetail) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedService(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Our Services"
                description="Explore our range of corporate services: Manpower Supply, Stationery Supplies, Event Management, and Corporate Meeting support."
            />
            <PageHeader
                title="Our"
                accentTitle="Services"
                imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                subtitle="Comprehensive corporate solutions designed for efficiency, reliability, and business excellence."
            />

            <div className="py-24 px-4 max-w-7xl mx-auto">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-16">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                onClick={() => openModal(service)}
                                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row cursor-pointer"
                            >
                                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
                                    <div className="text-dark opacity-30 mb-6"><Briefcase size={32} /></div>
                                    <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter text-dark">
                                        {service.name}
                                    </h3>
                                    <p className="text-secondary leading-relaxed font-medium italic mb-8 opacity-80">
                                        {service.description.substring(0, 100)}...
                                    </p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openModal(service);
                                        }}
                                        className="bg-primary text-white self-start px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-dark transition-all flex items-center gap-2 shadow-lg group/btn mt-auto"
                                    >
                                        Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Service Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
                    <div className="absolute inset-0 bg-dark/95 backdrop-blur-md" onClick={closeModal}></div>

                    <div className="relative bg-white w-full max-w-6xl max-h-[90vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row">
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 z-20 p-3 bg-dark/5 hover:bg-primary hover:text-white rounded-full transition-all"
                        >
                            <X size={24} />
                        </button>

                        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                            <img
                                src={selectedService.image}
                                alt={selectedService.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <span className="px-4 py-2 bg-primary font-black uppercase tracking-widest text-[10px] rounded-full">Explore Service</span>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4 leading-none">
                                    {selectedService.name.split(' ')[0]} <br />
                                    <span className="text-primary italic">{selectedService.name.split(' ').slice(1).join(' ')}</span>
                                </h2>
                            </div>
                        </div>

                        <div className="p-8 md:p-16 md:w-1/2 overflow-y-auto">
                            <div className="mb-10">
                                <h4 className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4">Description</h4>
                                <p className="text-secondary text-lg md:text-xl font-medium italic leading-relaxed">
                                    {selectedService.description}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-10">
                                <div>
                                    <h4 className="flex items-center gap-2 text-dark font-black uppercase tracking-widest text-xs mb-6">
                                        <CheckCircle2 size={18} className="text-primary" /> Key Features
                                    </h4>
                                    <ul className="space-y-4">
                                        {selectedService.features.map((f, i) => (
                                            <li key={i} className="text-secondary font-medium flex items-center gap-3 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="flex items-center gap-2 text-dark font-black uppercase tracking-widest text-xs mb-6">
                                        <Shield size={18} className="text-accent" /> Our Promise
                                    </h4>
                                    <ul className="space-y-4">
                                        {selectedService.benefits.map((b, i) => (
                                            <li key={i} className="text-secondary font-medium flex items-center gap-3 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent/40"></div>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-auto p-6 bg-gray-50 flex items-center justify-between border-t border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-secondary opacity-60">Avg. Response Time</p>
                                        <p className="text-dark font-black">2 Hours</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        closeModal();
                                        navigate('/contact');
                                    }}
                                    className="bg-primary text-white px-8 py-3 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-dark transition-all shadow-xl"
                                >
                                    Inquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
