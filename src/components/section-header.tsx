import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow && <span className="eyebrow-pill mb-5">{eyebrow}</span>}
      <h2 className="display-lg text-foreground">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}
