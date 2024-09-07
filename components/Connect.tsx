"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export default function Connect() {
  return (
    <div className="flex flex-col items-center justify-center mt-14 mb-11" id="contact">
      <div className="flex flex-col justify-center items-center gap-4"> {/* Reduced gap from 8 to 4 */}
        <LampContainer>
          <motion.h2
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Interested in building something amazing together? Let's connect!
          </motion.h2>

        </LampContainer>

  
        {/* MagicButton placed outside of h2 for better structure */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="-mt-52"
        >
          <MagicButton
            title="Let's connect"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="px-8 py-3"
          />
        </motion.div>
      </div>
    </div>
  );
}
