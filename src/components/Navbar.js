"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", labelMarathi: "होम" },
    { href: "/fruits", label: "Our Fruits", labelMarathi: "आमची फळे" },
    { href: "/location", label: "Location", labelMarathi: "स्थान" },
    { href: "/contact", label: "Contact", labelMarathi: "संपर्क" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Leaf size={24} />
          </div>
          <span className={styles.logoText}>DattuBhau Bhole Farm House</span>
        </Link>
        
        <button 
          className={styles.menuBtn} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? "mobileOpen" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                <span className={styles.navLinkMarathi} lang="mr">{link.labelMarathi}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navCta}>
          <Link href="/contact" className={styles.navBtn}>
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}