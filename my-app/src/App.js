import React, { Component } from 'react';

class App extends Component {
    state ={
      clicks: 0 
    }
  
  render() {
    return (
		<div>
			<h1> Counter: { this.state.clicks }</h1>
			<button onClick={()=>this.setState({ clicks: this.state.clicks + 1 })}>Click to increment by 1</button>
			<button onClick={()=>this.setState({ clicks: this.state.clicks - 1 })}>Click to decrease by 1</button>  
		</div>
    );
  }
}

export default App;
