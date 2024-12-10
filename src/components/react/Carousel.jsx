import React, { useState } from "react";
import "./carousel.css";

const images = [
  "/images/casas/house2-m.webp",
  "/images/casas/house3-m.webp",
  "/images/casas/house4-m.webp",
  "/images/casas/house5-m.webp",
  "/images/casas/house6-m.webp",
  "/images/casas/dron.mp4",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  function tieneExtension(archivo) {
    return /\.(png|jpg|jpeg|webp)$/.test(archivo);
  }

  return (
    <div className="carousel">
      {/* Botón para la imagen anterior */}
      <button onClick={goToPrevious} className="carousel-button prev">
        <img
          src="/images/assets/arrow-left.svg"
          alt="Previous"
          width="40"
          height="40"
        />
      </button>

      {/* Imagen principal o video */}
      <div className="main-image" onClick={toggleModal}>
        {tieneExtension(images[currentIndex]) ? (
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width="100"
            height="100"
          />
        ) : (
          <video autoPlay muted>
            <source src={images[currentIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Botón para la siguiente imagen */}
      <button onClick={goToNext} className="carousel-button next">
        <img
          src="/images/assets/arrow-right.svg"
          alt="Next"
          width="40"
          height="40"
        />
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
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width="100"
                height="100"
              />
            ) : (
              <img
                src="/images/casas/house2-m.webp"
                alt={`Thumbnail ${index + 1}`}
                width="100"
                height="100"
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
            <button onClick={goToPrevious} className="modal-button prev">
              <img
                src="/images/assets/arrow-left.svg"
                alt="Previous"
                width="40"
                height="40"
              />
            </button>
            {tieneExtension(images[currentIndex]) ? (
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                width="1000"
                height="1000"
              />
            ) : (
              <video autoPlay muted>
                <source src={images[currentIndex]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button onClick={goToNext} className="modal-button next">
              <img
                src="/images/assets/arrow-right.svg"
                alt="Next"
                width="40"
                height="40"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
