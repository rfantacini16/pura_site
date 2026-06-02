import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-[var(--site-radius)] border p-6 transition-all duration-300 hover:-translate-y-1",
        className
      )}
      style={{
        backgroundColor: "var(--site-bg)",
        borderColor: "var(--site-border)",
        boxShadow: "var(--site-shadow-sm)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--site-shadow-lg)";
        e.currentTarget.style.borderColor = "var(--site-accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--site-shadow-sm)";
        e.currentTarget.style.borderColor = "var(--site-border)";
      }}
    >
      {/* Icon Container */}
      <div
        className="flex h-11 w-11 items-center justify-center rounded-[var(--site-radius-sm)] transition-colors duration-300"
        style={{
          backgroundColor: "rgba(2, 132, 255, 0.08)",
          color: "var(--site-primary)",
        }}
      >
        <Icon className="h-5 w-5" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-lg font-semibold"
          style={{ color: "var(--site-text)" }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--site-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
