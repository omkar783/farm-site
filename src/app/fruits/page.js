"use client";
import { useState } from "react";
import styles from "./page.module.css";
import FruitGallery from "@/components/FruitGallery";

const fruits = [
  {
    name: "Mango",
    nameMarathi: "आंबे",
    image: "/images/mango.png",
    folder: "mango",
    season: "April - July",
    seasonMarathi: "एप्रिल - जुलै",
    description: "Our mangoes are known for their exceptional sweetness and rich flavor. Grown in the perfect climate of Maharashtra, each mango is hand-picked at peak ripeness to deliver the authentic taste of summer.",
    highlights: ["Alphonso & Kesar varieties", "Organically grown", "Rich in Vitamin A & C"],
  },
  {
    name: "Sapodilla",
    nameMarathi: "चिक्कू",
    image: "/images/cikku.png",
    folder: "chikku",
    season: "October - March",
    seasonMarathi: "ऑक्टोबर - मार्च",
    description: "Sapodilla, also known as chikoo, is a tropical fruit with a unique caramel-like flavor and grainy texture. Our sapodillas are carefully cultivated to ensure perfect ripeness and maximum sweetness.",
    highlights: ["Creamy texture", "Natural energy booster", "High in iron and vitamins"],
  },
  {
    name: "Black Berry",
    nameMarathi: "जांभूळ",
    image: "/images/jambul.png",
    folder: "jambhal",
    season: "June - September",
    seasonMarathi: "जून - सप्टेंबर",
    description: "Our black berries are plump, juicy, and packed with antioxidants. These dark purple treasures are grown with sustainable practices to deliver the finest quality berries right from our farm.",
    highlights: ["Rich in antioxidants", "Perfect for fresh eating", "Excellent for jams and desserts"],
  },
  {
    name: "Banana",
    nameMarathi: "केळी",
    image: "/images/banana.png",
    folder: null,
    season: "Round the Year",
    seasonMarathi: "वर्षभर",
    description: "Our bananas are rich in potassium and nutrients. Grown with organic practices, these bananas are naturally sweet and healthy.",
    highlights: ["High in potassium", "Natural energy", "Rich in vitamins"],
  },
];

export default function Fruits() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState(null);

  const openGallery = (fruit) => {
    if (fruit.folder) {
      setSelectedFruit(fruit);
      setGalleryOpen(true);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Our Fruits</h1>
          <p className={styles.subtitle}>Fresh from our orchard to your table</p>
        </div>
      </section>

      <section className={styles.fruitsSection}>
        <div className="container">
          {fruits.map((fruit) => (
            <div 
              key={fruit.name} 
              className={`${styles.fruitCard} ${fruit.folder ? styles.clickable : ''}`}
              onClick={() => openGallery(fruit)}
            >
              <div className={styles.fruitIcon}>
                <img src={fruit.image} alt={fruit.name} />
              </div>
              <div className={styles.fruitInfo}>
                <h2 className={styles.fruitName}>{fruit.name}</h2>
                <p className={styles.fruitNameMarathi} lang="mr">{fruit.nameMarathi}</p>
                <p className={styles.fruitSeason}>Season: {fruit.season}</p>
                <p className={styles.fruitSeasonMarathi} lang="mr">{fruit.seasonMarathi}</p>
                <p className={styles.fruitDesc}>{fruit.description}</p>
                <ul className={styles.highlights}>
                  {fruit.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FruitGallery 
        fruitName={selectedFruit?.name} 
        folder={selectedFruit?.folder}
        isOpen={galleryOpen} 
        onClose={() => setGalleryOpen(false)} 
      />
    </div>
  );
}