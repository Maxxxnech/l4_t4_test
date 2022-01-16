import React, { Component } from "react";
import Tree from "./Tree";
import "./css/FilterTree.css";

export default class FilterTree extends Component {
  result = [];
  liIndex = 0;
  flattened = this.mapper(this.props.cars);

  constructor(props) {
    super(props);
    this.state = { cars: this.flattened };
    this.handleChange = this.handleChange.bind(this);

    this.filterTree = this.filterTree.bind(this);

    //this.mapper = this.mapper.bind(this);
  }

  /**
   * @param {Arrфн} arr массив
   * @param {Number} level уровень вложенности
   * @returns плоский массив
   */

  mapper(arr, level = 0) {
    arr?.forEach((el, i) => {
      this.result.push({ key: ++this.liIndex, title: el.title, level });
      if (el.models) {
        this.mapper(el.models, level + 1);
      }
    });
    return this.result;
  }

  filterTree(tree, value) {
    if (!value) return tree;

    if (!tree || !tree.length) return null;

    const valueLowercase = value.toLowerCase();
    return tree.filter((el) => {
      return el.title && ~el.title.toLowerCase().indexOf(valueLowercase);
    });
  }

  handleChange(e) {
    const currentValue = e.target.value;

    const newCars = this.filterTree(this.flattened, currentValue);
    this.setState((prevState) => ({
      cars: newCars,
    }));
  }

  render() {
    let { cars } = this.state;
    return (
      <div>
        <input ref={this.inputRef} onChange={this.handleChange} type="text" />
        {cars && cars.length ? (
          <Tree cars={cars} />
        ) : (
          <p className="noFound">результат не найден</p>
        )}
      </div>
    );
  }
}
