"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "var(--ink)" }}
      className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Декоративный круг */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "600px",
        borderRadius: "50%",
        border: "1px solid rgba(184,147,63,0.1)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px", height: "400px",
        borderRadius: "50%",
        border: "1px solid rgba(184,147,63,0.08)",
        pointerEvents: "none",
      }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
          className="text-xs uppercase font-medium mb-6"
        >
          Контакт
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ color: "var(--cream)", fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}
          className="text-4xl md:text-6xl font-light mb-6"
        >
          Готовы автоматизировать<br />
          <em style={{ color: "var(--gold)" }}>ваш бизнес?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: "rgba(245,240,232,0.5)", lineHeight: 1.8 }}
          className="text-base mb-10"
        >
          Напишите мне — разберёмся в задаче, найдём решение и обсудим стоимость. Первый созвон бесплатно.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://t.me/DmitryiP03"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--cream)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.08em",
              transition: "all 0.3s ease",
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase hover:opacity-90"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--gold-light)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--gold)")}
          >
            Telegram
            <span>→</span>
          </a>
          <a
            href="mailto:pdimaz@yandex.ru"
            style={{
              border: "1px solid rgba(184,147,63,0.3)",
              color: "var(--cream)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.08em",
              transition: "all 0.3s ease",
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase"
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(184,147,63,0.3)")}
          >
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
