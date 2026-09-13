import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/Moving-Boarders";

const Experience = () => {
  return (
    <section className="py-20" id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="heading">
        My <span className="text-green-500">work experience</span>
      </h2>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            as="article"
            borderRadius="1.75rem"
            className="flex-1 text-white  border-slate-800 bg-gradient-to-b from-[#131c4a] to-[#000000]"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h2>
                {card.period && (
                  <p className="text-start text-green-400 mt-1 text-sm font-medium">
                    {card.period}
                  </p>
                )}
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
