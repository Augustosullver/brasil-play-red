<<<<<<< HEAD
// src/components/ui/button.tsx
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium shadow-sm transition ${className}`}
      {...props}
    />
  );
}

export default Button;
=======
import React from "react";

export function Button({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold bg-red-700 hover:bg-red-600 text-white transition ${className || ""}`}
    >
      {children}
    </button>
  );
}
>>>>>>> f777e15 (Adicionados componentes Card e Button e ajustado page.tsx)
