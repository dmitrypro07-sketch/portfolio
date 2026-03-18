"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Созвон",
    desc: "Разбираемся в задаче. Я задаю вопросы, слушаю, нахожу узкие места и понимаю, что именно нужно автоматизировать.",
  },
  {
    step: "02",
    title: "Коммерческое предложение",
    desc: "Готовлю КП с описанием решения, стеком технологий и стоимостью. Без воды — только конкретика.",
  },
  {
    step: "03",
    title: "Разработка и запуск",
    desc: "Реализую решение, тестирую, передаю с инструкцией. Остаюсь на связи после запуска.",
  },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "var(--cream-dark)" }} className="py-24 px-6 md:px-16 lg:px-24">
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
              <h3 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                {s.title}
              </h3>
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
      </div>
    </section>
  );
}
