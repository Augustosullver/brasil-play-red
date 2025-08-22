import React from "react";

export function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold bg-red-700 hover:bg-red-600 text-white transition ${className || ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
