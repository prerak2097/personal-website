"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>      
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-3xl sm: lg:text-5xl font-extrabold">
                    <span>
                        Hello, I&apos;m{" "} 
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Prerak Patel',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a software engineer',
                            1000,
                            'a foodie',
                            1000,
                            'an investor',
                            1000,
                            'an experience seeker',
                            1000,
                            'based in NYC',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className = "text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Welcome to my Digital Space—a glimpse beyond the confines of a CV.
                </p>
                <div>
                <a href="http://www.linkedin.com/in/prerak2000" target="_blank">
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 hover: bg-blue-600 text-white'>
                        LinkedIn
                    </button>
                </a>
                <a
                    href="/CS.Resume.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>  
                        Download CV
                    </button>
                </a>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src={"/images/pfp6.jpeg"}
                        alt='hero image'
                        fill
                        style={{
                            objectFit: 'cover',
                            borderRadius: "250px"
                        }}                        
                    />
                </div>
            </div>
            
        </div>
    </section>
  );
};

export default HeroSection
