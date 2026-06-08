import React from "react";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Spotlights */}
      <div className="absolute inset-0">
        <Spotlight className="top-40 left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px]",
          "bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]"
        )}
      />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center">
        <h2 className="uppercase tracking-widest text-xs md:text-sm text-blue-100 mb-2">
          dynamic magic
        </h2>

        <TextGenerateEffect
          className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
          words="Transforming concepts into seamless user experiences"
        />

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-lg lg:text-xl tracking-wide leading-relaxed max-w-xl">
          Hi, I&apos;m Marya — a passionate Next.js Developer crafting immersive digital journeys.
        </p>

        <a href="#about" className="mt-6">
          <MagicButton 
            title="Show My Work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;