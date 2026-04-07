"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./Gallery.module.css";

const farmImages = [
  "/images/farm/farm-1.jpg",
  "/images/farm/farm-2.jpg",
  "/images/farm/farm-3.jpg",
  "/images/farm/farm-4.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % farmImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + farmImages.length) % farmImages.length);
  };

  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Photo Gallery</h2>
      <p className={styles.subtitle}>Explore our beautiful farm</p>
      
      <div className={styles.grid}>
        {farmImages.map((image, index) => (
          <div 
            key={index} 
            className={styles.item}
            onClick={() => openLightbox(index)}
          >
            <img src={image} alt={`Farm ${index + 1}`} />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className={styles.lightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>
            <X size={24} />
          </button>
          <button className={styles.prevBtn} onClick={prevImage}>
            <ChevronLeft size={40} />
          </button>
          <div className={styles.lightboxContent}>
            <img src={farmImages[currentIndex]} alt={`Farm ${currentIndex + 1}`} />
            <p className={styles.counter}>{currentIndex + 1} / {farmImages.length}</p>
          </div>
          <button className={styles.nextBtn} onClick={nextImage}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}
