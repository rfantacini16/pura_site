import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer
      className="border-t border-[#1E293B]"
      style={{
        backgroundColor: "#080E1C",
      }}
    >
      {/* Gradient accent line */}
      <div
        className="h-px w-full"
        style={{ background: "var(--site-gradient)" }}
      />

      <div className="site-container py-12 lg:py-16 text-slate-300">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="PURA Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              A PURA é a plataforma completa de gestão regulatória acadêmica para
              Instituições de Ensino Superior.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="flex items-center justify-center h-9 w-9 rounded-[var(--site-radius-sm)] transition-colors hover:bg-white/10 text-slate-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-9 w-9 rounded-[var(--site-radius-sm)] transition-colors hover:bg-white/10 text-slate-400 hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="mailto:contato@pura.com.br"
                className="flex items-center justify-center h-9 w-9 rounded-[var(--site-radius-sm)] transition-colors hover:bg-white/10 text-slate-400 hover:text-white"
                aria-label="E-mail"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.12em] mb-4 text-white">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 text-slate-400 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} PURA — Regulação Acadêmica. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs transition-colors text-slate-500 hover:text-white"
            >
              Termos de Uso
            </Link>
            <Link
              href="#"
              className="text-xs transition-colors text-slate-500 hover:text-white"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
