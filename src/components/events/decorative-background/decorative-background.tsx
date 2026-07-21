import Background from "@/components/home/background/background";
import Image from "next/image";

export default function DecorativeBackground(){
    return <>
        <Background />
        <div className="absolute inset-0 z-10 md:max-h-[50rem] overflow-hidden">
            <Image
                src={"/afriai-events-pictures.png"}
                alt="afriAI events"
                fill
                quality={75}
                priority
                className="object-cover mt-32 object-top md:max-h-[50rem]"
            />
        </div>
    </>
}