import React from "react";
import { useState, useEffect } from "react";
import CarouselCard from "./Carousel-Card";
import CarouselControls from "./Carousel-Controls";
export default function Carousel() {
  const Images = [
    {
      Img: "Portfolio/Blog.png",
      title: "BlogAPI",
      link: "https://github.com/M7MDdev1/Blog-API",
    },
    {
      Img: "Portfolio/Nasser.png",
      title: "Nasser's Portfolio",
      link: "https://nasixr.vercel.app/",
    },
    {
      Img: "Portfolio/Todo.png",
      title: "Munjez - مُنجِز",
      link: "https://github.com/M7MDdev1/Munjez",
    },
  ];
  const [index, setIndex] = useState(0);

  const handleNextButton = () => {
    setIndex((prevIndex) =>
      prevIndex === Images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBackButton = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextButton();
    }, 1600);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className={"relative pb-28 flex justify-center"}>
      <CarouselControls
        setIndex={setIndex}
        handleBackButton={handleBackButton}
        handleNextButton={handleNextButton}
        Image={Images}
        index={index}
      />
      <div
        className={"overflow-hidden w-[400px] flex items-center rounded-2xl"}
      >
        {Images.map((item, i) => {
          return (
            <CarouselCard
              key={i}
              Img={item.Img}
              index={index}
              Title={item.title}
              Link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}
