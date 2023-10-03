import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import image from "../images/finalshow.png";
import image1 from "../images/finalshow1.png"; // Add more images as needed
import image2 from "../images/finalshow2.png"; // Add more images as needed
import image3 from "../images/finalshow3.png"; // Add more images as needed

const ProjectDescription = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Define animations
  const fadeInAndSpring = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  // Trigger animations when inView changes
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const { topic } = useLoaderData();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use the correct key to access the images array
  const images = topic.imageshowcase;

  useEffect(() => {
    const imageInterval = setInterval(() => {
      // Change the image index every 5 seconds
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(imageInterval);
    };
  }, [images]);

  console.log(topic);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInAndSpring}
    >
      <div className="project-description">
        <div className="descr-flex">
          <div className="descr-item1">
            <h1 className="rotated-h1">{topic.title}</h1>
          </div>
          <div className="descr-item2">
            <img
              src={images[currentImageIndex]}
              alt=""
              className="image-transition"
            />
            <div class="flex">
              <div>
                <a href={topic.link} class="button-link">
                  <p id="project-link">Go to Webpage</p>
                </a>
              </div>
              <div>
                <a href={topic.githublink} class="button-link">
                  <p id="project-link">Go to GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p>{topic.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectDescription;
