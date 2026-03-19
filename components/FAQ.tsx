"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Сколько стоит автоматизация?",
    a: "Зависит от задачи. Простой бот — от 15 000 ₽. Полная автоматизация процессов — от 40 000 ₽. На созвоне за 30 минут разберём твою ситуацию и назову точную цифру. Без скрытых доплат.",
  },
  {
    q: "Я не разбираюсь в технологиях — это проблема?",
    a: "Нет. Моя работа — сделать так, чтобы всё работало само. Ты получаешь готовое решение и инструкцию. Если что-то пойдёт не так — пишешь мне, разбираемся.",
  },
  {
    q: "Сколько времени займёт внедрение?",
    a: "Простой ИИ-ассистент — 3–5 дней. Автоматизация нескольких процессов — 2–4 недели. Конкретные сроки обсуждаем до старта и фиксируем.",
  },
  {
    q: "А если бот будет отвечать неправильно?",
    a: "Дорабатываю бесплатно в течение 30 дней после запуска. Это не просто слова — это условие договора.",
  },
  {
    q: "Какие инструменты используешь?",
    a: "Зависит от твоей задачи. Не привязываюсь к одному инструменту — выбираю то, что решит проблему быстрее и надёжнее. В арсенале: n8n, Savvy, Uclients, Neuroagents, Telegram API и другие.",
  },
  {
    q: "Останется ли всё это работать если я перестану платить?",
    a: "Да. Всё что настроено — твоё. Код, сценарии, интеграции передаю с документацией. Я не создаю зависимость от себя.",
  },
  {
    q: "Что будет после 30 дней гарантии?",
    a: "Ты можешь обратиться в любой момент — помогу за отдельную плату. Большинство клиентов после запуска справляются сами: всё передаю с инструкцией. Если нужны новые сценарии или интеграции — договоримся отдельно.",
  },
  {
    q: "Как я буду знать что бот отвечает правильно?",
    a: "В процессе настройки тестируем вместе — ты пишешь как клиент, смотрим что отвечает бот. После запуска у тебя будет доступ к истории диалогов. Если что-то идёт не так — сразу видно и сразу правим.",
  },
  {
    q: "Когда можно начать?",
    a: "Написать можно прямо сейчас. Созвон — в течение 1–2 дней. После него сразу понятно подходим ли друг другу и когда стартуем.",
  },
  {
    q: "Ты работаешь с любым бизнесом?",
    a: "Работаю с малым и средним бизнесом где есть входящие запросы и повторяющаяся рутина. Косметология, строительство, beauty, услуги — всё подходит. Если не уверен — напиши, разберёмся на созвоне.",
  },
  {
    q: "Нужен ли мне договор?",
    a: "Да, работаю по договору. Фиксируем объём работ, сроки, стоимость и условия гарантии. Это защищает обе стороны.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ backgroundColor: "var(--cream)" }} className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p style={{ color: "var(--gold)", letterSpacing: "0.2em" }} className="text-xs uppercase font-medium mb-4">
            Частые вопросы
          </p>
          <h2 style={{ color: "var(--ink)", lineHeight: 1.1 }} className="text-4xl md:text-5xl font-light">
            Отвечаю честно
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ borderTop: "1px solid var(--cream-deeper)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <span
                  style={{
                    color: open === i ? "var(--gold)" : "var(--ink)",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "color 0.2s ease",
                  }}
                  className="text-base md:text-lg pr-8"
                >
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ color: "var(--gold)", flexShrink: 0, fontSize: "24px", lineHeight: 1 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{ color: "var(--muted)", lineHeight: 1.9 }}
                      className="text-sm md:text-base pb-6 pr-12"
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--cream-deeper)" }} />
        </div>
      </div>
    </section>
  );
}
