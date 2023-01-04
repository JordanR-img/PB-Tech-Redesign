// import { useState } from "react";
// import boxing from "../Pages/Assets/CarouselBoxingDay.png";

// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);


//   const slideStyles = {
//     width: "100%",
//     height: "100%",
//     borderRadius: "10px",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   //   ${boxing[currentIndex].url

//   const leftArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     left: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: '1',
//     cursor: "pointer",
//   };

//   const rightArrowStyles = {
//     position: 'absolute',
//     top: "50%",
//     transform: "translate(0, -50%)",
//     right: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: '1',
//     cursor: "pointer",
//   };

//   const sliderStyles = {
//     height: "100%",
//     position: "relative",
//   };

//   const dotsContainerStyles = {
//     display: "flex",
//     justifyContent: "center",
//   };

//   const dotStyles = {
//     margin: "0 3px",
//     cursor: "pointer",
//     fontSize: "20px",
//   };

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   const slideStylesWidthBackground = {
//     ...slideStyles,
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   return (
//     <div style={sliderStyles}>
//       <div style={leftArrowStyles} onClick={goToPrevious}>
//         leftarrow
//       </div>
//       <div style={rightArrowStyles} onClick={goToNext}>
//         rightarrow
//       </div>
//       <div style={slideStylesWidthBackground}></div>
//       <div style={slideStyles}></div>
//       <div style={dotsContainerStyles}>
//         {slides.map((slide, slideIndex) => {
//           return <div
//             key={slideIndex}
//             style={dotStyles}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             *
//           </div>;
//         })}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;