"use client"
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projects } from "@/data";

type ProjectDataType = {
  id: number;
  title: string;
  des: string;
  img: string;
  link?: string;
  videoLink?: string;
  liveLink?: string;
};

export function RecentProjects() {
  const [projectData, setProjectData] = useState<ProjectDataType[]>(projects.slice(0, 6));

  const handleShowMore = () => {
    try {
      setProjectData(projects);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map(({ id, title, des, img, link, videoLink, liveLink }) => (
          <CardContainer className="inter-var" key={id}>
            <CardBody className="relative group/card w-full h-auto rounded-xl p-6 border bg-gradient-to-b from-[#131c4a] to-[#000000] dark:border-white/[0.2] dark:bg-black dark:text-white border-black/[0.1] transition-transform duration-300 transform hover:scale-105">
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
              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 min-h-[56px]">
                {videoLink ? (
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-gray-300 dark:bg-gray-800 w-full sm:w-auto text-center"
                  >
                    Watch a video →
                  </CardItem>
                ) : (
                  <div className="w-full sm:w-auto" />
                )}
                {liveLink ? (
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-full sm:w-auto text-center"
                  >
                    View Live Site →
                  </CardItem>
                ) : (
                  <div className="w-full sm:w-auto" />
                )}
                {link && (
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-full sm:w-auto text-center"
                  >
                    View Source Code →
                  </CardItem>
                )}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {projectData.length !== projects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default RecentProjects;
