"use client";

import { motion } from "framer-motion";

const cases = [
  {
    tag: "Косметология",
    title: "ИИ-ассистент для врача-косметолога",
    problem: "Клиент терял потенциальных пациентов — не успевал отвечать на сообщения вручную. Конкуренты отвечали быстрее.",
    solution: "Внедрили ИИ-ассистента в ВКонтакте, который отвечает на вопросы об услугах, ценах и записи круглосуточно.",
    results: [
      { num: "85%", label: "сообщений обрабатывает ИИ" },
      { num: "50ч", label: "сэкономлено в месяц" },
      { num: "24/7", label: "доступность" },
    ],
  },
];

export default function Cases() {
  return (
    <section id="cases" style={{ backgroundColor: "var(--cream)" }} className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em" }} className="text-xs uppercase font-medium mb-4">
            Кейсы
          </p>
          <h2 style={{ color: "var(--ink)", lineHeight: 1.1 }} className="text-4xl md:text-5xl font-light">
            Реальные результаты
          </h2>
        </motion.div>

        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              border: "1px solid var(--cream-deeper)",
              backgroundColor: "var(--cream-dark)",
            }}
            className="p-8 md:p-12"
          >
            <span
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                letterSpacing: "0.1em",
              }}
              className="text-xs uppercase px-3 py-1 inline-block mb-6"
            >
              {c.tag}
            </span>

            <h3 style={{ color: "var(--ink)" }} className="text-2xl md:text-3xl font-light mb-8">
              {c.title}
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <p style={{ color: "var(--gold)", letterSpacing: "0.15em" }} className="text-xs uppercase mb-3">
                  Проблема
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8 }} className="text-sm">
                  {c.problem}
                </p>
              </div>
              <div>
                <p style={{ color: "var(--gold)", letterSpacing: "0.15em" }} className="text-xs uppercase mb-3">
                  Решение
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8 }} className="text-sm">
                  {c.solution}
                </p>
              </div>
            </div>

            <div className="gold-line mb-10" />

            <div className="flex gap-8 md:gap-12 flex-wrap">
              {c.results.map((r, j) => (
                <div key={j}>
                  <p style={{ color: "var(--gold)", fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl font-light">
                    {r.num}
                  </p>
                  <p style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest mt-1">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ color: "var(--muted)" }}
          className="text-sm mt-8 text-center"
        >
          Больше кейсов — в процессе. Каждый проект уникален.
        </motion.p>
      </div>
    </section>
  );
}
