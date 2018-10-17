import React, { Component } from 'react';
import './App.css';

class App extends Component {
	
    state = {
      word: '',
      imm: ''
    }

  onChange = (event) => {
    this.setState({ word: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.word}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ word:'', imm: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('errore', e));
  }

  render() {
    return (
      <div className = "App">
        <form onSubmit = {this.handleSubmit}>
          <input value = {this.state.word} onChange = {this.onChange} />
          <button>Search!</button>
        </form>
        <img src ={this.state.imm} height="200" alt={this.state.word} />
      </div>
    );
  }
}

export default App;