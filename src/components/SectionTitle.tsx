import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-cream-50" : "text-sand-900";
  const subColor = light ? "text-cream-200/80" : "text-sand-600";
  const eyeColor = light ? "text-terracotta-300" : "text-terracotta-600";

  return (
    <div className={`${alignClass} max-w-2xl ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${eyeColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-section font-medium ${titleColor} text-balance`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${subColor} text-balance`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
