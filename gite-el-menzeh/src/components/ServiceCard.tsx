import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: 1 | 2 | 3 | 4 | 5;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay,
}: ServiceCardProps) {
  return (
    <div
      className={`group rounded-2xl bg-cream-50 p-6 text-center shadow-soft ring-1 ring-sand-200/60 transition-all duration-500 hover:shadow-medium hover:-translate-y-1 reveal${
        delay ? ` reveal-delay-${delay}` : ""
      }`}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-600 transition-all duration-300 group-hover:bg-terracotta-500 group-hover:text-cream-50">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-lg font-semibold text-sand-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-sand-600">
        {description}
      </p>
    </div>
  );
}
