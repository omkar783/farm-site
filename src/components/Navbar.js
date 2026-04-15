"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

function FarmLogo() {
  return (
    <div className={styles.logoSvg}>
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>
          <linearGradient id="fruitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>
        </defs>
        {/* Tree trunk */}
        <path d="M45 100 L45 70 Q45 60 50 55 Q55 60 55 70 L55 100 Z" fill="#78350F"/>
        {/* Left branch */}
        <path d="M45 70 Q35 65 30 55 Q35 50 40 55 Q45 60 50 65" fill="#166534"/>
        {/* Right branch */}
        <path d="M55 70 Q65 65 70 55 Q65 50 60 55 Q55 60 50 65" fill="#166534"/>
        {/* Main foliage */}
        <ellipse cx="50" cy="40" rx="28" ry="25" fill="url(#leafGrad)"/>
        <ellipse cx="35" cy="35" rx="15" ry="14" fill="url(#leafGrad)" opacity="0.9"/>
        <ellipse cx="65" cy="35" rx="15" ry="14" fill="url(#leafGrad)" opacity="0.9"/>
        <ellipse cx="50" cy="25" rx="18" ry="15" fill="url(#leafGrad)" opacity="0.95"/>
        {/* Mango fruits */}
        <ellipse cx="38" cy="45" rx="8" ry="7" fill="url(#fruitGrad)"/>
        <ellipse cx="62" cy="45" rx="8" ry="7" fill="url(#fruitGrad)"/>
        <ellipse cx="45" cy="30" rx="6" ry="5" fill="url(#fruitGrad)"/>
        <ellipse cx="55" cy="30" rx="6" ry="5" fill="url(#fruitGrad)"/>
        {/* Highlight dots */}
        <circle cx="36" cy="43" r="2" fill="#FFF" opacity="0.6"/>
        <circle cx="60" cy="43" r="2" fill="#FFF" opacity="0.6"/>
      </svg>
    </div>
  );
}

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
          <FarmLogo />
          <div className={styles.logoTextWrap}>
            <span className={styles.logoText}>DattuBhau Bhole</span>
            <span className={styles.logoSubtext}>Farm House</span>
          </div>
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