import Image from "next/image";
import SharpQuestionIcon from "../ui/svgs/sharp-question";

export default function FAQ() {
    return (
        <section className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto mt-20 flex md:justify-between justify-center gap-10 md:flex-nowrap flex-wrap">
            {/* images container */}
            <div className="relative md:p-0 pr-[5.1rem] md:max-w-[40%] max-w-full">
                <div className="relative w-auto">
                    {/* icon "?" */}
                    <span className="absolute z-10 top-10 -right-6 py-4 px-4 text-white bg-afri-primary rounded-md shadow-md">
                        <SharpQuestionIcon className="w-6 h-6" />
                    </span>

                    {/* image top */}
                    <Image
                        src={"/man-at-work.jpg"}
                        alt="man at work"
                        width={600}
                        height={400}
                        className="bg-black/10 rounded-lg w-[20.5rem] aspect-[335/419] object-cover shadow-md"
                    />
                    {/* image bottom */}
                    <Image
                        src={"/man-at-work-smoking.jpg"}
                        alt="man at work"
                        width={600}
                        height={400}
                        className="bg-black/10 rounded-md w-[10rem] aspect-[154/182] object-cover shadow-sm absolute -bottom-4 -right-20 [object-position:15%_40%]"
                    />
                </div>
            </div>
        </section>
    );
}
