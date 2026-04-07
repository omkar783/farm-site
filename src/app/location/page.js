import { MapPin, Navigation } from "lucide-react";
import styles from "./page.module.css";

export default function Location() {
  const address = "RV4J+69, Deogaon, Maharashtra 431123";

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Visit Us</h1>
          <p className={styles.subtitle}>Find your way to DattuBhau Bhole Farm House</p>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5!2d-!3d19.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMwJzAwLjAiTiAzwr4nQycyNy4wIkU!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Farm Location"
            />
          </div>
          
          <div className={styles.addressCard}>
            <div className={styles.addressHeader}>
              <MapPin className={styles.icon} />
              <h2>Our Location</h2>
            </div>
            <p className={styles.address}>{address}</p>
            <p className={styles.village}>Deogaon, Maharashtra</p>
            
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsBtn}
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
