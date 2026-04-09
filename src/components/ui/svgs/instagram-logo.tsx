import React from "react";

export default function InstagramLogoIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
            <defs>
                <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
            </defs>
            <rect width="256" height="256" fill="url(#instaGradient)" rx="60" />
            <g fill="none" stroke="#FFF" strokeWidth="16">
                <rect x="52" y="52" width="152" height="152" rx="40" />
                <circle cx="128" cy="128" r="36" />
                <circle cx="184" cy="72" r="8" fill="#FFF" stroke="none" />
            </g>
        </svg>
    );
}