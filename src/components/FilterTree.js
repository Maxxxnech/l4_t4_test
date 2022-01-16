import React, { Component } from "react";
import Tree from "./Tree";

import "./css/FilterTree.css";


export default class FilterTree extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: this.props.cars, color: false };
    this.handleChange = this.handleChange.bind(this);
    this.filterTree = this.filterTree.bind(this);
  }
  /**
   * Рекурсивно фильтрует дерево в массиве
   * Если находит узел, сохраняет его листья
   * @param {Array} tree 
   * @param {String} value строка, введенная пользователем
   * @returns 
   */
  filterTree(tree, value) {
    const valueLowercase = value.toLowerCase();
    // Глубокое клонирование - необходимо для корректной работы при удалении тектста
    let newTree = JSON.parse(JSON.stringify(tree)); 
  
    return newTree?.filter((el) => {
      if (!el) return false;
      
      if (el.title.toLowerCase().includes(valueLowercase)) return true;
      
      if (el.models) {
        el.models = this.filterTree(el.models, value);
        if (el.models && el.models.length) {
            return true;
        }
      }
      return false
    });
  }

  handleChange(e) {
    let currentValue = e.target.value;
    // Нечего не введено
    if (!currentValue) {
      return this.setState({
        cars: this.props.cars, color: false
      });
    }

    let newCars = this.filterTree(this.props.cars, currentValue);
    console.log(this.props.cars.length, newCars.length);
    this.setState((prevState) => ({
      cars: newCars, color: true 
    }));

  }

  
  render() {
    const { cars, color } = this.state;
    let classNames = ["filterWrapper"];
    color && (classNames.push("color"))

    return (
      <div className={classNames.join(' ')}>
        <input
          ref={this.inputRef}
          onChange={this.handleChange}
          type="text"
          placeholder="Car name"
        />
        {cars && cars.length ? (
          <Tree cars={cars} />
        ) : (
          <p className="noFound">результат не найден</p>
        )}
      </div>
    );
  }
}
