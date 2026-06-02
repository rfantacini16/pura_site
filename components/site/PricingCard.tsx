"use client";

import Link from "next/link";
import { Check, X, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PricingFeature } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

interface PricingCardProps {
  name: string;
  badge?: string;
  subtitle: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  className?: string;
}

export function PricingCard({
  name,
  badge,
  subtitle,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[var(--site-radius-lg)] border p-8 transition-all duration-300",
        highlighted && "scale-[1.02]",
        className
      )}
      style={{
        backgroundColor: "var(--site-bg)",
        borderColor: highlighted
          ? "var(--site-primary)"
          : "var(--site-border)",
        boxShadow: highlighted
          ? "0 8px 30px -4px rgba(2, 132, 255, 0.15), 0 4px 10px -4px rgba(2, 132, 255, 0.08)"
          : "var(--site-shadow-sm)",
      }}
    >
      {/* Badge */}
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 text-xs font-semibold mb-4",
            highlighted
              ? "bg-[var(--site-primary)] text-white"
              : "text-[var(--site-primary)]"
          )}
          style={
            !highlighted
              ? { backgroundColor: "rgba(2, 132, 255, 0.08)" }
              : undefined
          }
        >
          {highlighted && <Star className="h-3 w-3" />}
          {badge}
        </div>
      )}

      {/* Plan Name */}
      <h3
        className="text-xl font-bold"
        style={{ color: "var(--site-text)" }}
      >
        {name}
      </h3>

      {/* Subtitle */}
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "var(--site-text-secondary)" }}
      >
        {subtitle}
      </p>

      {/* Divider */}
      <div
        className="my-6 h-px w-full"
        style={{ backgroundColor: "var(--site-border)" }}
      />

      {/* Features List */}
      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature) => (
          <li
            key={feature.text}
            className="flex items-start gap-3 text-sm"
          >
            {feature.included ? (
              <Check
                className="h-4 w-4 shrink-0 mt-0.5"
                style={{ color: "#10B981" }}
              />
            ) : (
              <X
                className="h-4 w-4 shrink-0 mt-0.5"
                style={{ color: "var(--site-text-muted)" }}
              />
            )}
            <span
              style={{
                color: feature.included
                  ? "var(--site-text)"
                  : "var(--site-text-muted)",
              }}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href={ctaHref}
        onClick={() => trackEvent("plan_select", { plan_name: name, cta_label: ctaLabel })}
        className={cn(
          "mt-8 inline-flex items-center justify-center gap-2 rounded-[var(--site-radius-sm)] px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97]",
          highlighted
            ? "bg-[var(--site-primary)] text-white hover:bg-[var(--site-primary-hover)] hover:shadow-lg"
            : "border-2 text-[var(--site-primary)] hover:bg-[var(--site-primary)] hover:text-white"
        )}
        style={
          !highlighted
            ? { borderColor: "var(--site-primary)" }
            : undefined
        }
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
