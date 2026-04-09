import React from "react";

export default function TwitterLogoIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
            <rect width="256" height="256" fill="#000" rx="60" />
            <path
                fill="#FFF"
                d="M139.4 122.3L213.3 37h-17.5l-64.2 73.7L80.2 37H21l77.5 112.8L21 236h17.5l67.7-77.8L159.8 236h59.2l-80.1-116.5zM115.1 148l-7.8-11.2L44.7 49.3h26.9l50.4 72.3l7.8 11.2l64.5 92.4h-26.9l-52.3-77.2z"
            />
        </svg>
    );
}