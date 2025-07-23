// src/CRTContainer.jsx
import React from "react";
import "./effects/CRTOverlay.css"; // Make sure this path is correct

export default function CRTContainer({ children }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {children}
      <div className="crt-effect" />
    </div>
  );
}
