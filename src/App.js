import React, { Component } from 'react';
import Button from './Button'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    showHeader: React.PropTypes.bool
  }
  constructor (props) {
    super(props)
    this.state = {
      clicked: false,
      clickCount: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickCounter = this.handleClickCounter.bind(this)
  }
  handleClick () {
    this.setState({
      clicked: !this.state.clicked,
    })
  }
  handleClickCounter () {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  }
  render() {
    var header
    var paragraphStyle
    /* terniary operator shorthand for if/else statement */
    var buttonText = (this.state.clicked) ? "Toggle Off" : "Toggle On"

    if (this.props.showHeader) {
      header = (
        <span>
          Header here
        </span>
      )
    } else {
      header = null
    }

    if ( this.state.clicked ) {
      paragraphStyle = {
        color: 'green',
        fontWeight: 'bold'
      }
    } else {
      paragraphStyle = {
        color: 'red',
      }
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{header}</h2>
        </div>
        <p className="App-intro" style={paragraphStyle}>
          The button has been clicked {this.state.clickCount} times
        </p>

        <Button onClick={this.handleClick}>
          {buttonText}
        </Button>
        <br />
        <br />
        <Button onClick={this.handleClickCounter}>
          Increment Count state
        </Button>
      </div>
    );
  }
}

export default App;
