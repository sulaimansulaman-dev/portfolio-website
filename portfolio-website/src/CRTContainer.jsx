
import { useState,useRef,useEffect } from "react";
import TVFlipTransition from "./effects/TVFlipTransition";
import About from "./crtcomponents/ChannelAbout";

export default function CRTContainer({
  children,
  onNext,
  onPrev,
  onSelectChannel,
  currentChannel,
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
          className="absolute z-30 flex items-center justify-center gap-2"
          style={{
            bottom: "9%",
            left: "20%",
            width: "60%",
          }}
        >
          {/* Prev Button */}
          <button
            onClick={onPrev}
            className="bg-white text-black font-mono px-3 py-1 rounded text-sm"
          >
            ◀ Previous
          </button>

          {/* Channel Buttons */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              onClick={() => onSelectChannel(i)}
              className={`px-3 py-1 rounded font-mono text-xs ${
                currentChannel === i
                  ? "bg-green-500 text-black"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={onNext}
            className="bg-white text-black font-mono px-3 py-1 rounded text-sm"
          >
            Next ▶ 
          </button>
        </div>
      </div>
    </div>
  );
}
