import '../../stylus/chess.styl'
import React from 'react'
export default class Cell extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <span onClick={this.props.onClick}>{this.props.item}</span>
    );
  }
}
