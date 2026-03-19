import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ten-rust-57.vercel.app"),
  title: "Дмитрий Прокофьев — Автоматизация бизнеса и ИИ",
  description: "Внедряю ИИ-ассистентов и автоматизацию бизнес-процессов. Избавляю от рутины — за 48 часов запускаю рабочее решение. Чат-боты, n8n, Savvy, Uclients.",
  keywords: ["автоматизация бизнеса", "ИИ ассистент", "чат-бот", "n8n", "Savvy", "Uclients", "автоматизация процессов"],
  openGraph: {
    title: "Дмитрий Прокофьев — Автоматизация бизнеса и ИИ",
    description: "Внедряю ИИ-ассистентов и автоматизацию бизнес-процессов. За 48 часов запускаю рабочее решение.",
    url: "https://portfolio-ten-rust-57.vercel.app",
    siteName: "Дмитрий Прокофьев",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Дмитрий Прокофьев — Автоматизация бизнеса" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Дмитрий Прокофьев — Автоматизация бизнеса и ИИ",
    description: "Внедряю ИИ-ассистентов и автоматизацию бизнес-процессов. За 48 часов запускаю рабочее решение.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
