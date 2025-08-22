// src/components/ui/card.tsx
import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement> & { className?: string };

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 shadow-md backdrop-blur ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: DivProps) {
  return <div className={`p-4 ${className}`} {...props} />;
}

export default Card;
