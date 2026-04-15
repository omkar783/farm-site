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
          <p className={styles.titleMarathi} lang="mr">संपर्क करा</p>
          <p className={styles.subtitle}>We&apos;d love to hear from you</p>
          <p className={styles.subtitleMarathi} lang="mr">आम्हाला तुमच्याकडून ऐकायला आवेल</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2>Get In Touch</h2>
              <p className={styles.infoTextMarathi} lang="mr">संपर्क करा</p>
              <p className={styles.infoText}>
                Have questions about our fruits or want to place an order? 
                Reach out to us and we&apos;ll get back to you as soon as possible.
              </p>
              <p className={styles.infoTextMarathi} lang="mr">
                आमच्या फळांबद्दल प्रश्न असल्यास किंवा ऑर्डर द्यायचा असल्यास? 
                आमच्याशी संपर्क करा आणि आम्ही लवकरच तुमच्याशी संपर्क करू.
              </p>
              
              <div className={styles.contactMethods}>
                <div className={styles.contactItem}>
                  <MapPin className={styles.icon} />
                  <div>
                    <h3>Visit Us</h3>
                    <p className={styles.contactMarathi} lang="mr">भेट द्या</p>
                    <p>RV4J+69, Deogaon, Maharashtra 431123</p>
                    <p className={styles.contactMarathi} lang="mr">र व्ही 4 जे 69, देवगड, महाराष्ट्र 431123</p>
                  </div>
                </div>
                  <div className={styles.contactItem}>
                  <Phone className={styles.icon} />
                  <div>
                    <h3>Call Us</h3>
                    <p className={styles.contactMarathi} lang="mr">फोन करा</p>
                    <p><a href="tel:9881732998">9881732998</a></p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <Mail className={styles.icon} />
                  <div>
                    <h3>Email Us</h3>
                    <p className={styles.contactMarathi} lang="mr">ईमेल करा</p>
                    <p><a href="mailto:omkarmurkute1234@gmail.com">omkarmurkute1234@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <h3>Thank you!</h3>
                  <p className={styles.successMarathi} lang="mr">धन्यवाद!</p>
                  <p>We&apos;ve received your message and will get back to you soon.</p>
                  <p className={styles.successMarathi} lang="mr">आम्हाला तुमचा संदेश मिळाला आणि आम्ही लवकरच तुमच्याशी संपर्क करू.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className={styles.anotherBtn}
                  >
                    Send Another Message
                    <span className={styles.btnMarathi} lang="mr"> पुन्हा संदेश पाठवा</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3>Send a Message</h3>
                  <p className={styles.formTitleMarathi} lang="mr">संदेश पाठवा</p>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name</label>
                    <p className={styles.labelMarathi} lang="mr">तुमचे नाव</p>
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
                    <p className={styles.labelMarathi} lang="mr">ईमेल पत्ता</p>
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
                    <p className={styles.labelMarathi} lang="mr">संदेश</p>
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
                    <span className={styles.btnMarathi} lang="mr"> संदेश पाठवा</span>
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
