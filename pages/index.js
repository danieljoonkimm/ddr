import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const StyleDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(${props => props.length}, 1fr);

`


export default function Home() {
  let num = 4
  const [newBoard, setNewBoard] = useState()
  const [initial, setInitial] = useState(num)
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    let boardData = createBoard()
    
    setNewBoard(boardData)
  }, [flag, initial])
  
  const createBoard = () => {
    var matrix = [];
    for(var i=0; i< initial; i++) {
        matrix[i] = [];
        for(var j=0; j< initial; j++) {
        matrix[i][j] = <div style={{'backgroundColor': (j%2 === 0 && i % 2 === 0) ? 'black' : (j%2 !== 0 && i% 2 !==0) ? 'black' : 'white'}}
        >{j}
        </div>;
        }
    }

    return matrix
  }
  
    return (
      <div className="App">
        <form onSubmit={e => e.preventDefault(), () => setFlag(c => !c)}>
  
        <input type='number' onChange={e => setInitial(e.target.value)}></input>
        <button type='submit' style={{'display': 'none'}}></button>
        </form>
        {newBoard === undefined ? 'loading' : <div>{newBoard.map((arr, index) => <StyleDiv index={index} length={arr.length}>{arr}</StyleDiv>)}</div>}
      </div>
    );
}
