import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Gallery from "@/components/Gallery";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>DattuBhau Bhole Farm House</h1>
            <p className={styles.heroSubtitle}>
              Where Nature&apos;s Sweetest Treasures Grow
            </p>
            <Link href="/fruits" className={styles.heroBtn}>
              Explore Our Fruits <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.about}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Welcome to Our Farm</h2>
          <p className={styles.aboutText}>
            Nestled in the heart of Deogaon, Maharashtra, DattuBhau Bhole Farm House 
            is a family-owned paradise specializing in the finest tropical fruits. 
            Our orchard features delicious mangoes, creamy sapodillas, and plump black berries 
            - all grown with love and sustainable farming practices.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <MapPin className={styles.featureIcon} />
              <h3>Prime Location</h3>
              <p>RV4J+69, Deogaon, Maharashtra 431123</p>
            </div>
            <div className={styles.feature}>
              <Phone className={styles.featureIcon} />
              <h3>Direct Contact</h3>
              <p>Reach us for fresh produce inquiries</p>
            </div>
            <div className={styles.feature}>
              <Mail className={styles.featureIcon} />
              <h3>Fresh Delivery</h3>
              <p>Farm fresh fruits straight to you</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <Gallery />
      </section>

      <section className={`section ${styles.preview}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Signature Fruits</h2>
          <div className={styles.previewGrid}>
            <div className={styles.previewCard}>
              <div className={styles.previewImg} style={{backgroundColor: '#FFD700'}}>
                <span>🥭</span>
              </div>
              <h3>Mango</h3>
              <p>Juicy, sweet &amp; delicious</p>
            </div>
            <div className={styles.previewCard}>
              <div className={styles.previewImg} style={{backgroundColor: '#D2691E'}}>
                <span>🫐</span>
              </div>
              <h3>Sapodilla</h3>
              <p>Creamy &amp; caramel-like</p>
            </div>
            <div className={styles.previewCard}>
              <div className={styles.previewImg} style={{backgroundColor: '#4A0E0E'}}>
                <span>🫐</span>
              </div>
              <h3>Black Berry</h3>
              <p>Rich &amp; antioxidant-packed</p>
            </div>
          </div>
          <Link href="/fruits" className={styles.viewAllBtn}>
            View All Fruits <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
