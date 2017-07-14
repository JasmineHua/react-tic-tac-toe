import '../../stylus/chessboard.styl'
import React from 'react'
import Cell from '../cell/index.js'

export default class ChessBoard extends React.Component {
  constructor(props, context) {
    super(props, context)
    let arr = new Array(this.props.height)
    for(var x=0;x<this.props.height;x++){
      arr[x] = new Array(this.props.width).fill(null)
    }
    this.state = {
      content: arr,
      chess: 'o',
      mess:''
    }
  }
  handleClick = (x,y) => {
    return e => {
      let content = this.state.content.slice()
      let chess = this.state.chess
      if(!content[x][y]){
        content[x][y] = this.state.chess;
        (chess == 'o') ? (chess = 'x') : (chess = 'o');
        this.setState({
          content : content,
          chess : chess
        })
        this.judge(x,y)
      }
    }
  }
  amount = (horizontal,verital,numX,numY,direction) => {
    const arr = this.state.content
    let sideX
    let sideY
    if(numX == -1){sideX = -1}else{sideX = this.props.height}
    if(numY == -1){sideY = -1}else{sideY = this.props.width}
    console.log(sideX,sideY);
    while((horizontal + numX !== sideX) && (verital + numY !== sideY)){
      if(arr[horizontal + numX][verital + numY] == arr[horizontal][verital]){
        direction++;
        horizontal = horizontal + numX
        verital = verital + numY
      }
      else {
        break
      }
    }
    return direction;
  }
  judge = (x,y) => {
    const arr = this.state.content;
    const h = x
    const v = y
    let tl = 0 , t = 0 , tr = 0 , l = 0 , r = 0 , bl = 0 , b = 0 , br = 0;
    let all = true;
    tl = this.amount(h,v,-1,-1,tl)
    t = this.amount(h,v,-1,0,t)
    tr = this.amount(h,v,-1,1,tr)
    l = this.amount(h,v,0,-1,l)
    r = this.amount(h,v,0,1,r)
    bl = this.amount(h,v,1,-1,bl)
    b = this.amount(h,v,1,0,b)
    br = this.amount(h,v,1,1,br)


    for (var i in arr) {
      for (var j in arr[i]) {
        if (arr[i][j] == null) {
          all = false;
          break;
        }
      }
      if (all == false) {
        break;
      }
    }
    console.log(tl , t , tr , l , r, bl , b, br);
    if((tl+br+1 == this.props.number)||(t+b+1 == this.props.number)||(tr+bl+1 == this.props.number)||(l+r+1 == this.props.number)){
      this.setState({
        mess : arr[x][y]+' was win'
      })
    }
    else if (all == true) {
      this.setState({
        mess : 'draw'
      })
    }
  }
  render() {
    return (
      <div>
        <div className="box" style={{width:this.props.width*40+'px'}}>
          {this.state.content.map((itemX,x)=>
            itemX.map((itemY,y)=>
              <Cell key={x+'-'+y} x={x} y={y} item={this.state.content[x][y]} onClick={this.handleClick(x,y)}/>
            )
          )}

        </div>
        <p>{this.state.mess}</p>
      </div>
    );
  }
}
