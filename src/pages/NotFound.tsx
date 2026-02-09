import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-brand-gradient flex items-center justify-center px-4 text-center overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
                <h1 className="text-9xl font-black text-white mb-4 opacity-20 tracking-tighter">404</h1>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter mt-[-4rem]">Lost In <span className="text-primary italic">Space</span></h2>
                <p className="text-gray-300 mb-10 text-lg md:text-xl font-medium italic max-w-md mx-auto">The page you're searching for has either been relocated or doesn't exist.</p>
                <Link to="/" className="bg-primary text-white px-10 py-5 rounded-none font-black uppercase tracking-widest transition-all hover:bg-white hover:text-dark inline-block shadow-2xl">
                    Back to Reality
                </Link>
            </div>
        </div>
    )
}

export default NotFound
