"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/site-data";

const DROPDOWN_FEATURES = [
  { id: "gestao-de-processos", label: "Gestão de Processos" },
  { id: "indicadores", label: "Indicadores e Formulários" },
  { id: "evidencias", label: "Repositório de Evidências" },
  { id: "portal-do-avaliador", label: "Portal do Avaliador" },
  { id: "pura-ia", label: "Pura.IA (Auditoria)" },
  { id: "acervo-regulatorio", label: "Acervo Regulatório" },
  { id: "dashboard", label: "Dashboard e Relatórios" },
  { id: "cadastros", label: "Cadastros e Permissões" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFeatureClick = (id: string) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    
    if (pathname === "/como-funciona") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/como-funciona#${id}`);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "bg-[#080E1C] border-transparent py-0 shadow-lg"
          : "bg-transparent border-transparent py-2"
      )}
    >
      <nav className="site-container flex h-16 items-center justify-between lg:h-18">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="PURA Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isComoFunciona = link.href === "/como-funciona";

              if (isComoFunciona) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => router.push("/como-funciona")}
                      className={cn(
                        "inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none cursor-pointer",
                        pathname === "/como-funciona"
                          ? "text-[var(--site-accent)] font-semibold"
                          : "text-white/80 hover:text-white"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-1 w-64 rounded-[var(--site-radius)] border border-white/10 bg-[#0A1329] p-2 shadow-2xl transition-all duration-200 origin-top-left",
                        dropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                      )}
                    >
                      <div className="flex flex-col gap-0.5">
                        {DROPDOWN_FEATURES.map((feat) => (
                          <button
                            key={feat.id}
                            onClick={() => handleFeatureClick(feat.id)}
                            className="w-full text-left px-4 py-2.5 rounded-[var(--site-radius-sm)] text-xs font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                          >
                            {feat.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-[var(--site-radius-sm)] border-2 px-5 py-2 text-sm font-semibold transition-all duration-200 active:scale-[0.97] border-white/30 text-white hover:bg-white hover:text-slate-950 hover:border-white"
          >
            Agendar Demonstração
          </Link>
          <Link
            href="https://app.pura.com.br/login"
            className="inline-flex items-center gap-2 rounded-[var(--site-radius-sm)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 active:scale-[0.97] bg-[#0284FF] hover:bg-[#006ACE] hover:shadow-lg"
          >
            Acessar Plataforma
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-[var(--site-radius-sm)] transition-colors text-white hover:bg-white/10"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t",
          mobileMenuOpen ? "max-h-[550px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{
          backgroundColor: "#080E1C",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <div className="site-container py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isComoFunciona = link.href === "/como-funciona";

            if (isComoFunciona) {
              return (
                <div key={link.href} className="flex flex-col">
                  <Link
                    href="/como-funciona"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-[var(--site-radius-sm)] text-sm font-semibold transition-colors",
                      pathname === "/como-funciona"
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-6 border-l ml-4 flex flex-col gap-1 py-1 border-white/10">
                    {DROPDOWN_FEATURES.map((feat) => (
                      <button
                        key={feat.id}
                        onClick={() => handleFeatureClick(feat.id)}
                        className="text-left py-2 text-xs transition-colors cursor-pointer text-slate-400 hover:text-white"
                      >
                        {feat.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-[var(--site-radius-sm)] text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t flex flex-col gap-2 border-white/10">
            <Link
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-[var(--site-radius-sm)] px-5 py-3 text-sm font-semibold transition-all border border-white/20 text-white hover:bg-white/10"
            >
              Agendar Demonstração
            </Link>
            <Link
              href="https://app.pura.com.br/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-[var(--site-radius-sm)] px-5 py-3 text-sm font-semibold transition-all bg-[#0284FF] text-white hover:bg-[#006ACE]"
            >
              Acessar Plataforma
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
