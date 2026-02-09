import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="bg-brand-gradient text-white py-20 px-4 border-t-8 border-brand-deep">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-left">
                <div className="col-span-2">
                    <Logo variant="light" className="mb-6" />
                    <p className="text-gray-400 max-w-sm italic mb-8">
                        Your trusted partner for corporate manpower, stationery supplies, and event management services. Excellence in every task.
                    </p>
                </div>
                <div>
                    <h4 className="font-black italic uppercase tracking-widest mb-6 text-primary">Quick Links</h4>
                    <ul className="space-y-3 text-gray-400 font-bold italic">
                        <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                        <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                        <li><a href="/why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
                        <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                        <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-black italic uppercase tracking-widest mb-6 text-primary">Contact Info</h4>
                    <ul className="space-y-4 text-gray-400 font-bold italic">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            info@tasksupport.com
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            +91 96034 78212
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            LB Nagar, Hyderabad
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 text-center text-gray-500 text-xs font-bold uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} TASK SUPPORT SOLUTIONS PVT LTD. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
