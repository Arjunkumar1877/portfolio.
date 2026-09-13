import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { testimonials } from "@/data";

const Describe = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="techs" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="heading mb-12">
        Technologies &amp; tools
      </h2>
      <div className="flex flex-col items-center justify-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
        </div>
      </div>
    </section>
  );
};

export default Describe;
