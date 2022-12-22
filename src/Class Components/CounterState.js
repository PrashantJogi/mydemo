import React from 'react';

class CounterState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0};
  }
  Increment = () => {
    this.setState({count:this.state.count + 1 });
  };
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <br/>
        <button onClick={this.Increment}>Increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.Decrement}>Decrement</button>
      </>
    );
  }
}

export default CounterState;