"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facts = [
  { value: "3", label: "AI-ассистента\nпод ключ" },
  { value: "10+", label: "инструментов\nв стеке" },
];

const niches = ["Косметология", "Строительство", "Beauty"];
const integrations = ["amoCRM", "Savvy", "Uklines", "Соцсети", "Мессенджеры"];

export default function About() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "var(--cream-dark)" }}
      className="py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Метка */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.2em" }}
          className="text-xs uppercase mb-4"
        >
          О себе
        </motion.p>

        {/* Имя в стиле Хормози — крупно, уверенно */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            color: "var(--ink)",
            fontFamily: "'Cormorant Garamond', serif",
            lineHeight: 1.05,
          }}
          className="text-5xl md:text-6xl font-light mb-12"
        >
          Дмитрий<br />
          <em style={{ color: "var(--gold)" }}>Прокофьев</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Левая колонка — фото */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Фото с анимированным градиентным фоном */}
            <div style={{ position: "relative", maxWidth: "340px", width: "100%" }}>
              {/* Анимированный градиент */}
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(ellipse at 30% 40%, rgba(184,147,63,0.40) 0%, rgba(180,100,60,0.15) 40%, rgba(245,240,232,0) 70%)",
                    "radial-gradient(ellipse at 65% 25%, rgba(160,80,50,0.30) 0%, rgba(212,168,83,0.20) 45%, rgba(245,240,232,0) 70%)",
                    "radial-gradient(ellipse at 40% 65%, rgba(212,168,83,0.35) 0%, rgba(184,147,63,0.25) 40%, rgba(245,240,232,0) 70%)",
                    "radial-gradient(ellipse at 30% 40%, rgba(184,147,63,0.40) 0%, rgba(180,100,60,0.15) 40%, rgba(245,240,232,0) 70%)",
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              />
              {/* Фото */}
              <div style={{ position: "relative", zIndex: 1, aspectRatio: "1/1" }}>
                <Image
                  src="/photo.png"
                  alt="Дмитрий Прокофьев"
                  fill
                  style={{ objectFit: "contain", objectPosition: "bottom" }}
                />
                {/* Виньетка — скрывает края и мелкие косяки */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at center, transparent 45%, rgba(237,231,217,0.5) 70%, rgba(237,231,217,0.9) 100%)",
                  pointerEvents: "none",
                  zIndex: 2,
                }} />
              </div>
            </div>

            {/* Факты */}
            <div className="flex gap-8">
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p
                    style={{ color: "var(--gold)", fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-4xl font-light"
                  >
                    {fact.value}
                  </p>
                  <p
                    style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", whiteSpace: "pre-line" }}
                    className="text-xs mt-1 leading-relaxed"
                  >
                    {fact.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Правая колонка — текст */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Основной текст */}
            <p
              style={{
                color: "var(--ink-light)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              Я внедряю AI-ассистентов, автоматизации и AI-решения для бизнеса, которые сокращают рутину, ускоряют обработку заявок и помогают выстраивать более управляемые процессы. Работаю на стыке AI, маркетинга и продаж, поэтому собираю не просто инструменты, а решения, которые дают бизнесу понятную практическую пользу.
            </p>
            <p
              style={{
                color: "var(--ink-light)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              Больше всего в этой работе люблю момент, когда хаос превращается в систему, которая начинает работать на результат.
            </p>

            {/* Ниши */}
            <div>
              <p style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.15em" }}
                className="text-xs uppercase mb-3">
                Ниши
              </p>
              <div className="flex flex-wrap gap-2">
                {niches.map((n) => (
                  <span
                    key={n}
                    style={{
                      border: "1px solid var(--gold)",
                      color: "var(--gold)",
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                    className="text-xs px-3 py-1"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* Интеграции */}
            <div>
              <p style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.15em" }}
                className="text-xs uppercase mb-3">
                Интеграции
              </p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((n) => (
                  <span
                    key={n}
                    style={{
                      backgroundColor: "var(--cream-deeper)",
                      color: "var(--ink-light)",
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                    className="text-xs px-3 py-1"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
