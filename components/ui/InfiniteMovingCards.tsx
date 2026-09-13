"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FALLBACK_ICON = "/tech/fallback.svg";

export const techIcons: Record<string, string> = {
  nodejs: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  nextjs: "https://cdn.simpleicons.org/nextdotjs/111111",
  nestjs: "https://cdn.simpleicons.org/nestjs/E0234E",
  tanstack: "https://cdn.simpleicons.org/reactquery/FF4154",
  typescript: "https://cdn.simpleicons.org/typescript/3178C6",
  zod: "https://cdn.simpleicons.org/zod/3E67B1",
  reactjs: "https://cdn.simpleicons.org/react/61DAFB",
  expressjs: "https://cdn.simpleicons.org/express/111111",
  mongodb: "https://cdn.simpleicons.org/mongodb/47A248",
  redux: "https://cdn.simpleicons.org/redux/764ABC",
  tailwind: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  docker: "https://cdn.simpleicons.org/docker/2496ED",
  cleanarch: "/tech/cleanarch.svg",
  mvc: "/tech/mvc.svg",
  socketio: "https://cdn.simpleicons.org/socketdotio/111111",
  webrtc: "https://cdn.simpleicons.org/webrtc/333333",
  zegocloud: "/tech/zegocloud.svg",
  datastructures: "/tech/datastructures.svg",
  firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
  mysql: "https://cdn.simpleicons.org/mysql/4479A1",
  pwa: "https://cdn.simpleicons.org/pwa/5A0FC8",
  electron: "https://cdn.simpleicons.org/electron/47848F",
  scss: "https://cdn.simpleicons.org/sass/CC6699",
  postman: "https://cdn.simpleicons.org/postman/FF6C37",
  insomnia: "https://cdn.simpleicons.org/insomnia/4000BF",
  cicd: "https://cdn.simpleicons.org/githubactions/2088FF",
  figma: "https://cdn.simpleicons.org/figma/F24E1E",
  zustand: "/tech/zustand.svg",
  vercel: "https://cdn.simpleicons.org/vercel/111111",
  render: "https://cdn.simpleicons.org/render/46E3B7",
  netlify: "https://cdn.simpleicons.org/netlify/00C7B7",
  twilio: "https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/twilio.svg",
  razorpay: "https://cdn.simpleicons.org/razorpay/072654",
  oauth: "https://cdn.simpleicons.org/openid/F78C40",
};
  
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    iconKey: string; // Add iconKey for matching tech icon
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[60vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[10vw] relative rounded-2xl border border-b-0 flex-shrink-0  border-slate-800 p-4 bg-gradient-to-b from-[#131c4a] to-[#000000]"
        
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 mb-3 rounded-xl bg-white flex items-center justify-center p-2">
                  <img
                    src={techIcons[item.iconKey] || FALLBACK_ICON}
                    alt={`${item.name} icon`}
                    className="w-10 h-10 object-contain"
                    onError={(event) => {
                      event.currentTarget.src = FALLBACK_ICON;
                    }}
                  />
                </div>
                <span className="text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.quote}
                </span>
                <span className="mt-2 text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
