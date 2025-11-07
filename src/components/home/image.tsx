import Image from "next/image";

export default function ImageComponent() {
    return (
        <div className="relative lg:w-[43.25rem] md:w-[28.125rem] w-[22rem] lg:h-[42.125rem] md:h-[28.125rem] h-[23.3rem] flex items-end">
            <Image src="/man-holding-laptop.png" alt="man holding laptop" width={692} height={674} />
        </div>
    );
}
