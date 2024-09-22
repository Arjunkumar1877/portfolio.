import { socialMedia } from '@/data'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full py-10 relative z-20' id='contact'>
      <div className="w-full absolute left-0 -bottom-72 pointer-events-none">
        <img src="/footer-grid.svg" alt="decorative grid" className='w-full h-full opacity-50' />
      </div>

      <div className="flex flex-col items-center w-full text-white px-4 lg:px-0">
        <h1 className="heading text-center lg:max-w-[45vw] sm:max-w-[65vw] max-w-[90vw]">
          Ready to take on new <span className='text-green-500'>Challenges</span>
        </h1>
        <p className='md:mt-10 my-5 text-center text-gray-300 max-w-[90vw]'>
          Get in touch today to explore how I can assist you in achieving your goals.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full mt-16 px-4 lg:px-0">
        <p className="md:text-base text-sm font-light text-center md:text-left mt-4 md:mt-0">
          &copy; 2024 Arjun Kumar vs | All rights reserved
        </p>

        <div className="flex items-center md:gap-3 gap-4">
          {socialMedia.map((profile: any) => (
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              key={profile.id}
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 rounded-lg border border-gray-600 hover:bg-opacity-100 transition-opacity"
            >
              <img src={profile.img} alt={profile.name || "social icon"} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
