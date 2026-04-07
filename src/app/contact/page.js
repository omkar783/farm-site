"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>We&apos;d love to hear from you</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2>Get In Touch</h2>
              <p className={styles.infoText}>
                Have questions about our fruits or want to place an order? 
                Reach out to us and we&apos;ll get back to you as soon as possible.
              </p>
              
              <div className={styles.contactMethods}>
                <div className={styles.contactItem}>
                  <MapPin className={styles.icon} />
                  <div>
                    <h3>Visit Us</h3>
                    <p>RV4J+69, Deogaon, Maharashtra 431123</p>
                  </div>
                </div>
                  <div className={styles.contactItem}>
                  <Phone className={styles.icon} />
                  <div>
                    <h3>Call Us</h3>
                    <p><a href="tel:9881732998">9881732998</a></p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <Mail className={styles.icon} />
                  <div>
                    <h3>Email Us</h3>
                    <p>info@bholefarm.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <h3>Thank you!</h3>
                  <p>We&apos;ve received your message and will get back to you soon.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className={styles.anotherBtn}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3>Send a Message</h3>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
