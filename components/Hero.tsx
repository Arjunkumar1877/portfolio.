"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 relative">
      <div className="flex flex-col items-center justify-center relative z-10">
        <h1 className="sr-only">
          Arjun Kumar VS, Full-Stack Engineer based in India
        </h1>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl mt-14"
          words="Hi, I'm Arjun, Full-Stack Engineer based in India"
        />

        <TextGenerateEffect
          className="text-center md:tracking-wider mb-4 text-2xl md:text-2xl lg:text-4xl font-semibold"
          words="Building production products with TypeScript"
        />

        <MagicButton
          title="View selected work"
          icon={<FaLocationArrow />}
          position="right"
          href="#projects"
        />
      </div>
    </WavyBackground>
  );
};

export default Hero;
