"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('arjun.tech177@gmail.com');
    setCopied(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Arjun kumar vs (MERN stack).pdf';
    link.download = 'Arjun_kumar_vs_MERN_stack.pdf';
    link.click();

    setDownloaded(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  bg-white justify-between flex flex-col space-y-4 border-white/[0.1]",
        className
      )}
      style={{
        backgroundColor: "rgb(1,28,12)",
        background:
          "linear-gradient(90deg, rgba(1,28,12,0.9641106442577031) 0%, rgba(6,17,49,1) 50%, rgba(7,29,16,1) 100%)",
      }}
    >


      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg mb-2 lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id === 1 && (
            !downloaded && (
              <button
                onClick={handleDownloadResume}
                className="inline-flex h-12 w-full max-w-xs md:max-w-sm lg:max-w-md animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 md:px-6 font-medium text-slate-100 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:bg-[linear-gradient(110deg,#1e2631,45%,#000103,55%,#1e2631)] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Download Resume
              </button>
            )
          )}

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 w-fit absolute -right-3 lg:-right-1">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 ">
                {['Typescript', 'React.js', 'Next.js'].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 ">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                {['Node.js', 'Mongo.Db', 'Express.js'].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYm slice'
                    }
                  }}
                />
              </div>
              <MagicButton
                title={copied ? 'Email copied' : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
