import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/site-data";
import { HeroSection } from "@/components/site/HeroSection";
import { ProblemSection, SolutionSection } from "@/components/site/HomeSections";
import { HowItWorksSection } from "@/components/site/HowItWorksSection";
import { CTASection } from "@/components/site/CTASection";

export const metadata: Metadata = {
  title: PAGE_METADATA.home.title,
  description: PAGE_METADATA.home.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PURA",
    "url": "https://pura.com.br",
    "logo": "https://pura.com.br/logo.png",
    "description": "Plataforma Inteligente de Regulação Acadêmica para IES brasileiras em conformidade com as diretrizes do MEC.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "contato@pura.com.br"
    }
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PURA - Plataforma de Regulação Acadêmica",
    "image": "https://pura.com.br/team_data.png",
    "description": "A plataforma de regulação acadêmica mais inovadora do Brasil, com auditoria de evidências por inteligência artificial (Pura.IA).",
    "brand": {
      "@type": "Brand",
      "name": "PURA"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": "0",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "PURA Cloud",
          "url": "https://pura.com.br/planos"
        },
        {
          "@type": "Offer",
          "name": "PURA On-Premise",
          "url": "https://pura.com.br/planos"
        },
        {
          "@type": "Offer",
          "name": "PURA.IA",
          "url": "https://pura.com.br/planos"
        }
      ]
    }
  };

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <CTASection
        title="Pronto para transformar a gestão regulatória da sua IES?"
        subtitle="Agende uma demonstração com nossos especialistas ou escolha o melhor plano de implantação."
        primaryCTA={{ label: "Ver Planos e Preços", href: "/planos" }}
        secondaryCTA={{ label: "Agendar Demonstração", href: "/contato" }}
      />
    </main>
  );
}
