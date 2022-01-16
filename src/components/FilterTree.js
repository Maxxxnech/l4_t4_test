import React, { Component } from "react";
import Tree from "./Tree";
import "./css/FilterTree.css";

export default class FilterTree extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: this.props.cars };
    this.handleChange = this.handleChange.bind(this);
    this.filterTree = this.filterTree.bind(this);
  }

  filterTree(tree, value) {
    const valueLowercase = value.toLowerCase();

    let newTree = JSON.parse(JSON.stringify(tree)); // Needed for proper updates at shortening text

    return newTree?.filter((el) => {
      if (!el) return false;
      let models;
      if (el.models) {
        models = this.filterTree(el.models, value);
      }
      if (
        (models && models.length) ||
        el.title.toLowerCase().includes(valueLowercase)
      )
        return true;
    });
  }

  handleChange(e) {
    let currentValue = e.target.value;

    if (!currentValue) {
      return this.setState({
        cars: this.props.cars,
      });
    }
    let newCars = this.filterTree(this.props.cars, currentValue);
    console.log(this.props.cars.length, newCars.length);
    this.setState((prevState) => ({
      cars: newCars,
    }));
  }

  render() {
    const { cars } = this.state;
    return (
      <div>
        <input ref={this.inputRef} onChange={this.handleChange} type="text" placeholder="Car name" />
        {cars && cars.length ? (
          <Tree cars={cars} />
        ) : (
          <p className="noFound">результат не найден</p>
        )}
      </div>
    );
  }
}
