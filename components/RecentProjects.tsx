import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projects } from "@/data";

export function RecentProjects() {
  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {projects.map(({ id, title, des, img, link }) => (
          <CardContainer className="inter-var" key={id}>
            <CardBody className="relative group/card w-full h-auto rounded-xl p-6 border bg-gradient-to-b from-[#131c4a] to-[#000000] dark:border-white/[0.2] dark:bg-black dark:text-white border-black/[0.1]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-100 dark:text-white"
              >
                {title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-200 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {des}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={img}
                  height={600}
                  width={800}
                  className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={title}
                />
              </CardItem>
              <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-gray-300 dark:bg-gray-800"
                >
                  Watch a video →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Check Live Site
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
