import React from "react";
import "./CardCategories.css";

function CardCategories({ src, alt, discription }) {
	return (
		<>
			<div className="wrapp">
				<img className="card-categories__img" src={src} alt={alt} />
				<h2 className="card-categories__paragraph">{discription}</h2>
			</div>

		</>
	);
}

export default CardCategories;
