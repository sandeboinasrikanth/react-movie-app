import { X } from "@mui/icons-material";
import React, { useState } from "react";

export function TicTacToe() {
  return (
    <div>
      <h1>Fun Game</h1>
      <Board/>
    </div>
  );
}

function Board(){
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ])

  const [isXTurn, setXTurn] = useState(true);

  const decideWinner = (board) =>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let i=0; i<lines.length; i++){
      const [a, b, c] = lines[i];

      if(board[a] !== null &&  board[a]=== board[b] && board[b] === board[c]){
        console.log(lines[i], a, b, c);
        console.log("Winner", board[a]);
        return board[a];
      }
    }
    return null;
  }

  const winner = decideWinner(board);

  const handleClick=(index)=>{
    console.log(index)
    //Allow updating in untouched boxes;   null means untouched  // board[index]===null
    // If there is NO winner && If it's untouched - then update
    if(!winner && !board[index]){
      const boardCopy =[...board] ;                  // copying the board value
      boardCopy[index] = isXTurn ? "X" : "O" ;      // Updating the board value
      setBoard(boardCopy)                            // setBoard is added to board variable
      //Changing turn 
      setXTurn(!isXTurn);
    }

  }

  return( 
    <div>
      <div className="board">
        {board.map((val, index)=>(
          <GameBox key={index} val={val} onPlayerClick={()=>handleClick(index)} />
        ))}
        <h2>Winner is: {winner} </h2>
      </div>
      <button onClick={()=>}>Restart</button>
    </div>
)}


function GameBox({val, onPlayerClick}){
  // const [val, setVal]=useState("")
  // const val = "X"
  const styles ={
    color:val === "X" ? "green" : "red",
  }
  return <div 
  style={styles} 
  // onClick={()=>setVal(val === "X" ? "O":"X")} 
  onClick={onPlayerClick}
  className="game-box">
    {val}
  </div>
}

//X -> green
//O -> Red
// let think 2 players playing one  click [o] another click [x]
// onPlayerClick -what data type => function

//react confetti












































