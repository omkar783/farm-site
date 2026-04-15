"use client";
import { useState, useEffect } from "react";
import { Calendar, Sparkles, Droplets, Sun, Leaf, ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import FruitGallery from "@/components/FruitGallery";

function MangoIcon({ size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <linearGradient id="mangoLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
        <radialGradient id="mangoGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FDE047" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#FDE047" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Golden outer glow */}
      <circle cx="50" cy="50" r="40" fill="url(#mangoGlow)"/>
      {/* Mango fruit */}
      <ellipse cx="50" cy="58" rx="28" ry="32" fill="url(#mangoGrad)"/>
      {/* Mango curve detail */}
      <path d="M35 52 Q50 42 65 52" stroke="#B45309" strokeWidth="2.5" fill="none" opacity="0.5"/>
      {/* Highlight */}
      <ellipse cx="40" cy="48" rx="9" ry="11" fill="#FFF" opacity="0.5"/>
      {/* Leaf */}
      <path d="M50 26 Q32 16 42 6 Q50 16 58 6 Q68 16 50 26" fill="url(#mangoLeaf)"/>
      <path d="M50 26 Q42 18 50 10" stroke="#166534" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function ChikkuIcon({ size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chikkuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="55" rx="30" ry="28" fill="url(#chikkuGrad)"/>
      <ellipse cx="40" cy="45" rx="12" ry="10" fill="#FFF" opacity="0.12"/>
      <circle cx="35" cy="60" r="1.5" fill="#451A03" opacity="0.5"/>
      <circle cx="55" cy="50" r="1.5" fill="#451A03" opacity="0.5"/>
      <circle cx="45" cy="68" r="1.5" fill="#451A03" opacity="0.5"/>
      <circle cx="60" cy="60" r="1.5" fill="#451A03" opacity="0.5"/>
      <rect x="48" y="22" width="4" height="8" rx="2" fill="#451A03"/>
      <path d="M52 24 Q60 16 55 8" stroke="#451A03" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function JambhalIcon({ size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jambhalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="20" fill="url(#jambhalGrad)"/>
      <circle cx="35" cy="35" r="16" fill="url(#jambhalGrad)"/>
      <circle cx="65" cy="35" r="16" fill="url(#jambhalGrad)"/>
      <circle cx="30" cy="55" r="14" fill="url(#jambhalGrad)"/>
      <circle cx="70" cy="55" r="14" fill="url(#jambhalGrad)"/>
      <circle cx="50" cy="30" r="14" fill="url(#jambhalGrad)"/>
      <circle cx="42" cy="42" r="4" fill="#FFF" opacity="0.25"/>
      <path d="M50 30 Q50 20 56 12" stroke="#166534" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function BananaIcon({ size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bananaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
      </defs>
      <path d="M35 70 Q30 50 45 35 Q55 25 60 35 Q70 45 65 70" fill="url(#bananaGrad)" stroke="#CA8A04" strokeWidth="1"/>
      <path d="M40 55 Q38 45 48 38" stroke="#FFF" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round"/>
      <rect x="32" y="68" width="8" height="12" rx="2" fill="#78350F"/>
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
    tagline: "King of Fruits",
    taglineMarathi: "फळांचा राजा",
    description: "Hand-picked at perfect ripeness. Each fruit embodies the essence of Maharashtra's perfect climate and rich soil.",
    highlights: ["Alphonso & Kesar", "Organic Farming", "Rich in Vitamins A & C"],
    icon: MangoIcon,
    accent: "#FDE047",
  },
  {
    name: "Sapodilla",
    nameMarathi: "चिक्कू",
    folder: "chikku",
    season: "October - March",
    seasonMarathi: "ऑक्टोबर - मार्च",
    tagline: "Tropical Gem",
    taglineMarathi: "उष्णकटिबंधीय रत्न",
    description: "A tropical gem with caramel-like sweetness. Unique grainy texture that melts in your mouth.",
    highlights: ["Creamy Texture", "Natural Energy", "High in Iron"],
    icon: ChikkuIcon,
    accent: "#92400E",
  },
  {
    name: "Black Berry",
    nameMarathi: "जांभूळ",
    folder: "jambhal",
    season: "June - September",
    seasonMarathi: "जून - सप्टेंबर",
    tagline: "Antioxidant Power",
    taglineMarathi: " antiयुसिडेंट शक्ती",
    description: "Plump, juicy berries bursting with antioxidants. Dark purple treasures for your health.",
    highlights: ["Antioxidant Rich", "Fresh Eating", "Premium Quality"],
    icon: JambhalIcon,
    accent: "#1E3A5F",
  },
  {
    name: "Banana",
    nameMarathi: "केळी",
    folder: null,
    season: "Round the Year",
    seasonMarathi: "वर्षभर",
    tagline: "Energy Booster",
    taglineMarathi: "ऊर्जा वाढवणारा",
    description: "Nature's perfect energy snack. Naturally sweet, potassium-rich, grown with sustainable practices.",
    highlights: ["High in Potassium", "Energy Boosting", "Fresh Daily"],
    icon: BananaIcon,
    accent: "#FDE047",
  },
];

export default function Fruits() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const openGallery = (fruit) => {
    if (fruit.folder) {
      setSelectedFruit(fruit);
      setGalleryOpen(true);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.bgOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Premium Selection</span>
          <h1 className={styles.title}>Our Fruits</h1>
          <p className={styles.titleMarathi} lang="mr">आमची फळे</p>
          <p className={styles.subtitle}>Hand-picked freshness from our orchard to your table</p>
          <p className={styles.subtitleMarathi} lang="mr">आमच्या बागेतून तुमच्या टेबलापर्यंत हाताने वाचलेला ताजेपणा</p>
        </div>
      </section>

      <section className={styles.fruitsSection}>
        <div className={styles.grid}>
          {fruits.map((fruit, index) => (
            <div 
              key={fruit.name}
              className={`${styles.card} ${fruit.folder ? styles.clickable : ''} ${loaded ? styles.cardLoaded : ''}`}
              style={{ 
                ["--delay"]: `${index * 0.15}s`,
                ["--accent"]: fruit.accent,
              }}
              onClick={() => openGallery(fruit)}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.cardBorder}></div>
              
              <div className={styles.cardContent}>
                <div className={styles.iconWrap}>
                  <fruit.icon size={120} />
                  <div className={styles.iconRing}></div>
                </div>
                
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardTagline}>{fruit.tagline}</span>
                    <span className={styles.cardTaglineMarathi} lang="mr">{fruit.taglineMarathi}</span>
                  </div>
                  
                  <h2 className={styles.cardTitle}>{fruit.name}</h2>
                  <p className={styles.cardTitleMarathi} lang="mr">{fruit.nameMarathi}</p>
                  
                  <div className={styles.cardSeason}>
                    <Calendar size={14} />
                    <span>{fruit.season}</span>
                    <span className={styles.cardSeasonMarathi} lang="mr">{fruit.seasonMarathi}</span>
                  </div>
                  
                  <p className={styles.cardDesc}>{fruit.description}</p>
                  
                  <div className={styles.cardHighlights}>
                    {fruit.highlights.map((h) => (
                      <span key={h} className={styles.highlightTag}>
                        <Leaf size={10} />
                        {h}
                      </span>
                    ))}
                  </div>
                  
                  {fruit.folder && (
                    <div className={styles.cardCta}>
                      <span>View Gallery</span>
                      <ArrowRight size={16} />
                    </div>
                  )}
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