"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageSquare, PhoneCall, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trackEvent } from "@/lib/analytics";

const SLIDES = [
  {
    tag: "Auditoria de Evidências com Pura.IA",
    title: "Auditoria Inteligente para Nota Máxima no MEC.",
    description: "Analise automaticamente os formulários preenchidos e a conformidade de cada documento de evidência anexado. O Pura.IA aponta inconsistências na hora para garantir segurança total.",
    image: "/mod_pura_ia.png",
    alt: "Painel de análise automatizada do Pura.IA verificando conformidade de documentos do MEC",
    ctaPrimary: { label: "Agendar Demonstração", href: "/contato" },
    ctaSecondary: { label: "Conhecer Planos", href: "/planos" }
  },
  {
    tag: "Plataforma Unificada de Regulação Acadêmica",
    title: "Conte com a PURA para a sua Operação.",
    description: "Alta qualidade, segurança e conformidade total com as diretrizes do MEC. A plataforma inteligente que automatiza seus processos regulatórios e garante nota máxima.",
    image: "/pura_hero_user.png",
    alt: "Profissional de TI e Regulação IES sorrindo com celular na mão",
    ctaPrimary: { label: "Agendar Demonstração", href: "/contato" },
    ctaSecondary: { label: "Conhecer Planos", href: "/planos" }
  },
  {
    tag: "Conformidade e Regulação com o MEC",
    title: "Sua IES preparada para qualquer avaliação do MEC",
    description: "A PURA é a plataforma completa de gestão regulatória acadêmica desenvolvida para estruturar seus processos, centralizar evidências, realizar auditoria com inteligência artificial e otimizar a colaboração entre equipes para garantir notas máximas nas avaliações institucionais.",
    image: "/team_data.png",
    alt: "Um rapaz e uma PI olhando para dados num computador e felizes",
    ctaPrimary: { label: "Agendar Demonstração", href: "/contato" },
    ctaSecondary: { label: "Conhecer Planos", href: "/planos" }
  }
];

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[activeSlide];

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-28 transition-all duration-1000 bg-[#080E1C] text-white ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background Graphic Patterns & Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px]" 
          style={{ background: "radial-gradient(circle, var(--site-primary) 0%, transparent 70%)" }}
        />
        <div 
          className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full blur-[120px]" 
          style={{ background: "radial-gradient(circle, var(--site-secondary) 0%, transparent 70%)" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="site-container relative z-10 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="flex flex-col text-left lg:col-span-6 max-w-xl">
            {/* Tag Badge */}
            <div key={`tag-${activeSlide}`} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-site-accent mb-6 w-fit backdrop-blur-md animate-fade-in">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{slide.tag}</span>
            </div>

            <h1 key={`title-${activeSlide}`} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.15] text-white animate-fade-in">
              {slide.title}
            </h1>

            <p key={`desc-${activeSlide}`} className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed animate-fade-in">
              {slide.description}
            </p>

            <div key={`ctas-${activeSlide}`} className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link
                href={slide.ctaPrimary.href}
                onClick={() => trackEvent("hero_cta_click", { button_label: slide.ctaPrimary.label, button_href: slide.ctaPrimary.href, slide_index: activeSlide, slide_title: slide.title })}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#0284FF] rounded-full hover:bg-[#006ACE] transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.03] active:scale-[0.98] tracking-wider text-center"
              >
                {slide.ctaPrimary.label}
              </Link>
              <Link
                href={slide.ctaSecondary.href}
                onClick={() => trackEvent("hero_cta_click", { button_label: slide.ctaSecondary.label, button_href: slide.ctaSecondary.href, slide_index: activeSlide, slide_title: slide.title })}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 text-white backdrop-blur-sm hover:scale-[1.03]"
              >
                {slide.ctaSecondary.label}
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Masked Image & Floating Widget Card */}
          <div className="relative lg:col-span-6 flex items-center justify-center w-full min-h-[350px] sm:min-h-[450px]">
            {/* Curved Mask Shape Container */}
            <div key={`img-${activeSlide}`} className="relative w-full aspect-[4/3] rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-md animate-fade-in">
              
              {/* Main Image */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover object-center pointer-events-none"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

            </div>
          </div>

        </div>
      </div>

      {/* Slider Dots Centered at the Bottom */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === idx ? "w-8 bg-[#0284FF]" : "w-2.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Arrow Indicator */}
      <button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-6 w-6" />
      </button>

      {/* Floating WhatsApp Action Button */}
      <Link
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { position: "floating_button" })}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-xl hover:bg-[#128C7E] transition-all hover:scale-[1.05] hover:-translate-y-0.5 active:scale-95 group"
      >
        <MessageSquare className="h-4.5 w-4.5 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 whitespace-nowrap">
          Fale Conosco
        </span>
        <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">WhatsApp</span>
      </Link>
    </section>
  );
}
