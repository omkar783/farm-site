import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Sun, Leaf, Truck } from "lucide-react";
import Gallery from "@/components/Gallery";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <Leaf size={14} />
              <span>Organic Farm</span>
            </div>
            <h1 className={styles.heroTitle}>DattuBhau Bhole Farm House</h1>
            <p className={styles.heroTitleMarathi} lang="mr">दत्तूभाऊ भोले फार्म हाऊस</p>
            <p className={styles.heroSubtitle}>
              Where Nature&apos;s Sweetest Treasures Grow
            </p>
            <p className={styles.heroSubtitleMarathi} lang="mr">
              जिथे नैसर्गिक गोड खज्याने वाढतात
            </p>
            <div className={styles.heroCta}>
              <Link href="/fruits" className={styles.heroBtn}>
                Explore Our Fruits <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className={styles.heroBtnSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className={styles.heroScroll}>
            <span>Scroll to explore</span>
            <div className={styles.scrollLine}></div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.about}`}>
        <div className="container">
          <div className={styles.aboutHeader}>
            <h2 className={styles.sectionTitle}>Welcome to Our Farm</h2>
            <p className={styles.sectionTitleMarathi} lang="mr">आमच्या शेतात स्वागत आहे</p>
          </div>
          <p className={styles.aboutText}>
            Nestled in the heart of Deogaon, Maharashtra, DattuBhau Bhole Farm House 
            is a family-owned paradise specializing in the finest tropical fruits. 
            Our orchard features delicious mangoes, creamy sapodillas, and plump black berries 
            - all grown with love and sustainable farming practices.
          </p>
          <p className={styles.aboutTextMarathi} lang="mr">
            महाराष्ट्रातील देवगडच्या मध्यभागी असलेले दत्तूभाऊ भोले फार्म हाऊस 
            हे उत्कृष्ट उष्णकटिबधीय फळांमध्ये विशेषीकृत एक कुटुंब-मालकीचे स्वर्ग आहे. 
            आमच्या बागेत चवदार आंबे, मलदायक सापोडिला आणि पोलटे जांभूळ येतात 
            - सर्व प्रेमाने आणि शाश्वत शेती पद्धतींनी वाढवले जातात.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIconWrap}>
                <MapPin className={styles.featureIcon} />
              </div>
              <h3>Prime Location</h3>
              <p className={styles.featureMarathi} lang="mr">प्रमुख स्थान</p>
              <p>RV4J+69, Deogaon, Maharashtra 431123</p>
              <p className={styles.featureMarathi} lang="mr">र व्ही 4 जे 69, देवगड, महाराष्ट्र 431123</p>
            </div>
            <div className={`${styles.feature} ${styles.featureHighlight}`}>
              <div className={styles.featureIconWrap}>
                <Phone className={styles.featureIcon} />
              </div>
              <h3>Direct Contact</h3>
              <p className={styles.featureMarathi} lang="mr">थेट संपर्क</p>
              <p>Reach us for fresh produce inquiries</p>
              <p className={styles.featureMarathi} lang="mr">ताज्या उत्पादनाबद्दल विचारण्यासाठी आमच्याशी संपर्क करा</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIconWrap}>
                <Truck className={styles.featureIcon} />
              </div>
              <h3>Fresh Delivery</h3>
              <p className={styles.featureMarathi} lang="mr">ताजी वितरण</p>
              <p>Farm fresh fruits straight to you</p>
              <p className={styles.featureMarathi} lang="mr">शेतातील ताजी फळे थेट तुमच्यापर्यंत</p>
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
          <p className={styles.sectionTitleMarathi} lang="mr">आमची स्वाक्षरी फळे</p>
          <div className={styles.previewGrid}>
            <Link href="/fruits" className={styles.previewCard}>
              <div className={styles.previewImg} style={{background: 'linear-gradient(135deg, #FDE047 0%, #EAB308 100%)'}}>
                <Leaf size={40} />
              </div>
              <h3>Mango</h3>
              <p className={styles.previewMarathi} lang="mr">आंबे</p>
              <p>Juicy, sweet &amp; delicious</p>
              <p className={styles.previewMarathi} lang="mr">रसदार, गोड आणि चवदार</p>
            </Link>
            <Link href="/fruits" className={styles.previewCard}>
              <div className={styles.previewImg} style={{background: 'linear-gradient(135deg, #92400E 0%, #78350F 100%)'}}>
                <Leaf size={40} />
              </div>
              <h3>Sapodilla</h3>
              <p className={styles.previewMarathi} lang="mr">चिक्कू</p>
              <p>Creamy &amp; caramel-like</p>
              <p className={styles.previewMarathi} lang="mr">मलदार आणि कॅरेमलसारखा</p>
            </Link>
            <Link href="/fruits" className={styles.previewCard}>
              <div className={styles.previewImg} style={{background: 'linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)'}}>
                <Leaf size={40} />
              </div>
              <h3>Black Berry</h3>
              <p className={styles.previewMarathi} lang="mr">जांभूळ</p>
              <p>Rich &amp; antioxidant-packed</p>
              <p className={styles.previewMarathi} lang="mr">समृद्ध आणि अँटीऑक्सीडेंटने भरलेले</p>
            </Link>
          </div>
          <Link href="/fruits" className={styles.viewAllBtn}>
            View All Fruits <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Experience the Taste of Freshness</h2>
            <p className={styles.ctaMarathi} lang="mr">ताज्याचा चव अनुभवा</p>
            <p>Order your favorite fruits directly from our farm to your doorstep.</p>
            <Link href="/contact" className={styles.ctaBtn}>
              Get In Touch <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}