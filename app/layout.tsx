import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pura.com.br"),
  title: {
    default: "Pura - Regulação Acadêmica",
    template: "%s | Pura - Regulação Acadêmica",
  },
  description: "Organize processos de avaliação do MEC, distribua indicadores, colete evidências e realize auditorias inteligentes com inteligência artificial.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pura.com.br",
    siteName: "PURA",
    images: [
      {
        url: "/team_data.png",
        width: 1200,
        height: 630,
        alt: "PURA - Regulação Acadêmica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/team_data.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col bg-site-bg text-site-text font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
