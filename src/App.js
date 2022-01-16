
import React from 'react';
import './App.css';
import FilterTree from "./components/FilterTree";
import Tree from "./components/Tree"
import cars from "./data/cars.json";

function App() {
  return (
    <div className="App">

     <FilterTree cars={cars}/>
     <Tree cars={cars}/>
    </div>
  );
}

export default App;
