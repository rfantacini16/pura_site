import type { Metadata } from "next";
import { PAGE_METADATA, PRICING_PLANS } from "@/lib/site-data";
import { PricingCard } from "@/components/site/PricingCard";
import { TrackPageView } from "@/components/site/TrackPageView";

export const metadata: Metadata = {
  title: PAGE_METADATA.planos.title,
  description: PAGE_METADATA.planos.description,
  alternates: {
    canonical: "/planos",
  },
};

export default function PlanosPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pura.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Planos e Preços",
        "item": "https://pura.com.br/planos"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual a diferença entre os planos PURA Cloud e On-Premise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O plano Cloud é hospedado em infraestrutura de nuvem segura da PURA com atualizações e backups automáticos. O plano On-Premise é implantado localmente nos servidores da própria instituição de ensino superior."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona o suporte aos planos da PURA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Todos os planos contam com suporte especializado para PIs e equipes. O plano On-Premise e a edição PURA.IA oferecem canais dedicados e implantação assistida."
        }
      }
    ]
  };

  return (
    <div className="bg-site-bg min-h-screen">
      <TrackPageView eventName="plan_view" />
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#080E1C] text-white">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(100% 100% at 50% 0%, var(--site-primary) 0%, transparent 60%)" }} />
        <div className="site-container relative text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-site-accent mb-4 w-fit backdrop-blur-md">
            Nossos Planos
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Escolha o plano ideal para sua instituição
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Modelos de contratação flexíveis, adaptados ao porte e à infraestrutura da sua IES.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="site-section site-container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              badge={plan.badge}
              subtitle={plan.subtitle}
              features={plan.features}
              ctaLabel={plan.ctaLabel}
              ctaHref={plan.ctaHref}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
