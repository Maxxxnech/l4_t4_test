import React, { Component } from "react";


import Mapper from "./Mapper";
import "./css/Tree.css";

export default class Tree extends Component {

  render() {
    return (
      <div className="treeWrapper">
        <ul>{Mapper(this.props.cars)}</ul>
      </div>
    );
  }
}
