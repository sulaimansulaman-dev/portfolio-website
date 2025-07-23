import React from "react";
import "./effects/CRTOverlay.css";

export default function CRTContainer({ children }) {
  return (
    <div className="w-full h-screen bg-black overflow-hidden" style={{ height: '100dvh' }}>
      <div className="relative w-full h-full">
        {/* CRT TV Frame */}
        <img
          src="/CRTTV.png"
          alt="CRT TV"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
        />

        {/* CRT screen content area */}
        <div
          className="absolute z-20 bg-black text-green-400 font-mono text-sm p-5 leading-relaxed"
          style={{
            top: "13%",     // adjust to match image
            left: "22%",
            width: "56%",
            height: "65%",
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
