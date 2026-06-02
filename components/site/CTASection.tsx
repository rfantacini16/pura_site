import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn("site-section relative overflow-hidden", className)}
      style={{ background: "var(--site-gradient)" }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
        }}
      />

      <div className="site-container relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center gap-2 rounded-[var(--site-radius-sm)] bg-white px-6 py-3 text-sm font-semibold text-[var(--site-primary)] transition-all duration-200 hover:bg-white/90 hover:shadow-xl active:scale-[0.97]"
          >
            {primaryCTA.label}
            <ArrowRight className="h-4 w-4" />
          </Link>

          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-flex items-center gap-2 rounded-[var(--site-radius-sm)] border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-[0.97]"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
