import Background from "@/components/home/background/background";
import Image from "next/image";

export default function DecorativeBackground(){
    return <>
        <Background />
        <div className="absolute inset-0 z-10 md:max-h-[50rem] overflow-hidden">
            <Image
                src={"/afriai-events-pictures.png"}
                alt="afriAI events"
                quality={75}
                width={1440}
                height={1089}
                priority
                className="w-full lg:h-full sm:h-[65%] h-[60%] md:h-[75%] object-cover mt-32 lg:object-top object-left-top md:max-h-[50rem]"
            />
        </div>
    </>
}