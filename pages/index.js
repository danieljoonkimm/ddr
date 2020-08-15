import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {InputN} from './inputN'
import {MakeBoard} from './makeBoard'

const initialNumber = 8
export default function Home() {
  const [number, setNumber] = useState(initialNumber)
  
  const onNumberChange = (num) => {
    setNumber(num)
  }

  return (
    <div className={styles.container}>
      <InputN onNumberChange={onNumberChange}/>
      <MakeBoard number={number} setNumber={setNumber}/>
    </div>
  )
}
