// src/CRTContainer.jsx
import React from "react";
import "./effects/CRTOverlay.css"; // make sure this path is correct

export default function CRTContainer({ children }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="relative w-[800px] h-[600px]">
        {/* CRT TV Frame */}
        <img
          src="/CRTTV.png"
          alt="CRT TV"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
        />

        {/* CRT screen content area */}
        <div
          className="absolute z-20 bg-black text-green-400 font-mono text-sm p-5 leading-relaxed"
          style={{
            top: "55px",   // adjust based on your TV image
            left: "150px",
            width: "500px",
            height: "370px",
            overflow: "hidden",
            borderRadius: "0px",
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
