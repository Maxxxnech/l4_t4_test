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
    return tree?.filter((el)=> {
       if(!el) return false;
      
       if(el.models){
        el.models = this.filterTree(el.models, value);
       } 
       if((el.models && el.models.length) || el.title.toLowerCase().includes(valueLowercase)) return true;
    });
  }

  handleChange(e) {
    const currentValue = e.target.value;
    console.log('currentValue: ' + currentValue)
    if(!currentValue){
        console.log('' + this.props.cars.length);
        return this.setState((prevState) => ({
            cars: this.props.cars,
          }));
    }
    let newCars = this.filterTree(this.props.cars, currentValue);
    console.log(newCars);
    this.setState((prevState) => ({
      cars: newCars,
    }));
  }

  render() {
    const {cars} = this.state;
    //console.log(cars);
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
