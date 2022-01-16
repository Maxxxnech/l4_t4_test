import React, { Component } from "react";
import "./css/ListItem.css";

export default class ListIndex extends Component {
  constructor(props){
    super(props);
  }
  paddingStyle = {
    paddingLeft: this.props.level * 10 + "px", 
    listStyle: this.props.level== 0 ? "square" : "none" 
  }

  render() {
    const { title } = this.props;
    return (
      <li style={this.paddingStyle} >
        {title}
      </li>
    );
  }
}
