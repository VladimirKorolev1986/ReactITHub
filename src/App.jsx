import React from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import CardCategories from "./components/UI/CardCategories/CardCategories";
import ListCardCategories from "./components/UI/ListCardCategories/ListCardCategories";
import CardButtonCategories from "./components/UI/CardButtonCategories/CardButtonCategories";

function App() {
  const src = "../public/cards/1.png";
  const alt = "Какая то картинка";
  const discription = "Какое то описание";

  return (
    <div className="app">
      <Button />
      <ListCardCategories>

        <CardButtonCategories>
          <CardCategories src={src} alt={alt} discription={discription} />
        </CardButtonCategories>

        <CardButtonCategories>
          <CardCategories src={src} alt={alt} discription={discription} />
        </CardButtonCategories>

        <CardButtonCategories>
          <CardCategories src={src} alt={alt} discription={discription} />
        </CardButtonCategories>



      </ListCardCategories>
    </div>
  );
}
export default App;
