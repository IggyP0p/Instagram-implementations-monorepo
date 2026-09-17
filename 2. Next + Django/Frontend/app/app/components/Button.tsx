import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "unstyled";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
   variant?: Variant;
   size?: Size;
   loading?: boolean;
   className?: string;
}

const baseStyles = "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

const variantStyles: Record<Variant, string> = {
   primary: "inline-flex items-center justify-center px-5 py-2.5 w-full rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-400 hover:shadow-md",
   secondary: "inline-flex items-center justify-center px-5 py-2.5 w-full rounded-lg font-bold bg-gray-700 text-white hover:bg-gray-700/80 hover:shadow-md",
   unstyled: "",
};

const sizeStyles: Record<Size, string> = {
   sm: "px-3 py-1.5 text-sm",
   md: "px-4 py-2 text-base",
   lg: "px-6 py-3 text-lg",
};

export default function Button({
   children,
   variant = "primary",
   size = "md",
   disabled = false,
   loading = false,
   type = "button",
   className = "",
   ...rest
}: ButtonProps) {
   return (
      <button
         type={type}
         disabled={disabled || loading}
         className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
         {...rest}
      >
         {loading && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"/>
         )}
         {children}
      </button>
   )
}
