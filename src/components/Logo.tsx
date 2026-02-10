import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    variant?: 'light' | 'dark';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
    const textColor = variant === 'light' ? 'text-white' : 'text-dark';
    const taglineColor = variant === 'light' ? 'text-gray-300' : 'text-gray-500';

    return (
        <Link to="/" className={`flex items-center gap-1.5 md:gap-3 group whitespace-nowrap ${className}`}>
            {/* Official Logo Icon Recreated with SVG */}
            <svg
                viewBox="0 0 100 100"
                className="w-8 h-8 md:w-12 md:h-12 drop-shadow-sm"
            >
                <rect x="15" y="15" width="70" height="70" rx="12" fill="none" stroke="#2D2D2D" strokeWidth="12" className="opacity-10" />
                {/* Top Half - Light Blue */}
                <path
                    d="M15 50 V27 C15 20.3726 20.3726 15 27 15 H73 C79.6274 15 85 20.3726 85 27 V50"
                    fill="none"
                    stroke="#00B4FF"
                    strokeWidth="12"
                    strokeLinecap="round"
                />
                {/* Bottom Half - Dark Gray */}
                <path
                    d="M85 50 V73 C85 79.6274 79.6274 85 73 85 H27 C20.3726 85 15 79.6274 15 73 V50"
                    fill="none"
                    stroke="#2D2D2D"
                    strokeWidth="12"
                    strokeLinecap="round"
                />
            </svg>

            <div className="flex flex-col">
                <div className="flex items-baseline gap-1 md:gap-1.5">
                    <span className={`text-[13px] md:text-xl font-black ${textColor} leading-none tracking-tight uppercase`}>
                        Task Support
                    </span>
                    <span className="text-[13px] md:text-xl font-black text-accent leading-none tracking-tight uppercase">
                        Solutions
                    </span>
                </div>
                <span className={`text-[7px] md:text-[9px] font-bold ${taglineColor} tracking-[0.2em] md:tracking-[0.4em] uppercase mt-0.5 md:mt-1`}>
                    Meet All Your Needs
                </span>
            </div>
        </Link>
    );
};

export default Logo;
