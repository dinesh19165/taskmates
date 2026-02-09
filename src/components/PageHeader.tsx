import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    accentTitle?: string;
    imageUrl?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, accentTitle, imageUrl }) => {
    return (
        <div className="relative py-20 md:py-32 px-4 overflow-hidden bg-dark">
            {imageUrl && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            )}
            {!imageUrl && <div className="absolute inset-0 bg-brand-gradient opacity-90 z-0"></div>}

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter drop-shadow-lg leading-tight md:leading-none">
                        {title} {accentTitle && <span className="text-primary italic block md:inline">{accentTitle}</span>}
                    </h1>
                    <div className="w-16 md:w-24 h-1 md:h-1.5 bg-accent rounded-full mb-6 md:mb-8"></div>
                    {subtitle && (
                        <p className="text-gray-300 text-base md:text-xl max-w-2xl font-medium italic leading-relaxed border-l-4 border-primary pl-4 md:pl-6 mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
