import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Truck, Sprout, Droplets, Sun } from "lucide-react";
import Gallery from "@/components/Gallery";
import styles from "./page.module.css";

function MangoLogo({ size = 80 }) {
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
        <linearGradient id="mangoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FDE047" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Golden glow */}
      <circle cx="50" cy="50" r="38" fill="url(#mangoGlow)" />
      {/* Mango fruit */}
      <ellipse cx="50" cy="58" rx="28" ry="32" fill="url(#mangoGrad)"/>
      {/* Mango curve detail */}
      <path d="M35 52 Q50 42 65 52" stroke="#CA8A04" strokeWidth="2.5" fill="none" opacity="0.5"/>
      {/* Highlight */}
      <ellipse cx="40" cy="48" rx="9" ry="11" fill="#FFF" opacity="0.45"/>
      {/* Leaf */}
      <path d="M50 26 Q32 16 42 6 Q50 16 58 6 Q68 16 50 26" fill="url(#mangoLeaf)"/>
      <path d="M50 26 Q42 18 50 10" stroke="#166534" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function ChikkuLogo({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chikkuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="50%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <radialGradient id="chikkuShine" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFF" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#FFF" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Chikku fruit */}
      <ellipse cx="50" cy="55" rx="30" ry="28" fill="url(#chikkuGrad)"/>
      {/* Shine effect */}
      <ellipse cx="40" cy="45" rx="12" ry="10" fill="url(#chikkuShine)"/>
      {/* Texture dots */}
      <circle cx="35" cy="60" r="1.5" fill="#451A03" opacity="0.4"/>
      <circle cx="55" cy="50" r="1.5" fill="#451A03" opacity="0.4"/>
      <circle cx="45" cy="68" r="1.5" fill="#451A03" opacity="0.4"/>
      <circle cx="60" cy="60" r="1.5" fill="#451A03" opacity="0.4"/>
      <circle cx="40" cy="55" r="1" fill="#451A03" opacity="0.3"/>
      {/* Stem */}
      <rect x="48" y="22" width="4" height="8" rx="2" fill="#451A03"/>
      <path d="M52 24 Q60 18 55 10" stroke="#451A03" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function JambhalLogo({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jambhalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      {/* Berry body */}
      <circle cx="50" cy="50" r="20" fill="url(#jambhalGrad)"/>
      <circle cx="35" cy="35" r="16" fill="url(#jambhalGrad)"/>
      <circle cx="65" cy="35" r="16" fill="url(#jambhalGrad)"/>
      <circle cx="30" cy="55" r="14" fill="url(#jambhalGrad)"/>
      <circle cx="70" cy="55" r="14" fill="url(#jambhalGrad)"/>
      <circle cx="50" cy="30" r="14" fill="url(#jambhalGrad)"/>
      {/* Shine */}
      <circle cx="42" cy="42" r="4" fill="#FFF" opacity="0.3"/>
      {/* Stem */}
      <path d="M50 30 Q50 20 55 12" stroke="#1E3A5F" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M50 20 Q40 12 35 18 Q40 25 50 20" fill="#166534"/>
    </svg>
  );
}

function BananaLogo({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bananaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
      </defs>
      {/* Banana bunch */}
      <path d="M35 70 Q30 50 45 35 Q55 25 60 35 Q70 45 65 70" fill="url(#bananaGrad)" stroke="#CA8A04" strokeWidth="1"/>
      {/* Highlight */}
      <path d="M40 55 Q38 45 48 38" stroke="#FFF" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round"/>
      {/* Stem */}
      <rect x="32" y="68" width="8" height="12" rx="2" fill="#78350F"/>
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgImage}></div>
          <div className={styles.heroGlow}></div>
        </div>
        
        <nav className={styles.heroNav}>
          <div className={styles.heroNavContent}>
            <span className={styles.heroNavTag}>✦ Premium Organic Farm</span>
            <span className={styles.heroNavTag}>✦ Fresh Fruits</span>
            <span className={styles.heroNavTag}>✦ Family Owned</span>
          </div>
        </nav>

        <div className={styles.heroContent}>
          <div className={styles.heroBadgeWrap}>
            <span className={styles.heroBadgeGlow}></span>
            <span className={styles.heroBadge}>
              <Sprout size={14} />
              <span>Organic • Sustainable • Natural</span>
            </span>
          </div>
          
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>DattuBhau</span>
            <span className={styles.heroTitleLine}>Bhole Farm</span>
          </h1>
          <p className={styles.heroTitleMarathi} lang="mr">दत्तूभाऊ भोले फार्म हाऊस</p>
          
          <p className={styles.heroSubtitle}>
            Cultivating nature&apos;s finest treasures since generations
          </p>
          <p className={styles.heroSubtitleMarathi} lang="mr">
            पिढ्यांपासून नैसर्गिक खज्याने पिकवत आहोत
          </p>
          
          <div className={styles.heroCta}>
            <Link href="/fruits" className={styles.heroBtn}>
              <span>Discover Our Fruits</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/location" className={styles.heroBtnoutline}>
              <MapPin size={18} />
              <span>Visit Farm</span>
            </Link>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>25+</span>
            <span className={styles.heroStatLabel}>Years Farming</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>4</span>
            <span className={styles.heroStatLabel}>Premium Fruits</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>100%</span>
            <span className={styles.heroStatLabel}>Organic</span>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutDeco}>
          <div className={styles.aboutDecoCircle1}></div>
          <div className={styles.aboutDecoCircle2}></div>
        </div>
        
        <div className="container">
          <div className={styles.aboutHeader}>
            <span className={styles.aboutLabel}>Our Story</span>
            <h2 className={styles.sectionTitle}>Nature&apos;s Treasury</h2>
            <p className={styles.sectionTitleMarathi} lang="mr">नैसर्गिक खज्याने</p>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <div className={styles.aboutCardIcon}>
                <Sprout size={28} />
              </div>
              <h3>Organic Growth</h3>
              <p className={styles.aboutCardMarathi} lang="mr">सेंद्व有机 वाढ</p>
              <p>100% natural farming practices without harmful chemicals.</p>
            </div>
            <div className={`${styles.aboutCard} ${styles.aboutCardActive}`}>
              <div className={styles.aboutCardIcon}>
                <Droplets size={28} />
              </div>
              <h3>Natural Irrigation</h3>
              <p className={styles.aboutCardMarathi} lang="mr">नैसर्गिक पाणी</p>
              <p>Rain water harvesting and eco-friendly watering systems.</p>
            </div>
            <div className={styles.aboutCard}>
              <div className={styles.aboutCardIcon}>
                <Sun size={28} />
              </div>
              <h3>Sun-Kissed</h3>
              <p className={styles.aboutCardMarathi} lang="mr">सूर्यासकट</p>
              <p>Natural sunlight ensures perfect ripening of our fruits.</p>
            </div>
          </div>

          <div className={styles.aboutTextWrap}>
            <p className={styles.aboutText}>
              Nestled in the heart of Maharashtra, our family has tended this land for over 25 years. 
              Every fruit we grow carries the love of our ancestors and the promise of sustainable farming.
            </p>
            <p className={styles.aboutTextMarathi} lang="mr">
              महाराष्ट्राच्या मध्यभागी, आमचे कुटुंब 25 वर्षांपेक्षा अधिक काळापासून या जमिनीची काळजी घेत आहे. 
              आम्ही वापरत असलेल्या पद्धती शाश्वत शेतीचे आश्वासन देतात.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <Gallery />
      </section>

      {/* Fruits Preview Section */}
      <section className={styles.preview}>
        <div className="container">
          <div className={styles.previewHeader}>
            <span className={styles.previewLabel}>Our Harvest</span>
            <h2 className={styles.sectionTitle}>Signature Fruits</h2>
            <p className={styles.sectionTitleMarathi} lang="mr">स्वाक्षरी फळे</p>
          </div>
          
          <div className={styles.previewGrid}>
            <Link href="/fruits" className={styles.previewCard}>
              <div className={styles.previewCardBg} style={{background: 'linear-gradient(135deg, #FDE047 0%, #EAB308 50%, #CA8A04 100%)'}}></div>
              <div className={styles.previewCardContent}>
                <div className={styles.previewLogo}>
                  <MangoLogo size={90} />
                </div>
                <div className={styles.previewNum}>01</div>
                <h3>Mango</h3>
                <p className={styles.previewMarathi} lang="mr">आंबे</p>
                <p>Alphonso & Kesar varieties</p>
                <div className={styles.previewCardArrow}>
                  <ArrowRight size={24} />
                </div>
              </div>
            </Link>
            
            <Link href="/fruits" className={styles.previewCard}>
              <div className={styles.previewCardBg} style={{background: 'linear-gradient(135deg, #92400E 0%, #78350F 50%, #451A03 100%)'}}></div>
              <div className={styles.previewCardContent}>
                <div className={styles.previewLogo}>
                  <ChikkuLogo size={90} />
                </div>
                <div className={styles.previewNum}>02</div>
                <h3>Sapodilla</h3>
                <p className={styles.previewMarathi} lang="mr">चिक्कू</p>
                <p>Creamy caramel texture</p>
                <div className={styles.previewCardArrow}>
                  <ArrowRight size={24} />
                </div>
              </div>
            </Link>
            
            <Link href="/fruits" className={styles.previewCard}>
              <div className={styles.previewCardBg} style={{background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)'}}></div>
              <div className={styles.previewCardContent}>
                <div className={styles.previewLogo}>
                  <JambhalLogo size={90} />
                </div>
                <div className={styles.previewNum}>03</div>
                <h3>Black Berry</h3>
                <p className={styles.previewMarathi} lang="mr">जांभूळ</p>
                <p>Rich in antioxidants</p>
                <div className={styles.previewCardArrow}>
                  <ArrowRight size={24} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaBg}>
          <div className={styles.ctaOrbs}>
            <div className={styles.ctaOrb1}></div>
            <div className={styles.ctaOrb2}></div>
            <div className={styles.ctaOrb3}></div>
          </div>
        </div>
        
        <div className="container">
          <div className={styles.ctaContent}>
            <span className={styles.ctaLabel}>Visit Us</span>
            <h2>Experience the Orchard</h2>
            <p className={styles.ctaMarathi} lang="mr">बागेचा अनुभव घ्या</p>
            <p>Come see our paradise and taste fruits straight from the tree.</p>
            
            <div className={styles.ctaInfo}>
              <div className={styles.ctaInfoItem}>
                <MapPin size={20} />
                <span>RV4J+69, Deogaon, Maharashtra 431123</span>
              </div>
              <div className={styles.ctaInfoItem}>
                <Phone size={20} />
                <span>+91 9881732998</span>
              </div>
            </div>
            
            <Link href="/contact" className={styles.ctaBtn}>
              <span>Plan Your Visit</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}