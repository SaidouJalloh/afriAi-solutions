"use client";
import Link from "next/link";
import { scrollToSection } from "@/utils/scroll-to-section";

interface NavLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    prefix?: string;
}

export default function NavLink({ href, className, children, onClick, prefix }: NavLinkProps) {
    if (href.startsWith("#")) {
        if (prefix !== undefined) {
            return (
                <Link href={`${prefix}${href}`} className={className} onClick={onClick}>
                    {children}
                </Link>
            );
        }

        const handleClick = () => {
            scrollToSection(href);
            onClick?.();
        };
        return (
            <button type="button" onClick={handleClick} className={className}>
                {children}
            </button>
        );
    }

    return (
        <Link href={href} className={className} onClick={onClick}>
            {children}
        </Link>
    );
}
