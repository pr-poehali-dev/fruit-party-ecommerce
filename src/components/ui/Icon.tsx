
import React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = "", fallback = "CircleAlert" }) => {
  // @ts-ignore - Динамический импорт иконок
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];
  
  return <LucideIcon size={size} className={className} />;
};

export default Icon;
