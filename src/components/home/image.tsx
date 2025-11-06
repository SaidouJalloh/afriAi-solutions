import Image from "next/image";

export default function ImageComponent() {
    return (
        <div className="relative">
            <Image src="/man-holding-laptop.png" alt="man holding laptop" width={692} height={674} />
        </div>
    );
}
