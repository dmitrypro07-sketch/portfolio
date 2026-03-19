"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cases = [
  {
    tag: "Косметология",
    date: "Февраль 2025",
    title: "ИИ-ассистент для врача-косметолога",
    problem: "Клиент терял потенциальных пациентов — не успевал отвечать на сообщения вручную. Конкуренты отвечали быстрее.",
    solution: "Внедрили ИИ-ассистента в ВКонтакте через Uclients. Бот отвечает на вопросы об услугах, ценах и записи круглосуточно — без участия врача.",
    results: [
      { num: "85%", label: "сообщений обрабатывает ИИ" },
      { num: "50ч", label: "сэкономлено в месяц" },
      { num: "24/7", label: "доступность" },
    ],
  },
  {
    tag: "Наливные полы",
    date: "Январь 2025",
    title: "Авито-бот с предварительным расчётом стоимости",
    problem: "Заявки с Авито терялись — владелец не успевал отвечать вовремя. Клиенты уходили к тем, кто ответил первым.",
    solution: "Создали бота через Savvy с интеграцией Авито. Бот отвечает мгновенно, делает предварительный расчёт по параметрам клиента и шлёт уведомление владельцу в Telegram о каждом новом диалоге.",
    results: [
      { num: "<1мин", label: "время первого ответа" },
      { num: "Авито", label: "интеграция через Savvy" },
      { num: "Telegram", label: "уведомления владельцу" },
    ],
  },
  {
    tag: "СПА-салон",
    date: "Март 2025",
    title: "Бот-администратор для СПА-салона",
    problem: "Администраторы не успевали обрабатывать входящие сообщения. Клиенты писали и не получали ответа — запись срывалась.",
    solution: "Подключили ИИ-ассистента через Uclients. Бот отвечает мгновенно, консультирует по услугам и ценам, помогает с записью — в любое время без участия сотрудников.",
    results: [
      { num: "0с", label: "ожидания первого ответа" },
      { num: "24/7", label: "без выходных и обедов" },
      { num: "Uclients", label: "интеграция с CRM" },
    ],
  },
];

export default function Cases() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => go(current === 0 ? cases.length - 1 : current - 1);
  const next = () => go(current === cases.length - 1 ? 0 : current + 1);

  const c = cases[current];

  return (
    <section id="cases" style={{ backgroundColor: "var(--cream-dark)" }} className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em" }} className="text-xs uppercase font-medium mb-4">
            Последние кейсы
          </p>
          <h2 style={{ color: "var(--ink)", lineHeight: 1.1 }} className="text-4xl md:text-5xl font-light">
            3 проекта — 3 разных ниши
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: "var(--muted)" }}
          className="text-sm mb-12"
        >
          Автоматизация работает в любом бизнесе — где есть входящие запросы и рутина.
        </motion.p>

        {/* Карточка */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, y: -120, rotate: direction * -8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, rotate: direction * 6, scale: 0.88 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150, damping: 18 }}
              onClick={next}
              style={{
                border: "1px solid var(--cream-deeper)",
                backgroundColor: "var(--cream)",
                cursor: "pointer",
              }}
              className="p-8 md:p-12"
            >
              <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
                <span style={{ border: "1px solid var(--gold)", color: "var(--gold)", letterSpacing: "0.1em" }}
                  className="text-xs uppercase px-3 py-1 inline-block">
                  {c.tag}
                </span>
                <span style={{ color: "var(--muted)" }} className="text-xs">{c.date}</span>
              </div>

              <h3 style={{ color: "var(--ink)" }} className="text-2xl md:text-3xl font-light mb-8">
                {c.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <p style={{ color: "var(--gold)", letterSpacing: "0.15em" }} className="text-xs uppercase mb-3">Проблема</p>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8 }} className="text-sm">{c.problem}</p>
                </div>
                <div>
                  <p style={{ color: "var(--gold)", letterSpacing: "0.15em" }} className="text-xs uppercase mb-3">Решение</p>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8 }} className="text-sm">{c.solution}</p>
                </div>
              </div>

              <div className="gold-line mb-10" />

              <div className="flex gap-8 md:gap-12 flex-wrap">
                {c.results.map((r, j) => (
                  <div key={j}>
                    <p style={{ color: "var(--gold)", fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl font-light">
                      {r.num}
                    </p>
                    <p style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest mt-1">{r.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Навигация */}
        <div className="flex items-center justify-between mt-8">
          {/* Точки */}
          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: i === current ? "32px" : "8px",
                  height: "8px",
                  backgroundColor: i === current ? "var(--gold)" : "var(--cream-deeper)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Стрелки */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              style={{
                border: "1px solid var(--cream-deeper)",
                backgroundColor: "transparent",
                color: "var(--muted)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cream-deeper)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
              }}
            >
              ←
            </button>
            <button
              onClick={next}
              style={{
                border: "1px solid var(--cream-deeper)",
                backgroundColor: "transparent",
                color: "var(--muted)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cream-deeper)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
