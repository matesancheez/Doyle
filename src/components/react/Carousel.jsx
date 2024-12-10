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
    return /\.(png|jpg|jpeg)$/.test(archivo);
  }

  return (
    <div className="carousel">
      {/* Botón para la imagen anterior */}
      <button onClick={goToPrevious} className="carousel-button prev">
        <img src="/images/assets/arrow-left.svg" alt="Previous" />
      </button>

      {/* Imagen principal o video */}
      <div className="main-image" onClick={toggleModal}>
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
        <img src="/images/assets/arrow-right.svg" alt="Next" />
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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
            <button onClick={goToPrevious} className="modal-button prev">
              <img src="/images/assets/arrow-left.svg" alt="Previous" />
            </button>
            {tieneExtension(images[currentIndex]) ? (
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
              />
            ) : (
              <video autoPlay muted>
                <source src={images[currentIndex]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button onClick={goToNext} className="modal-button next">
              <img src="/images/assets/arrow-right.svg" alt="Next" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
