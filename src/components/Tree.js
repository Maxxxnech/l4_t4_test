import React, { Component } from "react";
import ListItem from "./ListItem";
import "./css/Tree.css";

export default class Tree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { cars } = this.props;
    //!!! key={el.key} (not key={i}) is must for proper rendering of nesting 
    return (
      <div className="Tree">
        <ul>
          {cars.map ? cars.map((el, i) => (
            <ListItem key={el.key} title={el.title} level={el.level} />
          )) : cars  }
        </ul>
      </div>
    );
  }
}
