import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Child({ onAction }) {
  return (
    <button onClick={onAction} >
     Click Me!
    </button>
  );
}

class CountingParent extends React.Component {
  state = {
    actionCount:0,
  }
  handleAction = (action) => {
    console.log('Child says', action);
    // actionCount is incremented, and
    // the new count replaces the existing one
      this.setState({
      actionCount:this.state.actionCount + 1,
    });
  }
  reset = () => {
      this.setState({ 
          actionCount:this.state.actionCount = 0 
        })
  }

  render() {
  return (
    <div>
      <Child onAction={this.handleAction} />
      <p> Clicked {this.state.actionCount} times </p>
      <button onClick={this.reset}>Reset</button>
    </div>
  );
  }
}

ReactDOM.render(<CountingParent />, document.querySelector("#root"));
