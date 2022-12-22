import React from "react";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  static getDerivedStateFromProps(props, state){
      console.log(props,"props");
      return props.name;
  }

  //calls when componet render
  componentDidMount() {
    // this.timerID = setInterval(() => this.tick(), 1000);
  }

  //calls before componet Unmount
  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     // This binding is necessary to make `this` work in the callback
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () => {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   };

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     );
//   }
// }

export default App;
