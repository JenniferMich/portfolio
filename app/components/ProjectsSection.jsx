"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import Modal from "./Modal";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "The Awakening of the Princesses",
    description: "Video game for computers to promote tourism in Valle de Santiago. The video game is currently in development.",
    image: "/images/projects/1.png",
    tag: ["All"],
    gitUrl: "https://youtu.be/AEhqIeIdTlU",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BioProject Solar Panel Tracking System",
    description: "System for salespeople and technicians at Bioproject, tracking the status of panel sales and their stages.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Blissful: Psychiatric Medication Reminders and Anxiety/Stress Relief",
    description: "Application for psychiatric medication reminders, currently in progress, which also includes modules for ecotherapy to assist the user.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Blissful: Design (Figma Prototype)",
    description: "Design of the prototype for the medication reminder application in Figma.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://www.figma.com/proto/VwsH9R2azbs3ZjxHPIishC/Untitled?node-id=134-811&t=iPpsveBW6EK1u3qP-1&scaling=scale-down&content-scaling=fixed&page-id=65%3A11&starting-point-node-id=134%3A811",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio Project from Web Development Course",
    description: "Portfolio created in an HTML, CSS, and JavaScript course by Fundación Televisa.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JenniferMich/P-gina-de-curriculum",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Google Clone",
    description: "The main objective was to replicate the visual design of the main page of Google's search engine using HTML and CSS.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JenniferMich/Google-Clone",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "AgroSpider",
    description: "Robotic Agricultural Device for Detecting Strawberry Ripeness Levels",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.facebook.com/share/v/2vRAYax5hTbzwXLf/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true});

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={project.id} onClick={() => handleImageClick(project.image)}
            key1={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
                >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <Modal show={modalOpen} onClose={handleCloseModal} imageSrc={selectedImage} />
    </section>
  );
};

export default ProjectsSection;