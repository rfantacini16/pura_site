"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FeatureCard } from "@/components/site/FeatureCard";
import { 
  ClipboardCopy, 
  Clock, 
  RefreshCcw, 
  FolderDown,
  Shield,
  Layers,
  Sparkles,
  BookOpen,
  LineChart,
  Network
} from "lucide-react";

export function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const problems = [
    {
      icon: ClipboardCopy,
      title: "Desorganização",
      description: "Processos regulatórios espalhados em planilhas, e-mails e pastas físicas."
    },
    {
      icon: Clock,
      title: "Prazos perdidos",
      description: "Sem visibilidade sobre datas de visita e deadlines de preenchimento."
    },
    {
      icon: RefreshCcw,
      title: "Retrabalho",
      description: "Colaboradores sem clareza sobre quais indicadores devem preencher."
    },
    {
      icon: FolderDown,
      title: "Evidências perdidas",
      description: "Documentos comprobatórios sem indexação, versionamento ou centralização."
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
          title="Por que as IES precisam do PURA?" 
          subtitle="Os desafios tradicionais da gestão regulatória e auditoria acadêmica que resolvemos todos os dias."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, index) => (
            <FeatureCard
              key={index}
              icon={prob.icon}
              title={prob.title}
              description={prob.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const modules = [
    {
      icon: Layers,
      title: "Gestão de Processos de Avaliação",
      description: "Crie e gerencie processos de autorização, reconhecimento, renovação de curso, credenciamento e recredenciamento institucional. Controle o ciclo completo: preparação → preenchimento → validação → disponibilização → encerramento."
    },
    {
      icon: Network,
      title: "Indicadores e Dimensões",
      description: "Formulários estruturados conforme os instrumentos do MEC (IACG, IAIES, etc.). Dimensões e indicadores com critérios detalhados para cada nota (1 a 5). Atribuição de responsáveis por indicador."
    },
    {
      icon: FolderDown,
      title: "Repositório de Evidências",
      description: "Upload e organização de documentos comprobatórios (PDFs, DOCXs, imagens, links). Indexação por dimensão e indicador. Versionamento e rastreabilidade de quem fez o upload."
    },
    {
      icon: Shield,
      title: "Portal do Avaliador",
      description: "Frontend dedicado e seguro para avaliadores externos do MEC. Acesso controlado por status do processo. Visualização completa dos indicadores e evidências — sem possibilidade de edição."
    },
    {
      icon: Sparkles,
      title: "Pura.IA",
      description: "Mecanismo de conferência de evidências por IA. Analisa o formulário, o preenchimento dos usuários e as postagens das evidências, apontando conformidade com as exigências."
    },
    {
      icon: BookOpen,
      title: "Acervo Regulatório",
      description: "Biblioteca digital centralizada de portarias, resoluções e diretrizes do MEC vinculada diretamente aos seus indicadores regulatórios."
    },
    {
      icon: LineChart,
      title: "Dashboard e Indicadores",
      description: "Painel executivo com visão consolidada de todos os processos. Cards de status (Preparação, Em Preenchimento, Em Validação, Disponibilizado, Encerrado). Próximos prazos e alertas de urgência."
    },
    {
      icon: RefreshCcw,
      title: "Colaboração em Tempo Real",
      description: "Edição simultânea de indicadores com presença visual de quem está editando. Notificações e rastreabilidade de alterações."
    }
  ];

  return (
    <section 
      ref={ref}
      className={`site-section border-t border-site-border bg-site-bg transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="site-container">
        <SectionTitle 
          title="Tudo que sua IES precisa para a gestão regulatória" 
          subtitle="Módulos integrados construídos sob medida para a realidade regulatória das instituições brasileiras."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((mod, index) => (
            <FeatureCard
              key={index}
              icon={mod.icon}
              title={mod.title}
              description={mod.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
