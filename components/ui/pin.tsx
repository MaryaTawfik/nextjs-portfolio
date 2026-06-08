"use client";
import React from "react";
import { PinContainer } from "./3d-pin"; 

interface PinProps {
  title: string;
  des: string;
  img: string;
  link?: string;
  children?: React.ReactNode; // 💡 Added this line to allow children
}

export function AnimatedPinDemo({ title, des, img, link, children }: PinProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <PinContainer
        title={link || "/ui.aceternity.com"}
        href={link || "https://twitter.com/mannupaaji"}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          {/* 💡 We render the children here now instead of the hardcoded layout */}
          {children} 
        </div>
      </PinContainer>
    </div>
  );
}