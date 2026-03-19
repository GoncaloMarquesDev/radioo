// src/components/categorypill/CategoryPill.tsx
import "./CategoryPill.scss";
import React from "react";

interface CategoryPillProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function CategoryPill({ label, icon, isActive, onClick }: CategoryPillProps) {
  return (
    <div 
      className={`wrapper-pill ${isActive ? "active" : ""}`} 
      onClick={onClick}
    >
      <span className="pill-icon">{icon}</span>
      <span className="pill-title">{label}</span>
    </div>
  );
}

export default CategoryPill;
