export default function Squares() {
    return (
        <div className="relative ">
            <div className="flex opacity-20">
                <div className="w-24 h-24 border border-stroke-square-color"></div>
                <div className="w-24 h-24 border border-stroke-square-color"></div>
                <div className="w-24 h-24 border border-stroke-square-color"></div>
            </div>
            <div className="flex opacity-20">
                <div className="w-24 h-24 border border-stroke-square-color"></div>
                <div className="w-24 h-24 border border-stroke-square-color"></div>
                <div className="w-24 h-24 border border-stroke-square-color"></div>
            </div>
            <div className="flex opacity-20">
                <div className="w-24 h-24 border border-stroke-square-color"></div>
                <div className="w-24 h-24 border border-stroke-square-color"></div>
                <div className="w-24 h-24 border border-stroke-square-color"></div>
            </div>
            <div
                className="absolute inset-0 z-10 top-0 left-0 bottom-0 w-full right-0"
                style={{
                    background:
                        "linear-gradient(140deg, rgba(43,36,140,0) 0%, rgba(43,36,140,0.9) 60%, rgba(43,36,140,1) 100%)",
                }}
            ></div>
        </div>
    );
}
