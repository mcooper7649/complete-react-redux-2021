import logo from './logo.svg'
import './App.css'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meaningOfLife: 47,
    }
    this.props = props;
  }

  handleClick = () => {
    this.setState((prevState, prevProps)=> {
        return {
            meaningOfLife: prevState.meaningOfLife + prevProps.increment }
        }, () => console.log(this.state.meaningOfLife))
    }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button onClick={this.handleClick}>Update State</button>
        </header>
      </div>
    )
  }
}

export default App
