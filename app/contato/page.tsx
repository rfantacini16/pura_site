import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/site-data";
import { ContactForm, CallbackForm } from "@/components/site/ContactForm";
import { Mail, Clock, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_METADATA.contato.title,
  description: PAGE_METADATA.contato.description,
  alternates: {
    canonical: "/contato",
  },
};

export default function ContatoPage() {
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
        "name": "Contato",
        "item": "https://pura.com.br/contato"
      }
    ]
  };

  return (
    <div className="bg-site-bg min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#080E1C] text-white">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(100% 100% at 50% 0%, var(--site-primary) 0%, transparent 60%)" }} />
        <div className="site-container relative text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-site-accent mb-4 w-fit backdrop-blur-md">
            Contato e Demonstrações
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Fale com nossa equipe
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Estamos prontos para entender as necessidades da sua IES e propor o melhor formato de implantação da PURA.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="site-section site-container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div>
              <h2 className="text-2xl font-bold text-site-text">Canais de Contato</h2>
              <p className="mt-2 text-sm text-site-text-secondary">
                Escolha a melhor forma de interagir com os especialistas de regulação acadêmica da PURA.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-site-primary/10 text-site-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-site-text">E-mail Comercial</h4>
                  <p className="mt-1 text-sm text-site-text-secondary">contato@pura.com.br</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-site-primary/10 text-site-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-site-text">Horário de Atendimento</h4>
                  <p className="mt-1 text-sm text-site-text-secondary">Segunda a Sexta-feira, das 8h às 18h (Horário de Brasília)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-site-primary/10 text-site-primary">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-site-text">Conformidade LGPD</h4>
                  <p className="mt-1 text-sm text-site-text-secondary">Seus dados e os dados de sua instituição estão protegidos conforme as regras da Lei Geral de Proteção de Dados.</p>
                </div>
              </div>
            </div>

            {/* Quick Callback Widget */}
            <div className="mt-4 pt-6 border-t border-site-border">
              <CallbackForm />
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
