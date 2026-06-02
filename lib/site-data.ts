import type { LucideIcon } from "lucide-react";

/* ===== Navigation ===== */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Planos", href: "/planos" },
];

/* ===== Footer ===== */

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Produto",
    links: [
      { label: "Home", href: "/" },
      { label: "Como Funciona", href: "/como-funciona" },
      { label: "Planos e Preços", href: "/planos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Quem Somos", href: "/sobre" },
      { label: "Agendar Demonstração", href: "/contato" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Privacidade", href: "#" },
    ],
  },
];

/* ===== Features ===== */

export interface FeatureData {
  iconName: string;
  title: string;
  description: string;
}

export const FEATURES: FeatureData[] = [
  {
    iconName: "ClipboardCheck",
    title: "Gestão de Processos",
    description:
      "Gerencie processos de autorização, reconhecimento, renovação, credenciamento e recredenciamento em um único lugar.",
  },
  {
    iconName: "BarChart3",
    title: "Indicadores e Dimensões",
    description:
      "Formulários estruturados conforme os instrumentos do MEC com critérios detalhados para cada nota.",
  },
  {
    iconName: "FileArchive",
    title: "Repositório de Evidências",
    description:
      "Upload e organização de documentos comprobatórios com indexação por dimensão e indicador.",
  },
  {
    iconName: "Shield",
    title: "Portal do Avaliador",
    description:
      "Frontend dedicado e seguro para avaliadores externos do MEC com acesso controlado.",
  },
  {
    iconName: "Sparkles",
    title: "Pura.IA",
    description:
      "Inteligência Artificial que analisa o preenchimento de usuários e valida se as evidências anexadas estão em conformidade com as regras do formulário do MEC.",
  },
  {
    iconName: "Library",
    title: "Acervo Regulatório",
    description:
      "Biblioteca de consulta e pesquisa onde todos os documentos postados na plataforma ficam disponíveis respeitando regras rígidas de visibilidade por conta, usuário e perfil de acesso da instituição.",
  },
  {
    iconName: "LayoutDashboard",
    title: "Dashboard Executivo",
    description:
      "Painel consolidado com visão de todos os processos, status em tempo real e alertas de prazos.",
  },
  {
    iconName: "RefreshCw",
    title: "Colaboração em Tempo Real",
    description:
      "Edição simultânea de indicadores com presença visual e rastreabilidade de alterações.",
  },
];

/* ===== Pricing ===== */

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  badge?: string;
  subtitle: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "PURA Cloud",
    badge: "Essencial",
    subtitle: "Nenhuma preocupação com infraestrutura. Tudo na nuvem da PURA.",
    features: [
      { text: "Todos os módulos inclusos", included: true },
      { text: "Armazenamento em nuvem gerenciado", included: true },
      { text: "Backup automático e criptografia", included: true },
      { text: "Implantação assistida", included: true },
      { text: "Suporte via e-mail e WhatsApp", included: true },
      { text: "Atualizações automáticas", included: true },
      { text: "Análise inteligente Pura.IA", included: false },
      { text: "Deploy em infraestrutura própria", included: false },
    ],
    ctaLabel: "Contratar Plano Cloud",
    ctaHref: "/contato?plano=cloud",
    highlighted: false,
  },
  {
    name: "PURA On-Premise",
    badge: "Para IES com Infraestrutura",
    subtitle:
      "A plataforma PURA rodando na infraestrutura de servidores da sua instituição.",
    features: [
      { text: "Todos os módulos inclusos", included: true },
      { text: "Storage na infraestrutura da IES", included: true },
      { text: "Controle total dos dados", included: true },
      { text: "Domínio personalizado", included: true },
      { text: "Integração SSO/LDAP", included: true },
      { text: "Suporte prioritário com SLA", included: true },
      { text: "Treinamento presencial ou remoto", included: true },
      { text: "Atualizações gerenciadas", included: true },
    ],
    ctaLabel: "Falar com Equipe",
    ctaHref: "/contato?plano=on-premise",
    highlighted: false,
  },
  {
    name: "PURA.IA",
    badge: "Mais Completo (Recomendado)",
    subtitle: "Nuvem da PURA com auditoria automatizada por IA e créditos mensais.",
    features: [
      { text: "Todos os módulos inclusos", included: true },
      { text: "Contratação de 500 créditos/mês de IA", included: true },
      { text: "Uso de IA em qualquer processo criado", included: true },
      { text: "Conferência automatizada de evidências", included: true },
      { text: "Suporte prioritário e implantação assistida", included: true },
      { text: "Backup automático e criptografia", included: true },
      { text: "Armazenamento em nuvem gerenciado", included: true },
      { text: "Atualizações automáticas exclusivas", included: true },
    ],
    ctaLabel: "Contratar Plano PURA.IA",
    ctaHref: "/contato?plano=pura-ia",
    highlighted: true,
  },
];

/* ===== How It Works Steps ===== */

export interface StepData {
  number: number;
  title: string;
  description: string;
}

export const STEPS: StepData[] = [
  {
    number: 1,
    title: "Criação do Processo",
    description:
      "O PI cria o processo de avaliação, define tipo, curso, datas de visita e código e-MEC.",
  },
  {
    number: 2,
    title: "Atribuição de Indicadores",
    description:
      "O PI distribui cada indicador para o colaborador ou coordenador responsável.",
  },
  {
    number: 3,
    title: "Preenchimento Colaborativo",
    description:
      "Colaboradores preenchem notas, observações e anexam evidências — cada um no seu indicador.",
  },
  {
    number: 4,
    title: "Validação Interna",
    description:
      "O PI fecha para edição e revisa todo o conteúdo preenchido antes de disponibilizar.",
  },
  {
    number: 5,
    title: "Disponibilização",
    description:
      "Os avaliadores externos do MEC acessam o portal dedicado com visualização completa.",
  },
];

/* ===== SEO Metadata per Page ===== */

export const PAGE_METADATA = {
  home: {
    title: "Pura - Regulação Acadêmica",
    description:
      "Organize processos de avaliação do MEC, distribua indicadores, colete evidências e disponibilize para avaliadores. A solução completa para IES.",
  },
  comoFunciona: {
    title: "Como Funciona — PURA",
    description:
      "Entenda o fluxo completo de gestão regulatória da PURA, do cadastro do processo até a disponibilização para avaliadores do MEC.",
  },
  planos: {
    title: "Planos e Preços — PURA",
    description:
      "Compare os planos Cloud e On-Premise da PURA. Escolha a melhor opção para sua IES.",
  },
  contato: {
    title: "Agendar Demonstração — PURA",
    description:
      "Fale com a equipe da PURA. Agende uma demonstração ou contrate a plataforma para sua instituição.",
  },
  sobre: {
    title: "Quem Somos — PURA",
    description:
      "Iniciativa destinada a ajudar instituições de ensino superior, PIs, colaboradores e coordenadores a alcançar excelência regulatória.",
  },
} as const;
