import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue - Movilidad urbana inteligente",
  description: "Conéctate al futuro del transporte",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-VE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" />
      </head>
      <body className="min-h-dvh bg-white text-[#231b1c] antialiased">
        {children}
      </body>
    </html>
  );
}