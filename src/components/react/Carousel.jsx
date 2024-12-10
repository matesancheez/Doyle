import React, { useState } from "react";
import "./carousel.css";

const images = [
  "/images/casas/house2-m.jpg",
  "/images/casas/house3-m.jpg",
  "/images/casas/house4-m.jpg",
  "/images/casas/house5-m.jpg",
  "/images/casas/house6-m.jpg",
  "/images/casas/dron.mp4",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  function tieneExtension(archivo) {
    return /\.(png|jpg|jpeg)$/.test(archivo);
  }

  return (
    <div className="carousel hidden">
      {/* Botón para la imagen anterior */}
      <button onClick={goToPrevious} className="carousel-button prev">
        <img src="/src/assets/arrow-left.svg" alt="Previous" />
      </button>

      {/* Imagen principal o video */}
      <div className="main-image">
        {tieneExtension(images[currentIndex]) ? (
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        ) : (
          <video autoPlay muted>
            <source src={images[currentIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Botón para la siguiente imagen */}
      <button onClick={goToNext} className="carousel-button next">
        <img src="/src/assets/arrow-right.svg" alt="Previous" />
      </button>

      {/* Miniaturas */}
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => selectImage(index)}
          >
            {tieneExtension(image) ? (
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            ) : (
              <img
                src="/images/casas/house2-m.jpg"
                alt={`Thumbnail ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
