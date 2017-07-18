import React from 'react'
import ChessBoard from '../chessboard'

export default class SelectSize extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      width: 4,
      height: 3,
      number: 3
    }
  }
  handleInputChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        <input type="text" name="width" value={this.state.width} onChange={this.handleInputChange} />
        <input type="text" name="height" value={this.state.height} onChange={this.handleInputChange} />
        <input type="text" name="number" value={this.state.number} onChange={this.handleInputChange} />
        <ChessBoard width={this.state.width} height={this.state.height} number={this.state.number}/>
      </div>
    );
  }
}
