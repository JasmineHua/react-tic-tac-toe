import '../../stylus/chessboard.styl'
import React from 'react'

export default class ChessBoard extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      content: [[null,null,null],[null,null,null],[null,null,null]],
      chess: 'o',
      mess:''
    }
  }
  handleClick = (x,y) => {
    return e => {
      var content = this.state.content
      var chess = this.state.chess
      if(content[x][y] == null){
        content[x][y] = this.state.chess;
        (chess == 'o') ? (chess = 'x') : (chess = 'o');
        this.setState({
          content : content,
          chess : chess
        })
        this.judge(content,x,y)
      }
    }
  }
  judge = (content,x,y) => {
    const arr = content;
    var h = x
    var v = y
    var tl = 0 , t = 0 , tr = 0 , l = 0 , r = 0 , bl = 0 , b = 0 , br = 0;
    var all = true;
    while ((h - 1 !== -1) && (v - 1 !== -1)) {
      if(arr[h-1][v-1] == arr[h][v]){
        tl++;
        h--;
        v--;
      }
      else{
        h = x;
        v = y;
        break;
      }
    }
    while (h - 1 !== -1) {
      if(arr[h-1][v] == arr[h][v]){
        t++;
        h--;
      }
      else{
        h = x;
        v = y;
        break;
      }
    }
    while ((h - 1 !== -1) && (v + 1 !== 3)) {
      if(arr[h-1][v-1] == arr[h][v]){
        tr++;
        h--;
        v++;
      }
      else{
        h = x;
        v = y;
        break;
      }
    }
    while (v - 1 !== -1) {
      if(arr[h][v-1] == arr[h][v]){
        l++;
        v--;
      }
      else{
        h = x;
        v = y;
        break;
      }
    }
    while (v + 1 !== 3) {
      if(arr[h][v+1] == arr[h][v]){
        r++;
        v++;
      }
      else{
        h = x;
        v = y;
        break;
      }
    }
    while ((h + 1 !== 3) && (v - 1 !== -1)) {
      if(arr[h+1][v-1] == arr[h][v]){
        bl++;
        h++;
        v--;
      }
      else{
        h = x;
        v = y;
        break;
      }
    }
    while (h + 1 !== 3) {
      if(arr[h+1][v] == arr[h][v]){
        b++;
        h++;
      }
      else{
        h = x;
        v = y;
        break;
      }
    }
    while ((h + 1 !== 3) && (v + 1 !== 3)) {
      if(arr[h+1][v+1] == arr[h][v]){
        br++;
        h++;
        v++;
      }
      else{
        h = x;
        v = y;
        break;
      }
    }
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
    if((tl+br+1 == 3)||(t+b+1 == 3)||(tr+bl+1 == 3)||(l+r+1 == 3)){
      this.setState({
        mess : content[x][y]+' was win'
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
        <table>
          <tbody>
            {this.state.content.map((trItem,index1)=> <tr key={index1}>{trItem.map((tdItem,index2)=> <td key={index2} onClick={this.handleClick(index1,index2)}>{tdItem}</td>)}</tr>)}
          </tbody>
        </table>
        <p>{this.state.mess}</p>
      </div>
    );
  }
}
