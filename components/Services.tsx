"use client";

import { motion } from "framer-motion";

const stampLabels = ["ГАРАНТИЯ • РЕЗУЛЬТАТА •", "ГАРАНТИЯ • СКОРОСТИ •", "ГАРАНТИЯ • КАЧЕСТВА •"];

const services = [
  {
    num: "01",
    title: "Автоматизация процессов",
    tagline: "Убираю 80% ручной рутины за 2–4 недели",
    desc: "Без найма сотрудников. Интегрирую CRM, мессенджеры, таблицы и почту в одну цепочку — система работает сама, пока ты занимаешься бизнесом.",
    bullets: [
      "За 30 минут созвона находим 3 процесса для автоматизации",
      "Работает 24/7 — не берёт отпуск, не просит повышения",
      "Настраиваю до тех пор, пока не заработает",
    ],
    guarantee: "30 дней дорабатываю бесплатно. Пока не скажешь «работает» — не ухожу.",
    tags: ["n8n", "API"],
  },
  {
    num: "02",
    title: "ИИ-ассистент и чат-боты",
    tagline: "Клиент получает ответ за 10 секунд — в любое время суток",
    desc: "85% обращений закрывает ИИ без твоего участия. Больше не теряешь клиентов из-за долгих ответов — они уходят к конкурентам уже через 3–5 минут ожидания.",
    bullets: [
      "Записывает, консультирует и обрабатывает возражения пока ты спишь",
      "Отвечает строго по скрипту — только то, что ты согласовал",
      "Передаёт сложные случаи живому менеджеру",
    ],
    guarantee: "Бот отвечает неправильно — дорабатываю бесплатно в течение 30 дней после запуска",
    tags: ["Savvy", "Neuroagents", "Telegram"],
  },
  {
    num: "03",
    title: "Веб-приложения",
    tagline: "Рабочее веб-приложение за 1–2 недели",
    desc: "Без команды разработчиков. Идея, которая месяцами висела в голове — становится реальным продуктом. Лендинг, портфолио, калькулятор, дашборд — любой веб-инструмент.",
    bullets: [
      "MVP за 2 недели вместо 3 месяцев",
      "Деплой на Vercel: доступен всему миру в день запуска",
      "Код остаётся у тебя — полная передача с документацией",
    ],
    guarantee: "Сначала прототип, потом доработка. Платишь только за то, что нравится",
    tags: ["Next.js", "Vercel", "AI"],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "var(--cream)" }} className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em" }} className="text-xs uppercase font-medium mb-4">
            Услуги
          </p>
          <h2 style={{ color: "var(--ink)", lineHeight: 1.1 }} className="text-4xl md:text-5xl font-light">
            Что я делаю
          </h2>
        </motion.div>

        <div className="grid gap-px" style={{ background: "var(--cream-deeper)" }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ backgroundColor: "var(--cream)", transition: "background 0.3s ease", position: "relative" }}
              className="p-8 md:p-12"
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--cream-dark)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--cream)")}
            >
              {/* Печать гарантии */}
              <motion.div
                initial={{ opacity: 0, scale: 1.5, rotate: -30, y: -80 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -12, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 4.5, type: "spring", stiffness: 200, damping: 18 }}
                style={{ position: "absolute", bottom: "12px", right: "12px", zIndex: 2, pointerEvents: "none" }}
                className="w-[130px] h-[130px] md:w-[220px] md:h-[220px]"
              >
                <svg width="100%" height="100%" viewBox="0 0 110 110">
                  <defs>
                    <path id={`circle-${i}`} d="M 55,55 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    <linearGradient id={`gold-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E8C56A" />
                      <stop offset="35%" stopColor="#D4A853" />
                      <stop offset="65%" stopColor="#B8933F" />
                      <stop offset="100%" stopColor="#9A7A30" />
                    </linearGradient>
                  </defs>
                  <circle cx="55" cy="55" r="50" fill="none" stroke={`url(#gold-grad-${i})`} strokeWidth="2.5" opacity="0.95" />
                  <circle cx="55" cy="55" r="42" fill="none" stroke={`url(#gold-grad-${i})`} strokeWidth="1" opacity="0.6" />
                  <text style={{ fontSize: "9.5px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.18em", fill: `url(#gold-grad-${i})` }}>
                    <textPath href={`#circle-${i}`} startOffset="6%">{stampLabels[i]}</textPath>
                  </text>
                  <image href="/logo.png" x="-1" y="-1" width="112" height="112" />
                </svg>
              </motion.div>

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span style={{ color: "var(--gold)", fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-6xl font-light shrink-0 leading-none">
                  {s.num}
                </span>
                <div className="flex-1">
                  <h3 style={{ color: "var(--ink)" }} className="text-2xl md:text-3xl font-light mb-2">
                    {s.title}
                  </h3>
                  <p style={{ color: "var(--gold)", fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-xl italic mb-4">
                    {s.tagline}
                  </p>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8 }} className="text-base mb-6">
                    {s.desc}
                  </p>

                  {/* Буллеты */}
                  <ul className="mb-6 space-y-2">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span style={{ color: "var(--gold)" }} className="mt-1 shrink-0">→</span>
                        <span style={{ color: "var(--ink-light)" }} className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Гарантия */}
                  <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "12px" }} className="mb-6">
                    <p style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest mb-1">Гарантия</p>
                    <p style={{ color: "var(--ink-light)" }} className="text-sm">{s.guarantee}</p>
                  </div>

                  {/* Теги */}
                  <div className="flex gap-2 flex-wrap">
                    {s.tags.map((tag, j) => (
                      <span key={j}
                        style={{ border: "1px solid var(--gold)", color: "var(--gold)", letterSpacing: "0.1em" }}
                        className="text-xs uppercase px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
