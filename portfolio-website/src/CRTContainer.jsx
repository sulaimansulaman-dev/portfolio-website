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
          className="absolute z-20 bg-black text-green-400 font-mono text-sm leading-relaxed rounded-[20px]"
          style={{
            top: "9%",
            left: "2%",
            width: "86.5%",
            height: "66%",
          }}
        >
          <div className="relative w-full h-full overflow-y-auto pr-3">
            {children}
            <div className="crt-effect absolute inset-0 pointer-events-none" />
          </div>
        </div>

        {/* Buttons on TV Panel */}
        <div
          className="absolute z-30 flex justify-center w-full px-2 sm:px-4"
          style={{
            bottom: "6%",
            left: "0%",
          }}
        >
          <div
            className="flex gap-2 overflow-x-auto px-1 sm:px-4 py-1 w-full max-w-[88%] sm:max-w-[90%]"
            style={{
              justifyContent: "left",
              flexWrap: "nowrap",
            
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
                className={`px-2 py-0.5 rounded-md font-mono text-xs sm:text-sm whitespace-nowrap min-w-fit transition-all ${
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
