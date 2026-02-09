import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="bg-white">
            <SEO
                title="About Us"
                description="Learn about Task Support Solutions Pvt Ltd. Built on trust, quality, and operational excellence, we are your strategic corporate partner."
            />
            <PageHeader
                title="About"
                accentTitle="Us"
                imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                subtitle="TASK SUPPORT SOLUTIONS PVT LTD is built on the foundation of trust, quality, and operational excellence. We bridge the gap between business needs and professional execution."
            />
            <div className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="relative group order-2 md:order-1">
                        <div className="absolute -inset-2 md:-inset-4 bg-gray-100 rounded-2xl group-hover:bg-gray-200 transition-all"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Our Professional Team"
                            className="relative rounded-xl shadow-2xl w-full h-[350px] md:h-[500px] object-cover"
                        />
                        <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-white p-4 md:p-6 rounded-lg shadow-xl border-l-4 border-primary">
                            <span className="block text-3xl md:text-4xl font-black text-primary">10+</span>
                            <span className="text-[10px] md:text-xs font-bold text-dark tracking-widest uppercase">Years of Excellence</span>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-black text-dark mb-6 uppercase tracking-tight">Your Strategic <span className="text-primary text-lg md:text-xl block">Corporate Partner</span></h2>
                        <p className="text-secondary text-base md:text-lg mb-8 leading-relaxed font-medium italic">
                            TASK SUPPORT SOLUTIONS PVT LTD is built on the foundation of trust, quality, and operational excellence. We bridge the gap between business needs and professional execution.
                        </p>
                        <div className="space-y-4 md:space-y-6 mb-10">
                            <div className="p-4 md:p-6 bg-gray-50 rounded-xl border-l-4 border-primary shadow-sm">
                                <h4 className="font-black text-dark uppercase tracking-widest text-[10px] md:text-sm mb-2">Our Mission</h4>
                                <p className="text-secondary text-sm md:text-base leading-relaxed">To empower businesses by handling the logistical complexities of manpower and supplies, ensuring seamless growth.</p>
                            </div>
                            <div className="p-4 md:p-6 bg-gray-50 rounded-xl border-l-4 border-gray-300 shadow-sm">
                                <h4 className="font-black text-dark uppercase tracking-widest text-[10px] md:text-sm mb-2">Our Vision</h4>
                                <p className="text-secondary text-sm md:text-base leading-relaxed">To become the global benchmark for corporate support services, driven by innovation and customer-centric values.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
