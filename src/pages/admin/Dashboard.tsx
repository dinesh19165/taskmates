const Dashboard = () => {
    const stats = [
        { label: 'Active Services', value: '12', color: 'bg-primary' },
        { label: 'Total Inquiries', value: '48', color: 'bg-accent' },
        { label: 'System Health', value: '100%', color: 'bg-brand-purple' },
        { label: 'Cloud Status', value: 'Active', color: 'bg-brand-deep' },
    ];

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 md:mb-10 text-left">
                <h1 className="text-2xl md:text-3xl font-black text-dark uppercase tracking-tighter">System <span className="text-primary italic">Overview</span></h1>
                <div className="hidden md:block flex-1 h-[1px] bg-gray-100"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all border-b-4 border-b-transparent hover:border-b-primary text-left">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{stat.label}</p>
                        <p className="text-3xl md:text-4xl font-black text-dark tracking-tighter">{stat.value}</p>
                        <div className={`h-1.5 w-10 mt-4 md:mt-6 rounded-full ${stat.color}`}></div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-xl text-left">
                <h2 className="text-lg md:text-xl font-black text-dark mb-6 md:mb-8 uppercase tracking-tight">Recent Activity</h2>
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-gray-100 last:border-0 gap-3">
                        <div>
                            <p className="font-bold text-gray-800 text-sm md:text-base">New Inquiry from John Smith</p>
                            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">2 hours ago</p>
                        </div>
                        <span className="self-start sm:self-center text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-brand-deep text-white px-3 py-1.5 rounded-full">Contact</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-gray-100 last:border-0 gap-3">
                        <div>
                            <p className="font-bold text-gray-800 text-sm md:text-base">Service 'Outsourcing' updated</p>
                            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Yesterday at 4:30 PM</p>
                        </div>
                        <span className="self-start sm:self-center text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-brand-purple text-white px-3 py-1.5 rounded-full">Service</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
