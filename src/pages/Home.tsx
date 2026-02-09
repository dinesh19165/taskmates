import Hero from '../components/Hero'
import SEO from '../components/SEO'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
    const services = [
        {
            title: 'Manpower Supply',
            desc: 'Providing skilled and unskilled labor for various industrial and corporate needs.',
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Stationery Supplies',
            desc: 'Comprehensive office supplies and stationery management for your business.',
            image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'Event Management',
            desc: 'Seamless execution of corporate events, meetings, and conferences.',
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'Corporate Meetings',
            desc: 'Strategic planning and logistical support for executive board meetings.',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    // Double the items for a seamless loop
    const displayServices = [...services, ...services];

    return (
        <div className="bg-white overflow-hidden">
            <SEO
                title="Home"
                description="Empowering your business operations with premium manpower, supplies, and corporate event management."
            />
            <Hero />

            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-12 h-1.5 bg-primary rounded-full"></span>
                                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Continuous Excellence</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-dark uppercase tracking-tighter">
                                Our <span className="text-primary italic">Services</span>
                            </h2>
                        </div>
                        <Link to="/services" className="group flex items-center gap-3 text-dark font-black uppercase tracking-widest text-sm hover:text-primary transition-colors">
                            View All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Continuous Infinite Scroll Container */}
                <div className="relative overflow-hidden w-full group">
                    {/* Left and Right Fade Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="flex gap-6 md:gap-10 animate-infinite-scroll group-hover:[animation-play-state:paused] w-max px-10">
                        {displayServices.map((svc, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[320px] md:w-[450px] group/card relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-xl transition-all duration-500"
                            >
                                <div className="h-56 md:h-72 overflow-hidden relative">
                                    <img
                                        src={svc.image}
                                        alt={svc.title}
                                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/10 transition-colors"></div>
                                </div>
                                <Link to="/services" className="p-8 md:p-10 block cursor-pointer">
                                    <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight text-dark">
                                        {svc.title}
                                    </h3>
                                    <p className="text-secondary leading-relaxed font-medium italic text-sm md:text-base opacity-75 line-clamp-2">
                                        {svc.desc}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px]">
                                        Explore <ArrowRight size={14} />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Continuous Scroll CSS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes infinite-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 20px)); } /* 50% width + half gap */
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 40s linear infinite;
                }
                /* Adjustment for gaps on different screen sizes */
                @media (max-width: 768px) {
                    @keyframes infinite-scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-50% - 12px)); }
                    }
                    .animate-infinite-scroll {
                        animation-duration: 30s;
                    }
                }
            `}} />
        </div>
    )
}

export default Home
