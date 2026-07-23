import Background from "@/components/home/background/background";
import Image from "next/image";

export default function DecorativeBackground(){
    return <>
        <Background />
        <div className="absolute inset-0 z-10 max-h-[50rem] overflow-hidden">
            {/* Desktop */}
            <Image
                src={"/afriai-events-pictures.png"}
                alt="afriAI events"
                quality={75}
                width={1440}
                height={1089}
                priority
                className="hidden lg:block w-full h-full object-cover mt-32 object-left-top md:max-h-[50rem]"
            />
            {/* Tablette (md) */}
            <Image
                src={"/afriai-events-md.png"}
                alt="afriAI events"
                quality={75}
                width={1440}
                height={1089}
                priority
                className="hidden md:block lg:hidden w-full h-[75%] object-cover mt-32 object-left-top md:max-h-[50rem]"
            />
            {/* Mobile */}
            <Image
                src={"/afriai-events-mobile.png"}
                alt="afriAI events"
                quality={75}
                width={768}
                height={1000}
                priority
                className="block md:hidden w-full h-[60%] object-cover mt-32 object-left-top"
            />
        </div>
    </>
}