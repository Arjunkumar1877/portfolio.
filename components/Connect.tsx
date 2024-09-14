"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";


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
            Interested in building something amazing together?
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
          <a href="mailto:arjun.tech177@gmail.com">


          <button     className="z-30 relative shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Let&apos;s connect
</button>

          </a>
        </motion.div>
      </div>
    </div>
  );
}
