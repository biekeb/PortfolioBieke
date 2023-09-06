import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import image from "../images/finalshow.png";
import image1 from "../images/finalshow1.png"; // Add more images as needed
import image2 from "../images/finalshow2.png"; // Add more images as needed
import image3 from "../images/finalshow3.png"; // Add more images as needed

const ProjectDescription = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image, image1, image2, image3]; // Add more images to the array as needed

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

  const { topic } = useLoaderData();

  console.log(topic.title);

  return (
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
          <a href="">
            <p id="project-link">go to webpage</p>
          </a>
        </div>
      </div>

      <p>{topic.description}</p>
    </div>
  );
};

export default ProjectDescription;
