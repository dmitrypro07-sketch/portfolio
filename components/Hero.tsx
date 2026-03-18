"use client";

import { motion } from "framer-motion";
import MatrixRain from "./MatrixRain";

export default function Hero() {
  return (
    <section
      style={{ backgroundColor: "var(--cream)", minHeight: "100vh", paddingLeft: "clamp(24px, 8vw, 120px)", paddingRight: "clamp(24px, 8vw, 120px)" }}
      className="relative flex flex-col justify-center overflow-hidden"
    >
      {/* Matrix Rain фон */}
      <MatrixRain />

      {/* Декоративный фон */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,147,63,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ zIndex: 1, position: "relative", maxWidth: "1024px", margin: "0 auto", width: "100%", paddingTop: "96px", paddingBottom: "64px", paddingLeft: "clamp(24px, 6vw, 96px)", paddingRight: "clamp(24px, 6vw, 96px)" }}>
        {/* Имя */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.2em" }}
          className="text-sm font-medium uppercase mb-6"
        >
          Дмитрий Прокофьев
        </motion.p>

        {/* Заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{ color: "var(--ink)", fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-8"
        >
          Автоматизирую<br />
          <em style={{ color: "var(--gold)" }}>бизнес-процессы</em><br />
          с помощью ИИ
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{ color: "var(--muted)", maxWidth: "520px", lineHeight: 1.8 }}
          className="text-lg mb-12"
        >
          Освобождаю предпринимателей от рутины, чтобы они занимались ростом, а не перепиской.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://t.me/DmitryiP03"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--cream)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.05em",
              transition: "all 0.3s ease",
            }}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium uppercase hover:opacity-90"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--gold-light)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--gold)")}
          >
            Написать в Telegram
            <span>→</span>
          </a>
          <a
            href="#cases"
            style={{
              border: "1px solid var(--cream-deeper)",
              color: "var(--ink-light)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.05em",
              transition: "all 0.3s ease",
            }}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium uppercase hover:border-gold"
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--cream-deeper)")}
          >
            Смотреть кейсы
          </a>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap gap-8 md:gap-12 mt-16 md:mt-20"
        >
          {[
            { num: "85%", label: "сообщений обрабатывает ИИ" },
            { num: "50ч", label: "экономии в месяц" },
            { num: "24/7", label: "доступность ассистента" },
          ].map((s, i) => (
            <div key={i}>
              <p style={{ color: "var(--gold)", fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl font-light">
                {s.num}
              </p>
              <p style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Декоративная линия снизу */}
      <div className="gold-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
