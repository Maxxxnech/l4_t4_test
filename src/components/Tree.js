import React, { Component } from "react";
import ListItem from "./ListItem";
import "./css/Tree.css";

export default class Tree extends Component {
  result = [];
  liIndex = 0;

  constructor(props) {
    super(props);
  }

  
  mapper(arr, level = 0) {
    return arr.reduce((acc, el) => {
        var children = null;
        acc.push(<ListItem key={++this.liIndex} title={el.title} level={level} children={children}/>)
        if(el.models){
            acc.push([...this.mapper(el.models, level + 1)]);
        }
        return acc ;
    }, [])
  }


  render() {
    return (
      <div className="Tree">
        <ul>{this.mapper(this.props.cars)}</ul>
      </div>
    );
  }
}
