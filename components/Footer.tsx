import { socialMedia } from "@/data";
import { site } from "@/lib/site";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-10 relative z-20" id="contact">
      <div className="w-full absolute left-0 -bottom-72 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center w-full text-white px-4 lg:px-0">
        <h2 className="heading text-center lg:max-w-[45vw] sm:max-w-[65vw] max-w-[90vw]">
          Ready to take on new <span className="text-green-500">challenges</span>
        </h2>
        <p className="md:mt-10 my-5 text-center text-gray-300 max-w-[90vw]">
          Open to production roles, freelance work, and product collaboration.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="text-green-400 hover:text-green-300 underline-offset-4 hover:underline"
        >
          {site.email}
        </a>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full mt-16 px-4 lg:px-0">
        <p className="md:text-base text-sm font-light text-center md:text-left mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} {site.name} | All rights reserved
        </p>

        <div className="flex items-center md:gap-3 gap-4">
          {socialMedia.map((profile) => (
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              key={profile.id}
              aria-label={profile.name}
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 rounded-lg border border-gray-600 hover:bg-opacity-100 transition-opacity"
            >
              <img src={profile.img} alt="" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
