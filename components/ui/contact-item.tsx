import { LucideIcon } from "lucide-react";

export function ContactItem({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <Icon size={12} />
      {children}
    </div>
  );
}
