"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./FruitGallery.module.css";

const fruitPhotos = {
  mango: [
    "/images/fruits/mango/IMG-20260407-WA0005_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0006_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0007_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0008_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0009_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0012_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0013_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0014_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0015_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0016_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0019_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0021_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0030_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0031_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0032_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0034_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0035_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0036_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0037_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0038_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0039_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0040_enhanced.jpg",
    "/images/fruits/mango/IMG-20260407-WA0044_enhanced.jpg",
  ],
  chikku: [
    "/images/fruits/chikku/IMG-20260407-WA0018_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0022_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0023_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0028_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0029_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0045_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0046_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0047_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0048_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0053_enhanced.jpg",
    "/images/fruits/chikku/IMG-20260407-WA0054_enhanced.jpg",
  ],
  jambhal: [
    "/images/fruits/jambhal/IMG-20260407-WA0024_enhanced.jpg",
    "/images/fruits/jambhal/IMG-20260407-WA0025_enhanced.jpg",
    "/images/fruits/jambhal/IMG-20260407-WA0026_enhanced.jpg",
    "/images/fruits/jambhal/IMG-20260407-WA0041_enhanced.jpg",
    "/images/fruits/jambhal/IMG-20260407-WA0042_enhanced.jpg",
    "/images/fruits/jambhal/IMG-20260407-WA0049_enhanced.jpg",
    "/images/fruits/jambhal/IMG-20260407-WA0050_enhanced.jpg",
    "/images/fruits/jambhal/IMG-20260407-WA0051_enhanced.jpg",
    "/images/fruits/jambhal/IMG-20260407-WA0052_enhanced.jpg",
  ],
};

export default function FruitGallery({ fruitName, folder, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = fruitPhotos[folder] || [];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  if (!isOpen || photos.length === 0) return null;

  return (
    <div className={styles.gallery}>
      <button className={styles.closeBtn} onClick={onClose}>
        <X size={24} />
      </button>
      
      <h2 className={styles.title}>{fruitName} Gallery</h2>
      <p className={styles.counter}>{currentIndex + 1} / {photos.length}</p>
      
      <div className={styles.mainImage}>
        <img src={photos[currentIndex]} alt={`${fruitName} ${currentIndex + 1}`} />
      </div>

      <button className={styles.prevBtn} onClick={prevPhoto}>
        <ChevronLeft size={40} />
      </button>
      
      <button className={styles.nextBtn} onClick={nextPhoto}>
        <ChevronRight size={40} />
      </button>

      <div className={styles.thumbnails}>
        {photos.map((photo, index) => (
          <button
            key={index}
            className={`${styles.thumb} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={photo} alt={`${fruitName} thumb ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}