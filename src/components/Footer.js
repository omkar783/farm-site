import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} DattuBhau Bhole Farm House. All rights reserved.
        </p>
        <p className={styles.tagline}>Fresh from our farm to your table</p>
      </div>
    </footer>
  );
}
