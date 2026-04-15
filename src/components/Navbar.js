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
          <linearGradient id="leafGradLuxe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#14532D" />
          </linearGradient>
          <linearGradient id="fruitGradLuxe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
          <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FDE047" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Outer glow ring */}
        <circle cx="50" cy="42" r="42" fill="url(#glowGrad)" opacity="0.15"/>
        {/* Tree trunk - elegant curved */}
        <path d="M47 100 L47 72 Q47 62 50 58 Q53 62 53 72 L53 100 Z" fill="url(#trunkGrad)"/>
        {/* Left branch - flowing curve */}
        <path d="M47 72 Q38 68 32 56 Q36 52 42 56 Q48 60 50 68" fill="url(#leafGradLuxe)"/>
        {/* Right branch */}
        <path d="M53 72 Q62 68 68 56 Q64 52 58 56 Q52 60 50 68" fill="url(#leafGradLuxe)"/>
        {/* Top branches */}
        <path d="M50 58 Q44 52 42 44" stroke="url(#leafGradLuxe)" strokeWidth="3" fill="none"/>
        <path d="M50 58 Q56 52 58 44" stroke="url(#leafGradLuxe)" strokeWidth="3" fill="none"/>
        {/* Main foliage - layered circles */}
        <ellipse cx="50" cy="38" rx="26" ry="24" fill="url(#leafGradLuxe)"/>
        <ellipse cx="32" cy="34" rx="14" ry="13" fill="url(#leafGradLuxe)" opacity="0.85"/>
        <ellipse cx="68" cy="34" rx="14" ry="13" fill="url(#leafGradLuxe)" opacity="0.85"/>
        <ellipse cx="42" cy="22" rx="12" ry="10" fill="url(#leafGradLuxe)" opacity="0.9"/>
        <ellipse cx="58" cy="22" rx="12" ry="10" fill="url(#leafGradLuxe)" opacity="0.9"/>
        {/* Crown foliage highlight */}
        <ellipse cx="46" cy="30" rx="8" ry="6" fill="#FFF" opacity="0.08"/>
        {/* Premium mango fruits with golden glow */}
        <ellipse cx="36" cy="42" rx="9" ry="8" fill="url(#fruitGradLuxe)"/>
        <ellipse cx="64" cy="42" rx="9" ry="8" fill="url(#fruitGradLuxe)"/>
        <ellipse cx="44" cy="28" rx="7" ry="6" fill="url(#fruitGradLuxe)"/>
        <ellipse cx="56" cy="28" rx="7" ry="6" fill="url(#fruitGradLuxe)"/>
        {/* Fruit highlights - specular shine */}
        <ellipse cx="33" cy="39" rx="3" ry="2.5" fill="#FFF" opacity="0.7"/>
        <ellipse cx="61" cy="39" rx="3" ry="2.5" fill="#FFF" opacity="0.7"/>
        <ellipse cx="42" cy="26" rx="2" ry="1.5" fill="#FFF" opacity="0.5"/>
        <ellipse cx="54" cy="26" rx="2" ry="1.5" fill="#FFF" opacity="0.5"/>
        {/* Golden accent dots */}
        <circle cx="35" cy="28" r="1" fill="#FDE047" opacity="0.6"/>
        <circle cx="65" cy="28" r="1" fill="#FDE047" opacity="0.6"/>
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