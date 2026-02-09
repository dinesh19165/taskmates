import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Logo from '../../components/Logo';

const Login = () => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (_data: any) => {
        try {
            // Simulate API call for now since no backend
            // await authService.login(data);

            // For demo purposes, any login works
            localStorage.setItem('token', 'fake-jwt-token');
            toast.success('Login Successful');
            navigate('/admin/dashboard');
        } catch (error) {
            toast.error('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-brand-gradient flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px] animate-pulse"></div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm w-full max-w-md p-10 md:p-12 rounded-2xl shadow-2xl relative z-10 border border-white/20">
                <div className="text-center mb-10 md:mb-12 flex justify-center">
                    <Logo />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-dark">Access Email</label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            className="w-full p-4 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="admin@tasksupport.com"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-dark">Security Password</label>
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            className="w-full p-4 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        disabled={isSubmitting}
                        className="w-full bg-dark text-white py-5 rounded-lg font-black uppercase tracking-widest hover:bg-primary transition-all duration-300 disabled:opacity-50 shadow-xl"
                    >
                        {isSubmitting ? 'Verifying Access...' : 'Enter Dashboard'}
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <Link to="/" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">
                        ← Back to Public Website
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
