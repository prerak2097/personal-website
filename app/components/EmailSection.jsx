"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "public/images/SocialsLogos/github-icon.svg";
import LinkedinIcon from "public/images/SocialsLogos/linkedin-icon.svg";
import InstagramIcon from "public/images/SocialsLogos/instagram-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      senderEmail: e.target.email.value,
      senderSubject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "https://mfr8e2dj14.execute-api.us-east-1.amazonaws.com/default/SendContactEmail";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      mode: 'no-cors',
      // Tell the server we're sending JSON.
      headers: {
        
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    fetch(endpoint, options)
    .then((response) => {
      setEmailSubmitted(true);
    })
    .catch((error) => {
      console.log("Some Error Occurred")
    });
  };

  return (
    <section
      id="connect"
      className="my-12 md:my-12 py-24 gap-4 relative "
    >
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
      <div className="z-10 flex justify-center p-4">
        {emailSubmitted ? (
          <p className="text-blue-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col p-4 w-screen" onSubmit={handleSubmit}>
            <div className="mb-8">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;