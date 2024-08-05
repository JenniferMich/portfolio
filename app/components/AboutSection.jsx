"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import GiftIcon from "../../public/gifterandi.gif"; // Asegúrate de que este es el archivo GIF animado

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (() => {
      const skills = [
        "HTML", "CSS", "MySQL", "JavaScript", "Kubernetes", "Flutter",
        "Python", "Illustrador", "Photoshop", "DaVinci Resolve", "InDesign",
        "Godot", "Aseprite", "Figma", "Github"
      ];
    
      const middleIndex = Math.ceil(skills.length / 2);
      const firstHalf = skills.slice(0, middleIndex);
      const secondHalf = skills.slice(middleIndex);
    
      return (
        <div className="flex">
          <ul className="list-disc pl-2">
            {firstHalf.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <ul className="list-disc pl-2 ml-16">
            {secondHalf.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      );
    })()
  },
  {
    title: "Soft Skills",
    id: "Soft Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Communication</li>
        <li>Leadership</li>
        <li>Adaptability</li>
        <li>Creativity</li>
        <li>Responsability</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "Hobbies",
    content: (
      <ul className="list-disc pl-2">
        <li>Read romance and psychological horror books </li>
        <li>Paint and design new scenarios for video games</li>
        <li>Make desserts especially chocolate cookies</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad De La Salle Bajío, Salamanca, Gto. [2015-2018] -• Bachelor's degree in physical mathematics </li>
        <li>Universidad De Guanajuato, Guanajuato, Gto [2018--]-Incomplete degree in Graphic Design</li>
        <li>UTSOE, Valle de Santiago, Gto [2021-2023]-TSU.Information technologies software development area</li>
        <li>UTSOE, Valle de Santiago, Gto [2023-present]- Software Development and Management Engineer</li>
        <li>Université de Pau et des pays de l'Adour, Pays de l'Adour [2023-present]-License Professionnelle System and Network Administration (LP – ASR)</li>
      </ul>
    ),
  },
  {
    title: "Courses",
    id: "Courses",
    content: (
      <ul className="list-disc pl-2">
        <li>NDG Linux Essentials - LinuxFoundationX</li>
        <li>Tecnolochicas PRO </li>
        <li>A Complete Guide to Game Design - HP</li>
        <li>Introduction to Kubernetes - LinuxFoundationX</li>
        <li>International Strategic Leadership - AnahuacX</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "Languages",
    content: (
      <ul className="list-disc pl-2">
        <li>English B2</li>
        <li>French A2</li>
      </ul>
    ),
  },
  {
    title: "I´m learning...",
    id: "I´m learning...",
    content: (
      <ul className="list-disc pl-2">
        <li>Low Poly Environment Modeling for Video Games- Domestika</li>
        <li>Google Professional Certificate in Cybersecurity</li>
        <li>React</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image
            src={GiftIcon}
            alt="Gift Icon"
            width={500} // Ajusta el tamaño del GIF según lo desees
            height={500} // Ajusta el tamaño del GIF según lo desees
            className="w-70 h-70" // Ajusta el tamaño del GIF según lo desees
          />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a proactive, responsible, and passionate person with a drive for creating interactive and responsive web applications.
           I'm a quick learner, always looking to expand my knowledge and skill set. 
           As a team player, I'm excited to collaborate with others to create amazing applications.
          With my Associate's Degree in Information Technology with a focus on Software Development from UTSOE, I combine my technical training with my passion for web development to deliver innovative and efficient solutions.
          </p>
          <div className="flex flex-wrap justify-start mt-8 gap-2">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
              className="text-sm py-1 px-2 mb-2"
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Soft Skills")}
              active={tab === "Soft Skills"}
              className="text-sm py-1 px-2 mb-2"
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Hobbies")}
              active={tab === "Hobbies"}
              className="text-sm py-1 px-2 mb-2"
            >
              {" "}
              Hobbies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
              className="text-sm py-1 px-2 mb-2"
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Courses")}
              active={tab === "Courses"}
              className="text-sm py-1 px-2 mb-2"
            >
              {" "}
              Courses{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Languages")}
              active={tab === "Languages"}
              className="text-sm py-1 px-2 mb-2"
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("I´m learning...")}
              active={tab === "I´m learning..."}
              className="text-sm py-1 px-2 mb-2"
            >
              {" "}
              I´m learning...{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;