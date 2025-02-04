import React from "react";
import { useState, useEffect } from "react";
import CarouselCard from "./Carousel-Card";
import CarouselControls from "./Carousel-Controls";
export default function Carousel() {
  const Images = [
    "Portfolio/Blog.png",
    "Portfolio/Nasser.png",
    "Portfolio/Todo.png",
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
  }, [index]);

  return (
    <div className={"relative pb-28"}>

    <div className={"overflow-hidden h-[400px] flex items-center rounded-2xl"}>
      <CarouselControls
        setIndex={setIndex}
        handleBackButton={handleBackButton}
        handleNextButton={handleNextButton}
        Image={Images}
        index={index}
      />
      {Images.map((Img, i) => {
        return <CarouselCard key={i} Img={Img} index={index} />;
      })}
    </div>
    </div>
  );
}
