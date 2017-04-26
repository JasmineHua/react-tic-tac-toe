import React from 'react'
import ReactDom from 'react-dom'
import ChessBoard from './components/chessboard'


ReactDom.render(
  <div>
  <ChessBoard width={3} height={3} number={3}/>
  </div>,
  document.getElementById('app')
)
