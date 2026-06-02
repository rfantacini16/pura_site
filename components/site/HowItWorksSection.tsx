"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/site/SectionTitle";
import { 
  PlusCircle, 
  UserCheck, 
  Users2, 
  FileCheck, 
  Globe2,
  ArrowRight
} from "lucide-react";

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    {
      number: 1,
      icon: PlusCircle,
      title: "Criação do Processo",
      description: "O PI cria o processo de avaliação, define tipo, curso, datas de visita e código e-MEC."
    },
    {
      number: 2,
      icon: UserCheck,
      title: "Atribuição de Indicadores",
      description: "O PI distribui cada indicador para o colaborador ou coordenador responsável."
    },
    {
      number: 3,
      icon: Users2,
      title: "Preenchimento Colaborativo",
      description: "Colaboradores preenchem notas (1-5), observações e anexam evidências — cada um no seu indicador."
    },
    {
      number: 4,
      icon: FileCheck,
      title: "Validação Interna",
      description: "O PI fecha para edição e revisa todo o conteúdo preenchido antes de disponibilizar."
    },
    {
      number: 5,
      icon: Globe2,
      title: "Disponibilização para Avaliadores",
      description: "Os avaliadores externos do MEC acessam o portal dedicado com visualização completa."
    }
  ];

  return (
    <section
      ref={ref}
      className={`site-section border-t border-site-border bg-site-bg-subtle transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="site-container">
        <SectionTitle
          title="Simples de usar, poderoso de verdade"
          subtitle="Entenda como a PURA organiza o fluxo regulatório da sua instituição do início ao fim."
        />

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block relative mt-16 mb-20">
          {/* Connecting Line */}
          <div 
            className="absolute top-8 left-0 right-0 h-0.5 -z-10"
            style={{ backgroundColor: "var(--site-border)" }}
          />

          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center relative group">
                  {/* Step Bubble / Icon */}
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-site-bg-subtle transition-all duration-300 group-hover:scale-110 shadow-md"
                    style={{
                      backgroundColor: "var(--site-bg)",
                      color: "var(--site-primary)",
                      borderColor: "var(--site-border)"
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Step Number Tag */}
                  <div className="mt-4 px-2 py-0.5 rounded-full text-xs font-bold bg-site-primary/10 text-site-primary">
                    Passo {step.number}
                  </div>

                  {/* Title & Desc */}
                  <h3 className="mt-4 text-lg font-semibold text-site-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-site-text-secondary leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden relative mt-12 mb-16 pl-8">
          {/* Vertical Connecting Line */}
          <div
            className="absolute top-0 bottom-0 left-4 w-0.5"
            style={{ backgroundColor: "var(--site-border)" }}
          />

          <div className="flex flex-col gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col gap-2 text-left">
                  {/* Icon Node */}
                  <div
                    className="absolute -left-8 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-site-bg-subtle shadow-sm -translate-x-1/2"
                    style={{
                      backgroundColor: "var(--site-bg)",
                      color: "var(--site-primary)",
                      borderColor: "var(--site-border)"
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Step Info */}
                  <span className="text-xs font-bold text-site-primary">
                    PASSO 0{step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-site-text">
                    {step.title}
                  </h3>
                  <p className="text-sm text-site-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA section alignment inside how it works */}
        <div className="flex justify-center mt-12">
          <Link
            href="/como-funciona"
            className="inline-flex items-center gap-2 rounded-[var(--site-radius-sm)] border border-site-border bg-site-bg px-6 py-3 text-sm font-semibold transition-all hover:bg-site-bg-subtle"
            style={{ color: "var(--site-text)" }}
          >
            Ver funcionamento dos módulos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
