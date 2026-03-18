export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--ink)", borderTop: "1px solid rgba(184,147,63,0.1)" }} className="py-8 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(245,240,232,0.4)" }} className="text-sm">
          © 2025–2026 Дмитрий Прокофьев
        </p>
        <p style={{ color: "rgba(245,240,232,0.2)" }} className="text-xs uppercase tracking-widest">
          Автоматизация · ИИ-ассистенты · Вайбкодинг
        </p>
      </div>
    </footer>
  );
}
