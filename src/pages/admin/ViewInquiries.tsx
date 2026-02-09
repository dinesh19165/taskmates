const ViewInquiries = () => {
    const inquiries = [
        { id: 1, name: 'Amit Kumar', email: 'amit@example.com', phone: '9812345670', message: 'Looking for 50 security guards for event.', date: '2024-03-12' },
        { id: 2, name: 'Sonal Singh', email: 'sonal@bizcorp.in', phone: '8812300456', message: 'Need bulk stationery for new office.', date: '2024-03-11' },
        { id: 3, name: 'Rahul Verma', email: 'rahul@events.com', phone: '7766554433', message: 'Corporate meeting management inquiry.', date: '2024-03-10' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Contact Inquiries</h1>

            <div className="space-y-6">
                {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="bg-white p-6 rounded-xl border shadow-sm hover:border-primary/30 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold">{inquiry.name}</h3>
                                <p className="text-primary text-sm font-semibold">{inquiry.email} | {inquiry.phone}</p>
                            </div>
                            <span className="text-gray-400 text-sm">{inquiry.date}</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-gray-700 italic border-l-4 border-primary">
                            "{inquiry.message}"
                        </div>
                        <div className="mt-4 flex gap-4">
                            <button className="text-sm font-bold text-primary hover:underline">Mark as Read</button>
                            <button className="text-sm font-bold text-red-500 hover:underline">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewInquiries
