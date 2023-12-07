"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li> Software Engineer <a className='text-blue-500' href="https://www.aboutamazon.com" target="_blank">@Amazon</a></li>
                <li> Artificial Intelligence & Data Intern <a className='text-blue-500' href="https://www.verizon.com/about/our-company" target="_blank">@Verizon</a></li>
                <li> Financial Analyst Intern  <a className='text-blue-500' href="https://www.aurumpharmatech.com/about-us" target="_blank">@AurumPharmatech</a></li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li> B.S. Degree w/ Dual Major in Finance and Computer Science <a className='text-blue-500' href="https://www.business.rutgers.edu/" target="_blank">@Rutgers University</a> 2018-2022</li>
            </ul>
        )
    },
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li> Python </li>
                <li> Java </li>
                <li>C</li>
                <li>Git</li>
                <li>Amazon Web Services</li>
                <li>JavaScript: React.js, Next.js, node.js</li>
                <li>HTML + CSS</li>
                <li>SwiftUI</li>
                <li>Apache Spark</li>
                <li>SQL</li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();



    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section className='text-white' id='about'>
        <div className='md:grid md: grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/aboutmePic.png" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base md:text-lg'> 
                    I&apos;m a software engineer with a deep love for navigating the ever-changing tech landscape. I&apos;m all about learning and refining my skills with each new challenge. From coding to system architectures, I&apos;m constantly exploring what&apos;s next. I take pride in turning ideas into impactful, functional software and enjoy team environments.
                    Beyond tech, I&apos;ll be exploring the world, savoring new foods, capturing moments through photography, and eyeing financial markets.
                    Let&apos;s connect and chat about tech, travel, and all things in between.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                    > 
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}
                    > 
                        {" "}
                        Experience{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                    > 
                        {" "}
                        Education{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection