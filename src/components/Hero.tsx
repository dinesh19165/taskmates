import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="relative bg-brand-gradient text-white overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                <div className="max-w-4xl py-12 md:py-20">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                        <span className="h-0.5 w-6 md:w-12 bg-primary"></span>
                        <span className="text-accent font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm">Meet All Your Needs</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-black mb-4 md:mb-8 leading-[1.1] md:leading-[1] uppercase tracking-tighter drop-shadow-2xl">
                        Empowering Your <span className="text-primary text-2xl sm:text-5xl md:text-8xl block md:inline">Business</span> Operations
                    </h1>
                    <p className="text-base md:text-2xl mb-8 md:mb-12 max-w-2xl opacity-90 font-medium leading-relaxed border-l-4 border-primary pl-4 md:pl-6">
                        Premier provider of <span className="text-white font-bold">Skilled Manpower</span>, <span className="text-white font-bold">Office Supplies</span>, and <span className="text-white font-bold">Corporate Event Management</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        <Link to="/services" className="bg-primary text-white px-8 md:px-12 py-3.5 md:py-5 rounded-none font-black uppercase tracking-widest hover:bg-white hover:text-dark transition-all duration-300 text-xs md:text-sm shadow-2xl inline-block text-center">
                            Explore Services
                        </Link>
                        <Link to="/contact" className="border-2 border-white text-white px-8 md:px-12 py-3.5 md:py-5 rounded-none font-black uppercase tracking-widest hover:bg-primary hover:border-primary transition-all duration-300 text-xs md:text-sm inline-block text-center">
                            Get A Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
