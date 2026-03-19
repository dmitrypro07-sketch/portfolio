"use client";

import { motion } from "framer-motion";

const prices = [
  {
    service: "ИИ-ассистент",
    price: "от 15 000 ₽",
    includes: ["Скрипт ответов под твой бизнес", "Подключение в 1 канал (Telegram / ВКонтакте / Авито)", "30 дней доработок включены"],
  },
  {
    service: "Автоматизация процессов",
    price: "от 35 000 ₽",
    includes: ["Анализ и карта процессов", "Интеграция CRM, мессенджеров, таблиц", "30 дней доработок включены"],
  },
  {
    service: "Веб-приложение",
    price: "от 25 000 ₽",
    includes: ["Прототип за 48 часов", "Деплой на Vercel — доступен сразу", "Код и документация передаются тебе"],
  },
];

export default function Pricing() {
  return (
    <section style={{ backgroundColor: "var(--cream)" }} className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em" }} className="text-xs uppercase font-medium mb-4">
            Стоимость
          </p>
          <h2 style={{ color: "var(--ink)", lineHeight: 1.1 }} className="text-4xl md:text-5xl font-light">
            Прозрачные цены
          </h2>
        </motion.div>

        <div style={{ borderTop: "1px solid var(--cream-deeper)" }}>
          {prices.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderBottom: "1px solid var(--cream-deeper)" }}
              className="py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-0"
            >
              <div className="flex-1">
                <span style={{ color: "var(--ink)", fontFamily: "'DM Sans', sans-serif" }} className="text-base md:text-lg block mb-3">
                  {p.service}
                </span>
                <ul className="flex flex-col gap-1">
                  {p.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span style={{ color: "var(--gold)" }} className="text-xs mt-0.5">✓</span>
                      <span style={{ color: "var(--muted)" }} className="text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span style={{ color: "var(--gold)", fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl md:text-3xl font-light md:ml-8 shrink-0">
                {p.price}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: "var(--muted)" }}
          className="text-sm mt-8"
        >
          Точная цена — после созвона.{" "}
          <a
            href="https://t.me/DmitryiP03"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--gold)", borderBottom: "1px solid var(--gold)", transition: "opacity 0.2s ease" }}
            className="hover:opacity-70"
          >
            Созвон бесплатно →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
