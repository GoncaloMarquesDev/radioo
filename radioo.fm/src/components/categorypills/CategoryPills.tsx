// src/components/CategoryPills/CategoryPills.tsx
/* import  { useState } from "react"; */
import CategoryPill from "../categorypill/CategoryPill";
import { CATEGORIES } from "../../constants/categories";
import { useRadio } from "../../context/RadioContext"; //n esquecer imporatar o context
import "./CategoryPills.scss";

function CategoryPills() {
  const { selectedTag, setSelectedTag } = useRadio();

  return (
    <div className="wrapper-category-pills">
      <p className="pills-title">Browse Categories</p>
      <div className="category-pills-container">
        {CATEGORIES.map((cat) => (
          <CategoryPill
            key={cat.id}
            label={cat.name}
            icon={cat.icon}
            isActive={selectedTag === cat.id}
            onClick={() => setSelectedTag(cat.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPills;
