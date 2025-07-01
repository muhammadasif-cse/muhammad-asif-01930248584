import Image from "next/image";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "gradient" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  iconAlt?: string;
  iconPosition?: "left" | "right";
}

export default function Button({
  children,
  variant = "gradient",
  size = "md",
  radius = "lg",
  disabled = false,
  onClick,
  className = "",
  type = "button",
  icon,
  iconAlt = "Button Icon",
  iconPosition = "left",
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1 cursor-pointer";

  const variantClasses = {
    gradient:
      "bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] text-white hover:shadow-lg hover:scale-105 focus:ring-blue-500",
    primary:
      "bg-[var(--primary)] text-white hover:opacity-90 focus:ring-blue-500",
    secondary:
      "bg-[var(--secondary)] text-white hover:opacity-90 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const iconSize = {
    sm: { width: 14, height: 14 },
    md: { width: 16, height: 16 },
    lg: { width: 18, height: 18 },
  };

  const renderIcon = () => {
    if (!icon) return null;

    return (
      <Image
        src={icon}
        alt={iconAlt}
        width={iconSize[size].width}
        height={iconSize[size].height}
      />
    );
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${radiusClasses[radius]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && renderIcon()}
      {children}
      {icon && iconPosition === "right" && renderIcon()}
    </button>
  );
}
