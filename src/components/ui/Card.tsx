import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden",
      "transform hover:-translate-y-1",
      "border border-gray-100",
      className
    )}>
      {children}
    </div>
  );
}