import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/site-data";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Users2, GraduationCap, Award, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_METADATA.sobre.title,
  description: PAGE_METADATA.sobre.description,
  alternates: {
    canonical: "/sobre",
  },
};

export default function SobrePage() {
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
        "name": "Quem Somos",
        "item": "https://pura.com.br/sobre"
      }
    ]
  };
  const pillars = [
    {
      icon: GraduationCap,
      title: "Instituições de Ensino",
      description: "Estruture e organize processos regulatórios de autorização, reconhecimento ou renovação com total controle administrativo e facilidade no fluxo documental."
    },
    {
      icon: Users2,
      title: "Procuradores Institucionais (PI)",
      description: "Gerencie o ciclo de status, atribua indicadores com prazos assertivos e valide evidências com o auxílio inteligente da Pura.IA."
    },
    {
      icon: Award,
      title: "Coordenadores de Curso",
      description: "Acompanhe e preencha indicadores específicos de seus cursos sem retrabalho, centralizando todo o histórico em uma única plataforma."
    },
    {
      icon: ShieldCheck,
      title: "Colaboradores",
      description: "Preencha as notas exigidas e faça o upload ágil de documentos comprobatórios com indexação automática por dimensão."
    }
  ];

  return (
    <div className="bg-site-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#080E1C] text-white">
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{ background: "radial-gradient(100% 100% at 50% 0%, var(--site-primary) 0%, transparent 60%)" }} />
        <div className="site-container relative text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-site-accent mb-4 w-fit backdrop-blur-md">
            Nossa Iniciativa
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Quem Somos
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Somos uma iniciativa dedicada a ajudar as instituições de ensino superior (IES) a alcançar a excelência nos processos regulatórios e avaliações do MEC.
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="site-section site-container">
        <SectionTitle
          title="Uma plataforma sob medida para todos os papéis"
          subtitle="A PURA foi desenhada para integrar perfeitamente a gestão, o preenchimento operacional e a auditoria de documentos das avaliações do MEC."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col gap-4 p-6 rounded-[var(--site-radius)] border border-site-border bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-site-primary/10 text-site-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-site-text">{pillar.title}</h3>
                <p className="text-sm text-site-text-secondary leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
