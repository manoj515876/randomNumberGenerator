import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  getRandomNumber = () => {
    this.setState({number: Math.floor(Math.random() * 101)})
  }

  render() {
    const {number} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="card-btn"
              type="button"
              onClick={this.getRandomNumber}
            >
              Generate
            </button>
          </div>
          <p className="count">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
