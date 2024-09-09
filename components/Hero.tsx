"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 relative">
      {/* Spotlight effects */}
      {/* <div className="relative inset-0 z-0">
       
        <Spotlight className="top-0 left-0 h-[80vh] w-[50vw] " fill="white" />

        <Spotlight className="top-0 right-0 h-[80vh] w-[50vw]" fill="white" />
      </div> */}

      {/* Hero content */}
      <div className="flex flex-col items-center justify-center relative z-10">

        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl mt-14"
          words="Hi, I&apos;m Arjun, Fullstack Developer based in India"
        />

<TextGenerateEffect
          className="text-center   md:tracking-wider mb-4 text-2xl md:text-2xl lg:text-4xl font-semibold"
          words="Crafting User Centric Experiences"
        />
        {/* <p className="text-center md:tracking-wider mb-4 text-2xl md:text-2xl lg:text-4xl font-semibold">
          Hi, I&apos;m Arjun, Fullstack Stack Developer based in India
        </p> */}

        <a href="#projects" title="Show my work">
          <MagicButton title="Show My Works" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>
    </WavyBackground>
  );
};

export default Hero;
