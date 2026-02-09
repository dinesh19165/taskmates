import { useForm } from 'react-hook-form';
import { contactService } from '../services/api';
import toast from 'react-hot-toast';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

interface ContactForm {
    name: string;
    phone: string;
    email: string;
    message: string;
}

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>();

    const onSubmit = async (data: ContactForm) => {
        try {
            await contactService.submit(data);
            toast.success('Inquiry sent successfully!');
            reset();
        } catch (error) {
            toast.error('Failed to send inquiry. Please try again.');
        }
    };

    return (
        <div className="bg-white overflow-hidden">
            <SEO
                title="Contact Us"
                description="Get in touch with Task Support Solutions Pvt Ltd for premium manpower, stationery, and event management inquiries."
            />
            <PageHeader
                title="Get In"
                accentTitle="Touch"
                imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
                subtitle="Experience the next level of corporate support. Our team is ready to assist you with tailored solutions."
            />
            <div className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                    <div className="order-2 md:order-1">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-8 md:w-12 bg-primary"></span>
                            <span className="text-primary font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">Contact Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 uppercase tracking-tighter">Let's <span className="text-accent">Connect</span></h2>

                        <div className="space-y-6 md:space-y-10">
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm text-primary flex-shrink-0">
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-black text-dark uppercase tracking-widest text-[10px] mb-1">Corporate Office</h4>
                                    <p className="text-secondary text-sm md:text-base font-bold italic">LB Nagar near Metro Station, Hyderabad - 500074</p>
                                </div>
                            </div>
                            {/* ... other contact methods adjusted similarly if needed ... */}
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm text-primary flex-shrink-0">
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-black text-dark uppercase tracking-widest text-[10px] mb-1">Phone Inquiry</h4>
                                    <p className="text-secondary text-sm md:text-base font-bold italic">+91 96034 78212</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm text-primary flex-shrink-0">
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-black text-dark uppercase tracking-widest text-[10px] mb-1">Email Support</h4>
                                    <p className="text-secondary text-sm md:text-base font-bold italic">contact@tasksupport.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative order-1 md:order-2">
                        <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl"></div>
                        <form onSubmit={handleSubmit(onSubmit)} className="relative bg-white border border-gray-100 p-6 md:p-10 rounded-2xl shadow-2xl space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-dark">Full Name</label>
                                    <input
                                        {...register('name', { required: 'Name is required' })}
                                        className={`w-full p-4 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                                        placeholder="Rahul Sharma"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-dark">Phone Number</label>
                                    <input
                                        {...register('phone', { required: 'Phone is required' })}
                                        className={`w-full p-4 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
                                        placeholder="+91 96034 78212"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-dark">Email Address</label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                                    })}
                                    className={`w-full p-4 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                                    placeholder="name@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-dark">How can we help?</label>
                                <textarea
                                    {...register('message', { required: 'Message is required' })}
                                    rows={4}
                                    className={`w-full p-4 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                                    placeholder="Describe your needs..."
                                ></textarea>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="w-full bg-dark text-white py-4 md:py-5 rounded-lg font-black uppercase tracking-widest hover:bg-primary transition-all duration-300 disabled:opacity-50 shadow-xl text-xs md:text-sm"
                            >
                                {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
