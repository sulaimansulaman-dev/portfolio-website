import { useState, useRef, useEffect } from "react";
import TVFlipTransition from "./effects/TVFlipTransition";

export default function CRTContainer({
  children,
  onNext,
  onPrev,
  onSelectChannel,
  currentChannel,
  channelNames,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const setHeight = () => {
      if (containerRef.current) {
        containerRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-black">
      <div className="relative w-full h-full">
        {/* TV Frame */}
        <img
          src="/CRTTV.png"
          alt="CRT TV"
          className="absolute inset-0 w-full h-full object-fill z-10 pointer-events-none"
        />

        {/* CRT Screen */}
        <div
          className="absolute z-20 bg-black text-green-400 font-mono text-sm p-5 leading-relaxed rounded-[20px] overflow-hidden"
          style={{
            top: "9%",
            left: "2%",
            width: "86.5%",
            height: "66%",
          }}
        >
          <div className="w-full h-full relative fisheye">
            {children}
            <div className="crt-effect absolute inset-0" />
          </div>
        </div>

        {/* Buttons on TV Panel */}
        <div
          className="absolute z-30 w-full flex justify-center"
          style={{
            bottom: "5%", // fine-tune based on CRTTV.png layout
            left: "7%",
          }}
        >
          <div
            className="flex flex-wrap justify-center gap-2 px-4"
            style={{
              maxWidth: "800px", // wraps after this width
              width: "100%",
            }}
          >
            {/* Prev Button */}
            <button
              onClick={onPrev}
              className="bg-gray-300 text-white font-mono px-2 py-0.5 rounded-md text-xs sm:text-sm hover:bg-gray-400 active:shadow-inner active:ring-2 active:ring-black"
            >
              ◀ Previous
            </button>

            {/* Channel Buttons */}
            {channelNames.map((name, i) => (
              <button
                key={i}
                onClick={() => onSelectChannel(i)}
                className={`px-2 py-0.5 rounded-md font-mono text-xs sm:text-sm whitespace-nowrap transition-all ${
                  currentChannel === i
                    ? "bg-green-400 text-white shadow-inner ring-2 ring-black"
                    : "bg-gray-300 text-white hover:bg-gray-400 active:shadow-inner active:ring-2 active:ring-black"
                }`}
              >
                {`Channel ${i + 1}: ${name}`}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={onNext}
              className="bg-gray-300 text-white font-mono px-2 py-0.5 rounded-md text-xs sm:text-sm hover:bg-gray-400 active:shadow-inner active:ring-2 active:ring-black"
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
