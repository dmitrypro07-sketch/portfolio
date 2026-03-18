"use client";

import { motion } from "framer-motion";

const tools = ["n8n", "Make", "OpenAI", "Telegram", "Savvy", "Neuroagents", "Vercel", "Supabase"];

export default function LogosStrip() {
  return (
    <section style={{ backgroundColor: "var(--cream-dark)", borderTop: "1px solid var(--cream-deeper)", borderBottom: "1px solid var(--cream-deeper)" }}
      className="py-8 overflow-hidden">
      <div className="flex items-center gap-4 mb-3">
        <p style={{ color: "var(--muted)", whiteSpace: "nowrap" }} className="text-xs uppercase tracking-widest pl-6 md:pl-16">
          Работаю с
        </p>
        <div className="gold-line flex-1" />
      </div>
      <motion.div
        className="flex gap-10 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {[...tools, ...tools].map((tool, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--ink-light)",
              whiteSpace: "nowrap",
            }}
            className="text-2xl font-light px-4"
          >
            {tool}
            <span style={{ color: "var(--gold)", marginLeft: "1rem" }}>·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
