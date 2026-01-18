"use client";

import React from "react";

/**
 * A global SVG filter that creates a liquid-like distortion effect.
 * Usage: Apply `filter: url(#liquid-distortion)` to any element.
 */
export const LiquidFilter = () => {
  return (
    <svg className="hidden fixed w-0 h-0 pointer-events-none">
      <defs>
        <filter id="liquid-distortion">
          {/* Generate noise for the displacement map */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.01 0.01" 
            numOctaves="1" 
            result="noise" 
          >
             <animate 
                attributeName="baseFrequency" 
                dur="30s" 
                values="0.01 0.01;0.02 0.02;0.01 0.01" 
                repeatCount="indefinite" 
             />
          </feTurbulence>
          
          {/* Displace the source graphic using the noise */}
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="20" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
        
        <filter id="liquid-glass">
            <feTurbulence type="turbulence" baseFrequency="0.0" numOctaves="2" result="turbulence" />
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
};
