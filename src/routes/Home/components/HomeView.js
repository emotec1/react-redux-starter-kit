import React from "react";
import DuckImage from "../assets/Duck.jpg";
import "./HomeView.scss";
import Infobox from "./Infobox";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: -1,
    }

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  componentWillMount() {
    console.log('mounting component');
    this.setState({
      progress: this.state.progress + 1
    })
  }

  componentWillUpdate(newProps, newState) {
    console.log('updating component');
    console.log(newProps);
    console.log(newState);
  }

  incrementCounter() {
    this.setState({
      progress: this.state.progress + 1
    })

    console.log('as');
  }

  render() {
    return (
      <div>
        <h4>Welcome!</h4>
        <span>Progress is {this.state.progress}</span>
        <img alt='This is a duck, because Redux!' className='duck' src={DuckImage}/>
        <button onClick={this.incrementCounter}>Increment</button>
        <Infobox progress={this.state.progress}/>
      </div>
    )
  }
}
