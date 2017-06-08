import React from "react";

export default class Infobox extends React.Component {
  render() {
    return (
      <div>
        <span>infobox props is {this.props.progress}</span>
      </div>
    )
  }
}
