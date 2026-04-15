"use client";
import { useState } from "react";
import { ArrowRight, Leaf, Droplets, Sun, Calendar, Sparkles } from "lucide-react";
import styles from "./page.module.css";
import FruitGallery from "@/components/FruitGallery";

function MangoIcon({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mangoGradNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <linearGradient id="mangoLeafNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="60" rx="26" ry="30" fill="url(#mangoGradNew)"/>
      <path d="M38 55 Q50 48 62 55" stroke="#B45309" strokeWidth="2" fill="none" opacity="0.4"/>
      <ellipse cx="42" cy="52" rx="6" ry="8" fill="#FFF" opacity="0.5"/>
      <path d="M50 30 Q38 22 45 12 Q50 22 55 12 Q62 22 50 30" fill="url(#mangoLeafNew)"/>
      <path d="M50 30 Q45 20 50 15" stroke="#166534" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function ChikkuIcon({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chikkuGradNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="55" rx="28" ry="26" fill="url(#chikkuGradNew)"/>
      <ellipse cx="42" cy="48" rx="8" ry="6" fill="#FFF" opacity="0.15"/>
      <circle cx="38" cy="58" r="1" fill="#451A03" opacity="0.5"/>
      <circle cx="58" cy="52" r="1" fill="#451A03" opacity="0.5"/>
      <circle cx="45" cy="68" r="1" fill="#451A03" opacity="0.5"/>
      <circle cx="62" cy="62" r="1" fill="#451A03" opacity="0.5"/>
      <rect x="48" y="24" width="4" height="8" rx="2" fill="#451A03"/>
      <path d="M52 26 Q58 18 52 10" stroke="#451A03" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function JambhalIcon({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jambhalGradNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="18" fill="url(#jambhalGradNew)"/>
      <circle cx="36" cy="38" r="14" fill="url(#jambhalGradNew)"/>
      <circle cx="64" cy="38" r="14" fill="url(#jambhalGradNew)"/>
      <circle cx="32" cy="55" r="12" fill="url(#jambhalGradNew)"/>
      <circle cx="68" cy="55" r="12" fill="url(#jambhalGradNew)"/>
      <circle cx="50" cy="32" r="12" fill="url(#jambhalGradNew)"/>
      <circle cx="44" cy="44" r="3" fill="#FFF" opacity="0.25"/>
      <path d="M50 32 Q50 22 56 14" stroke="#166534" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function BananaIcon({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bananaGradNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
      </defs>
      <path d="M38 72 Q32 55 45 38 Q55 28 62 38 Q75 50 68 72" fill="url(#bananaGradNew)" stroke="#CA8A04" strokeWidth="1"/>
      <path d="M42 58 Q40 48 50 40" stroke="#FFF" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round"/>
      <rect x="35" y="70" width="6" height="10" rx="2" fill="#78350F"/>
    </svg>
  );
}

const fruits = [
  {
    name: "Mango",
    nameMarathi: "आंबे",
    folder: "mango",
    season: "April - July",
    seasonMarathi: "एप्रिल - जुलै",
    description: "Known as the King of Fruits, our mangoes are hand-picked at perfect ripeness. Each fruit embodies the essence of Maharashtra's perfect climate.",
    highlights: ["Alphonso & Kesar", "Organic Farming", "Rich in Vitamins A & C"],
    icon: MangoIcon,
    color: "#FDE047",
    darkColor: "#CA8A04",
  },
  {
    name: "Sapodilla",
    nameMarathi: "चिक्कू",
    folder: "chikku",
    season: "October - March",
    seasonMarathi: "ऑक्टोबर - मार्च",
    description: "A tropical gem with caramel-like sweetness. Our sapodillas offer a unique grainy texture that melts in your mouth.",
    highlights: ["Creamy Texture", "Natural Energy", "High in Iron"],
    icon: ChikkuIcon,
    color: "#92400E",
    darkColor: "#451A03",
  },
  {
    name: "Black Berry",
    nameMarathi: "जांभूळ",
    folder: "jambhal",
    season: "June - September",
    seasonMarathi: "जून - सप्टेंबर",
    description: "Plump, juicy berries bursting with antioxidants. These dark purple treasures are nature's finest gift to your health.",
    highlights: ["Antioxidant Rich", "Fresh Eating", "Premium Quality"],
    icon: JambhalIcon,
    color: "#1E3A5F",
    darkColor: "#0F172A",
  },
  {
    name: "Banana",
    nameMarathi: "केळी",
    folder: null,
    season: "Round the Year",
    seasonMarathi: "वर्षभर",
    description: "Nature's perfect energy snack. Our bananas are naturally sweet, potassium-rich, and grown with sustainable practices.",
    highlights: ["High in Potassium", "Energy Boosting", "Fresh Daily"],
    icon: BananaIcon,
    color: "#FDE047",
    darkColor: "#CA8A04",
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
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Premium Selection</span>
          <h1 className={styles.title}>Our Fruits</h1>
          <p className={styles.titleMarathi} lang="mr">आमची फळे</p>
          <p className={styles.subtitle}>Hand-picked freshness from our orchard to your table</p>
          <p className={styles.subtitleMarathi} lang="mr">आमच्या बागेतून तुमच्या टेबलापर्यंत हाताने वाचलेला ताजेपणा</p>
        </div>
      </section>

      <section className={styles.fruitsSection}>
        <div className={styles.fruitsDeco}>
          <div className={styles.fruitsDeco1}></div>
          <div className={styles.fruitsDeco2}></div>
        </div>
        
        <div className="container">
          {fruits.map((fruit, index) => (
            <div 
              key={fruit.name} 
              className={`${styles.fruitCard} ${fruit.folder ? styles.clickable : ''}`}
              onClick={() => openGallery(fruit)}
            >
              <div className={styles.fruitCardBg} style={{background: `linear-gradient(135deg, ${fruit.color} 0%, ${fruit.darkColor} 100%)`}}></div>
              
              <div className={styles.fruitCardContent}>
                <div className={styles.fruitLeft}>
                  <div className={styles.fruitIconWrap}>
                    <fruit.icon size={100} />
                  </div>
                  {fruit.folder && (
                    <div className={styles.viewGallery}>
                      <Sparkles size={16} />
                      <span>View Gallery</span>
                    </div>
                  )}
                </div>
                
                <div className={styles.fruitRight}>
                  <div className={styles.fruitHeader}>
                    <span className={styles.fruitNumber}>0{index + 1}</span>
                    <h2 className={styles.fruitName}>{fruit.name}</h2>
                    <p className={styles.fruitNameMarathi} lang="mr">{fruit.nameMarathi}</p>
                  </div>
                  
                  <div className={styles.fruitSeason}>
                    <Calendar size={16} />
                    <span>{fruit.season}</span>
                    <span className={styles.fruitSeasonMarathi} lang="mr">{fruit.seasonMarathi}</span>
                  </div>
                  
                  <p className={styles.fruitDesc}>{fruit.description}</p>
                  
                  <div className={styles.fruitHighlights}>
                    {fruit.highlights.map((highlight) => (
                      <span key={highlight} className={styles.highlightTag}>
                        <Leaf size={12} />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
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