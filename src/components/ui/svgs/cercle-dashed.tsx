export default function CercleDashedIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}>
            <circle
                cx="7"
                cy="7"
                r="6.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="0.1"
                strokeDasharray="0.4 0.4"
            />
        </svg>
    );
}
