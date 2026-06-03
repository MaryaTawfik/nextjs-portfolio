import React from "react";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* SPOTLIGHTS (background layer) */}
      <div className="absolute inset-0">
        <Spotlight
          className="top-40 left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* GRID BACKGROUND (THE IMPORTANT FIX) */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          // LIGHT MODE GRID
          "bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]",
          // DARK MODE GRID
          "dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]",
        )}
      />

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}

      {/* CONTENT (NOW COMPLETELY INDEPENDENT) */}
      {/* <div className="relative z-20 flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Backgrounds
        </h1>
      </div> */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        {/* <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60 vw] felx flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            dynamic magic
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="transforming concept into seamless experience"
          />
        </div> */
        }
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
  
  <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
    dynamic magic
  </h2>

  <div className="max-w-5xl w-full md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
    <TextGenerateEffect
      className="text-center text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
      words="transforming concept into seamless user experience"
    />
    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text2xl">
      Hi I&apos;m Marya , next.js Developer
    </p>
    <a href="#about">
      <MagicButton 
      title="show my work
      "/>
    </a>
  </div>

</div>
      </div>
    </div>
  );
};

export default Hero;
