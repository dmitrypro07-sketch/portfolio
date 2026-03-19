"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.innerWidth < 768) return;

    const tokens = ["0", "1", "AI", "API", "BOT", "GPT", "CRM", "n8n"];
    const fontSize = 13;
    const colWidth = 36;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(canvas.width / colWidth);
      drops = Array(columns).fill(1);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(245, 240, 232, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const token = tokens[Math.floor(Math.random() * tokens.length)];
        const x = i * colWidth;
        const y = drops[i] * fontSize;

        // Голова потока — ярче, хвост — темнее
        if (drops[i] * fontSize < canvas.height * 0.3) {
          ctx.fillStyle = "rgba(184, 147, 63, 0.28)";
        } else {
          ctx.fillStyle = "rgba(140, 90, 40, 0.14)";
        }

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(token, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
