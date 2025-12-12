import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";

export function Section({
  title,
  icon: SectionIcon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <SectionIcon />
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <Separator className="bg-foreground" />
      {children}
    </div>
  );
}
