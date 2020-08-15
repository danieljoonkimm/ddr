import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const ParentBoard = styled.div`
  width: 100% !important;
  border-top: 1px solid black;
  border-left: 1px solid black;
`

const BoardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
`

const Color = styled.div`
// background-color: black;
  &:nth-of-type(3n+0) {
    background-color: red;
  }
  width: 100%;
  height: 10vh;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`

export const MakeBoard = ({number, setNumber}) => {
  //set i < to number squared
  //need to fix every other box for offsetting colors
  const [newBoard, setNewBoard] = useState()

  const createBoard = () => {
    let board = []
    for(let i = 0; i < 64; i++) {
      board.push(i)
    }
    console.log(board)
   setNewBoard(board)
}

useEffect(() => {
  createBoard()
}, [number, setNumber])



  return(
    <ParentBoard>
      {newBoard === undefined ? <div>Loading Board</div> :
      <BoardDiv>
        {newBoard.map((num, index) => (
          <Color isOdd={index}>{num}</Color>
        ))}
      </BoardDiv>
      }
    </ParentBoard>
  )
}