import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = "https://www.ibiunawakeboard.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Campeonato Brasileiro de Wakeboard & WakeSurf 2026 | Ibiúna",
  description:
    "Campeonato Brasileiro de Wakeboard e WakeSurf 2026 na Represa de Itupararanga, Ibiúna/SP. 19, 20 e 21 de novembro. Marina Veleiros de Ibiúna · Barco oficial Nautique G23.",
  keywords: [
    "wakeboard",
    "wakesurf",
    "Ibiúna",
    "campeonato brasileiro",
    "Itupararanga",
    "Nautique G23",
    "esporte náutico",
  ],
  authors: [{ name: "Ibiúna Wake & Surf" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Ibiúna Wake & Surf",
    title: "Campeonato Brasileiro de Wakeboard & WakeSurf 2026 | Ibiúna",
    description:
      "19, 20 e 21 de novembro de 2026 · Represa de Itupararanga, Ibiúna/SP. O maior encontro de Wakeboard e WakeSurf do Brasil.",
    images: [{ url: "/img/capa.jpg", width: 1200, height: 630, alt: "Ibiúna Wake & Surf 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campeonato Brasileiro de Wakeboard & WakeSurf 2026 | Ibiúna",
    description:
      "19, 20 e 21 de novembro de 2026 · Represa de Itupararanga, Ibiúna/SP.",
    images: ["/img/capa.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        <noscript>
          <style>{`[data-reveal],[data-reveal-group]>*,.capa .content>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
