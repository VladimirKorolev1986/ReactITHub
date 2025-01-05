import React from "react";
import "./CardCategories.css";

function CardCategories({ children }) {
  return (
    <div className="card-categories">
      <img
        className="card-categories__img"
        src="/public/cards/Fertilizer.png"
        alt=""
      />
      <h2 className="card-categories__paragraph">{children}</h2>
    </div>
  );
}

export default CardCategories;
