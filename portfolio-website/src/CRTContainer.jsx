import React, { useEffect, useRef } from "react";
import "./effects/CRTOverlay.css";

export default function CRTContainer({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const setHeight = () => {
      if (containerRef.current) {
        containerRef.current.style.height = `${window.innerHeight}px`; // <-- FIXED
      }
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-black">
      <div className="relative w-full h-full">
        {/* CRT TV Frame filling the actual screen */}
        <img
          src="/CRTTV.png"
          alt="CRT TV"
          className="absolute inset-0 w-full h-full object-fill z-10 pointer-events-none"
        />
        

        {/* CRT screen content area */}
        <div
          className="absolute z-20 bg-black text-green-400 font-mono text-sm p-5 leading-relaxed rounded-[20px] overflow-hidden"
          style={{
            top: "9%",
            left: "2%",
            width: "86.5%",
            height: "66%",
            overflow: "hidden",
          }}
        >
          <div className="w-full h-full relative fisheye">
            {children}
            <div className="crt-effect absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}