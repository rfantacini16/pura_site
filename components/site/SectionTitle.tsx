import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        alignment === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight",
          alignment === "center" && "mx-auto max-w-3xl"
        )}
        style={{ color: "var(--site-text)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            alignment === "center" && "mx-auto max-w-2xl"
          )}
          style={{ color: "var(--site-text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
