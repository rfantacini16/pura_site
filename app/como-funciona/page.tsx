"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PAGE_METADATA } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

const MODULES = [
  {
    id: "gestao-de-processos",
    title: "Gestão de Processos",
    description: "Crie e gerencie processos de autorização, reconhecimento, renovação de curso, credenciamento e recredenciamento institucional. Controle o ciclo completo de preparação até o encerramento do processo com prazos claros e status visíveis.",
    features: [
      "Tipos de processos regulatórios suportados (Autorização, Reconhecimento, Renovação)",
      "Ciclo de status visual (Preparação, Em Preenchimento, Em Validação, Disponibilizado, Encerrado)",
      "Vinculação direta de avaliadores externos do MEC",
      "Integração de dados institucionais via código e-MEC",
      "Definição de modalidade de visita (Presencial, EAD, Híbrido)"
    ],
    image: "/mod_processes.png"
  },
  {
    id: "indicadores",
    title: "Indicadores e Formulários",
    description: "Trabalhe em formulários dinâmicos estruturados rigorosamente conforme os instrumentos oficiais de avaliação do MEC. Defina responsáveis para preencher cada item e acompanhe o andamento geral.",
    features: [
      "Modelos baseados em instrumentos de avaliação reais (IACG, IAIES)",
      "Critérios de análise detalhados para cada nota (1 a 5)",
      "Atribuição granular de responsáveis por cada indicador",
      "Cálculo de progresso em tempo real e score final previsto",
      "Histórico de notas de autoavaliação interna"
    ],
    image: "/mod_indicators.png"
  },
  {
    id: "evidencias",
    title: "Repositório de Evidências",
    description: "Centralize todos os documentos comprobatórios exigidos pelos avaliadores de forma indexada. Evite a perda de prazos e retrabalho na busca de documentos nas pastas físicas ou e-mails.",
    features: [
      "Upload multi-formato (PDF, DOCX, Imagens, links externos)",
      "Indexação automática por dimensão e indicador associado",
      "Rastreabilidade completa (quem enviou, tamanho, data de modificação)",
      "Busca rápida e avançada com filtros inteligentes",
      "Controle de versionamento de arquivos importantes"
    ],
    image: "/mod_evidence.png"
  },
  {
    id: "portal-do-avaliador",
    title: "Portal do Avaliador",
    description: "Um ambiente exclusivo e blindado de leitura para que os avaliadores externos do MEC analisem suas evidências de forma rápida e segura.",
    features: [
      "Acesso seguro gerado e gerenciado pelo PI (somente leitura)",
      "Ambiente limpo e intuitivo focado em facilidade de leitura",
      "Organização e download facilitado de evidências por dimensão",
      "Garantia de que dados privados de outros cursos fiquem protegidos",
      "Acesso condicionado estritamente ao status de 'Disponibilizado'"
    ],
    image: "/mod_evaluator.png"
  },
  {
    id: "pura-ia",
    title: "PURA.IA",
    description: "O mecanismo inovador de IA da plataforma PURA. O Pura.IA analisa automaticamente o formulário preenchido pelos usuários e as evidências anexadas, apontando imediatamente se os arquivos e dados de fato correspondem e atendem às exigências formais de cada indicador solicitado pelo MEC.",
    features: [
      "Análise automatizada de conformidade de documentos e PDFs de evidência",
      "Cruzamento inteligente entre preenchimento do formulário e arquivo anexado",
      "Apontamento de inconsistências, faltas ou inadequações regulatórias",
      "Geração de relatórios com sugestões de melhorias para atingir nota máxima",
      "Redução drástica do tempo de auditoria interna pré-avaliação do MEC"
    ],
    image: "/mod_pura_ia.png"
  },
  {
    id: "acervo-regulatorio",
    title: "Acervo Regulatório",
    description: "Um acervo digital onde estarão dispostos para pesquisa todos os documentos postados na plataforma, separados por conta, usuários e perfil de acesso, respeitando todas as regras de visibilidade e permissão de acesso estipuladas pela instituição.",
    features: [
      "Pesquisa unificada de todos os documentos anexados na plataforma",
      "Segregação total de arquivos por conta da IES",
      "Regras rígidas de visibilidade baseadas em perfil de acesso do usuário",
      "Filtros de busca inteligente por indicador, dimensão ou tipo de processo",
      "Histórico completa e logs de auditoria de visualização de arquivos"
    ],
    image: "/mod_acervo.png"
  },
  {
    id: "dashboard",
    title: "Dashboard e Indicadores",
    description: "Mantenha a alta gestão e a Procuradoria Institucional informadas com uma visão de cima de todos os processos regulatórios em andamento.",
    features: [
      "Cards de status com contagem de processos em tempo real",
      "Cronograma visual com alertas de próximos deadlines",
      "Gráficos consolidados de qualidade e notas de avaliação previstas",
      "Alertas críticos para processos próximos do vencimento",
      "Visão detalhada por campus, curso ou PI responsável"
    ],
    image: "/mod_dashboard.png"
  },
  {
    id: "cadastros",
    title: "Cadastros e Permissões",
    description: "Garanta governança total sobre o sistema com gestão flexível de usuários, perfis de acesso refinados e dados básicos de toda a IES.",
    features: [
      "Configuração de perfis: Admin, PI, Coordenador, Colaborador, Avaliador MEC",
      "Controle de acesso granular baseado em atribuições",
      "Cadastro de cursos por campus e modalidade",
      "Cadastro detalhado da IES (CNPJ, Mantenedora, Endereço)",
      "Registro de logs de atividades de auditoria de dados"
    ],
    image: "/mod_cadastros.png"
  }
];

export default function ComoFuncionaPage() {
  const [activeAnchor, setActiveAnchor] = useState("");

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
        "name": "Como Funciona",
        "item": "https://pura.com.br/como-funciona"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o Pura.IA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Pura.IA é o mecanismo inteligente da plataforma PURA que audita automaticamente o preenchimento de formulários e a conformidade de evidências documentais conforme as regras do MEC."
        }
      },
      {
        "@type": "Question",
        "name": "Quais processos regulatórios a plataforma PURA suporta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A PURA gerencia processos de Autorização, Reconhecimento e Renovação de Reconhecimento de cursos, além de Credenciamento e Recredenciamento institucional."
        }
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const mod of MODULES) {
        const el = document.getElementById(mod.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveAnchor(mod.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-site-bg">
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
            Módulos da Plataforma
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Como Funciona a PURA
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Descubra todos os recursos desenhados especificamente para guiar as IES brasileiras rumo à excelência nos processos regulatórios e avaliações do MEC.
          </p>
        </div>
      </section>

      {/* Sticky Sub-navigation Anchor Bar */}
      <nav className="sticky top-[73px] z-40 w-full border-b border-[var(--site-primary)] bg-white/80 backdrop-blur-md hidden md:block">
        <div className="site-container">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4">
            {MODULES.map((mod) => (
              <a
                key={mod.id}
                href={`#${mod.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  trackEvent("feature_card_click", { action: "anchor_nav", module_id: mod.id, module_title: mod.title });
                  document.getElementById(mod.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-xs font-bold whitespace-nowrap uppercase tracking-wider transition-colors hover:text-[var(--site-primary)] shrink-0 ${
                  activeAnchor === mod.id ? "text-[var(--site-primary)]" : "text-site-text-secondary"
                }`}
              >
                {mod.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Modules Sections */}
      <div className="site-container py-16 lg:py-24 flex flex-col gap-24 lg:gap-36">
        {MODULES.map((mod, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={mod.id}
              id={mod.id}
              className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image Column */}
              <div className={`relative w-full max-w-xl mx-auto ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-site-primary to-site-accent opacity-10 blur-xl -z-10" />
                <div className="overflow-hidden rounded-[var(--site-radius-lg)] border border-site-border bg-white shadow-xl">
                  {/* Mockup Topbar */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-site-border bg-site-bg-subtle">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  {/* Image wrapper */}
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`flex flex-col text-left max-w-xl ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <h2 className="text-2xl sm:text-3xl font-bold text-site-text mb-4">
                  {mod.title}
                </h2>
                <p className="text-base sm:text-lg text-site-text-secondary mb-6 leading-relaxed">
                  {mod.description}
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-3 mb-8">
                  {mod.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-site-primary/10 text-site-primary">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm text-site-text-secondary leading-normal">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <div>
                  <Link
                    href="/contato"
                    onClick={() => trackEvent("feature_card_click", { action: "cta_button", module_id: mod.id, module_title: mod.title })}
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-site-primary rounded-[var(--site-radius-sm)] hover:bg-site-primary-hover transition-colors shadow-md shadow-site-primary/10 group"
                  >
                    Ver Apresentação
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
