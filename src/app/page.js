import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Truck, Sprout, Droplets, Sun } from "lucide-react";
import Gallery from "@/components/Gallery";
import styles from "./page.module.css";

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
              <div className={styles.previewCardBg}></div>
              <div className={styles.previewCardContent}>
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
              <div className={styles.previewCardBg}></div>
              <div className={styles.previewCardContent}>
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
              <div className={styles.previewCardBg}></div>
              <div className={styles.previewCardContent}>
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