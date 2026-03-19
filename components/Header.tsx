"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакт", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(245,240,232,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--cream-deeper)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between h-16">
        {/* Логотип */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="D.PROX"
            width={80}
            height={50}
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Десктоп навигация */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.1em",
                transition: "color 0.2s ease",
              }}
              className="text-xs uppercase hover:text-ink"
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://t.me/DmitryiP03"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--cream)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.08em",
              transition: "opacity 0.2s ease",
            }}
            className="text-xs uppercase px-5 py-2 hover:opacity-90"
          >
            Написать →
          </a>
        </nav>

        {/* Бургер для мобильного */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span style={{ backgroundColor: "var(--ink)", transition: "all 0.3s ease", transformOrigin: "center",
            transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }}
            className="block w-6 h-px" />
          <span style={{ backgroundColor: "var(--ink)", transition: "all 0.3s ease",
            opacity: menuOpen ? 0 : 1 }}
            className="block w-6 h-px" />
          <span style={{ backgroundColor: "var(--ink)", transition: "all 0.3s ease", transformOrigin: "center",
            transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }}
            className="block w-6 h-px" />
        </button>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: "rgba(245,240,232,0.97)", borderTop: "1px solid var(--cream-deeper)" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: "var(--ink)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}
                  className="text-sm uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://t.me/DmitryiP03"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                style={{ backgroundColor: "var(--gold)", color: "var(--cream)", letterSpacing: "0.08em" }}
                className="text-xs uppercase px-5 py-3 text-center"
              >
                Написать в Telegram →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
