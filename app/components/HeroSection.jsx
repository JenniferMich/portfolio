"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-pink-700 to-pink-700">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Jennifer",
                1000,
                "Student of UTSOE",
                1000,
                "Web Designer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate about bringing mobile applications to life, from concept to code. 
            I specialize in crafting intuitive user interfaces with Figma and implementing sleek, responsive frontends.
            Always eager to embrace new technologies and push the boundaries of what&apos;s possible in the mobile and gaming landscapes.
          </p>
          <div>
            <a
              href="/images/projects/cursos_merged.pdf" 
              download="documentation.pdf" 
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-950 via-pink-950 to-pink-700 hover:bg-slate-200 text-white inline-block text-center"
            >
              Documentation
            </a>
            <a
              href="/images/projects/CVenglishversion.pdf" 
              download="CVenglishversion.pdf" 
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-950 via-pink-950 to-pink-700 hover:bg-slate-200 text-white mt-3 inline-block text-center"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV english
              </span>
            </a>
            <a
              href="/images/projects/CV.pdf" 
              download="Currículum Vitae JMCL.pdf" 
              className="px-1 py-1 w-full sm:w-fit rounded-full ml-4 bg-gradient-to-br from-red-950 via-pink-950 to-pink-700 hover:bg-slate-200 text-white mt-3 inline-block text-center"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV spanish
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image 
              src="/images/perfil2.png" 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300} 
              height={300} 
              alt="Hero Image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
