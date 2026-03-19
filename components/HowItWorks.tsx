"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Созвон",
    time: "30 минут",
    desc: "За 30 минут выясняю где бизнес теряет деньги на рутине. Если решение не окупится — скажу честно.",
  },
  {
    step: "02",
    title: "Коммерческое предложение",
    time: "до 24 часов",
    desc: "Прорабатываю сценарии, готовлю КП с описанием решения, стеком и стоимостью. Без воды — только конкретика.",
  },
  {
    step: "03",
    title: "Запуск и доработка",
    time: "48ч тест → подключение",
    desc: "За 48 часов запускаю тестовую версию. Смотрим как работает, правим. Потом подключаем к твоим каналам и дорабатываем по ходу.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" style={{ backgroundColor: "var(--cream-dark)" }} className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em" }} className="text-xs uppercase font-medium mb-4">
            Процесс
          </p>
          <h2 style={{ color: "var(--ink)", lineHeight: 1.1 }} className="text-4xl md:text-5xl font-light">
            Как я работаю
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: "var(--cream-deeper)" }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ backgroundColor: "var(--cream-dark)" }}
              className="p-8 relative"
            >
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: i === 0 ? "var(--gold)" : "transparent",
                  transition: "background 0.3s ease",
                }}
                className="group-hover:bg-gold"
              />
              <span
                style={{ color: "var(--cream-deeper)", fontFamily: "'Cormorant Garamond', serif" }}
                className="text-7xl font-light block mb-6 leading-none"
              >
                {s.step}
              </span>
              <h3 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-2">
                {s.title}
              </h3>
              <p style={{ color: "var(--gold)", letterSpacing: "0.1em" }} className="text-xs uppercase mb-4">
                {s.time}
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.8 }} className="text-sm">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <span
                  style={{ color: "var(--gold)", position: "absolute", right: "-12px", top: "50%", transform: "translateY(-50%)" }}
                  className="text-2xl hidden md:block z-10"
                >
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex justify-center"
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
              transition: "opacity 0.2s ease",
            }}
            className="text-sm uppercase px-8 py-4 hover:opacity-90"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--gold-light)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--gold)")}
          >
            Начнём? Запиши созвон →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
