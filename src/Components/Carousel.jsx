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
    <>
      {/* Mobile */}
      <div className={"relative pb-28 md:hidden"}>
        <div
          className={"overflow-hidden flex items-center rounded-2xl "}
        >
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

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-2 items-center ">
        {Images.map((Img, i) => {
          return <CarouselCard key={i} Img={Img} index={0} />;
        })}
      </div>
    </>
  );
}
