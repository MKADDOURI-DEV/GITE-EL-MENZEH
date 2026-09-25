import type { ReactNode } from "react";
import { useEffect } from "react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image: string;
  eyebrow?: string;
  children?: ReactNode;
};

export default function PageHeader({
  title,
  subtitle,
  image,
  eyebrow,
  children,
}: PageHeaderProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="relative flex h-[55vh] min-h-[400px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-950/60 via-sand-950/50 to-sand-950/70" />
      </div>

      <div className="container-luxury relative z-10 pt-20 text-center">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-300 animate-fade-down">
            {eyebrow}
          </p>
        )}
        <h1 className="text-section font-medium text-cream-50 opacity-0 animate-fade-up [animation-delay:0.2s]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream-200/80 opacity-0 animate-fade-up [animation-delay:0.4s]">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
