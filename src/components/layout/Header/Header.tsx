"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X } from "lucide-react"
import styles from "./Header.module.scss"

const navLinks = [
  { label: "Personagens", href: "#characters" },
  { label: "Casas",       href: "#houses"     },
  { label: "Patronos",    href: "#patronos"   },
  { label: "Atores",      href: "#actors"     },
  { label: "Status",      href: "#"           },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        
        <Link href="/" className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>Harry Potter</span>
            <span className={styles.logoSub}>Enciclopédia</span>
          </div>
        </Link>

      
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

    
      {menuOpen && (
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

    
      <div className={styles.skyline} />

    </header>
  )
}
