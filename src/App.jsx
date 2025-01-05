import React from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import CardCategories from "./components/UI/CardCategories/CardCategories";

function App() {

  return <div className="app">
    <Button />
    <div className="divs"><CardCategories /><CardCategories /><CardCategories /></div>

  </div>

}
export default App;
