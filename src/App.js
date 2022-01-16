import React from "react";
import "./App.css";
import FilterTree from "./components/FilterTree";
import Tree from "./components/Tree";
import cars from "./data/cars.json";

function App() {
  return (
    <div className="App">
      <h1>Тестовое задание l4_t4: рекурсивное построение дерева</h1>
      <h2>Дерево с рекурсивной фильтрацией</h2>
      <FilterTree cars={cars} />
      <hr></hr>
      <h2>Пример исходного дерева</h2>
      <Tree cars={cars} />
    </div>
  );
}

export default App;
