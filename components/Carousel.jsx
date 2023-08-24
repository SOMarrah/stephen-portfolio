import React, { useState, useEffect, useRef } from "react";

export default function Carousel({ data }) {
  // create state to hold the current index of the image
  const [activeIndex, setActiveIndex] = useState(0);
  // check the length of the data to generate pagination
  const indexLength = data.length;
  const changeInterval = 5000; // Change the image every 5 seconds (adjust as needed)
  const intervalRef = useRef(null);

  console.log("data from carousel:", data);
  // function to move to the next slide of the carousel
  const nextSlide = () => {
    setActiveIndex(activeIndex === indexLength - 1 ? 0 : activeIndex + 1);
  };
  // function to move to the previous slide of the carousel
  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? indexLength - 1 : activeIndex - 1);
  };
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % indexLength);
    }, changeInterval);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startInterval();

    return () => {
      stopInterval();
    };
  }, []);

  const handleMouseEnter = () => {
    stopInterval();
  };

  const handleMouseLeave = () => {
    startInterval();
  };

  //   a check if there is no active index
  if (indexLength <= 0) {
    return null;
  }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="">
        <div className="">
          {/* a map to iterate over the images  */}
          {data
            ? data.map((value, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index === activeIndex
                        ? ""
                        : ""
                    }
                  >
                    {index === activeIndex && (
                      <>
                        <div>
                          {value ? (
                            <img
                              rel="preload"
                              src={value}
                              style={{height:'auto', width:'70vw'}}
                              alt={value}
                            />
                          ) : null}
                        </div>
                      </>
                    )}
                  </div>
                );
              })
            : null}
        </div>
        {/* pagination below */}
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
        {data
          ? data.map((child, index) => {
              return (
                <div
                
                  className={
                    activeIndex === index
                      ? 'paginationActive'
                      : 'paginationInActive'
                  }
                  key={index}
                  onClick={() => setActiveIndex(index)}
                ></div>
              );
            })
          : null}
      </div>
    </div>
  );
}