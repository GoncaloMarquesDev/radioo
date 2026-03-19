// src/components/CategoryPills/CategoryPills.tsx
import  { useState } from "react";
import CategoryPill from "../categorypill/CategoryPill";
import { CATEGORIES } from "../../constants/categories"; // impoort as categorias
import "./CategoryPills.scss";

function CategoryPills() {
  const [activeId, setActiveId] = useState("all");

  return (
    <div className="wrapper-category-pills"> 
      <p className="pills-title">Browse Categories</p>
      <div className="category-pills-container">
        {CATEGORIES.map((cat) => (
          <CategoryPill 
            key={cat.id}
            label={cat.name}
            icon={cat.icon}
            isActive={activeId === cat.id}
            onClick={() => setActiveId(cat.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPills;
