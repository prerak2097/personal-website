"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "public/images/SocialsLogos/github-icon.svg";
import LinkedinIcon from "public/images/SocialsLogos/linkedin-icon.svg";
import InstagramIcon from "public/images/SocialsLogos/instagram-icon.svg";

const EmailSection = () => {
  return (
    <section
      id="connect"
      className="my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10 flex justify-center">
            <h6 className="text-xl font-bold text-white my-2">
                prerak.patel2097@gmail.com
            </h6>
        </div>
      <div className="z-10 flex justify-center">
            <Link href="https://github.com/prerak2097" target="_blank">
                <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.instagram.com/_prerakpatel/" target="_blank">
                <Image src={InstagramIcon} alt="Instagram Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/prerak2000" target="_blank">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
        </div>
    </section>
  );
};

export default EmailSection;