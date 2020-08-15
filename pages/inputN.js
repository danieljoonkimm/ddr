import React, {useState} from 'react'

export const InputN = ({onNumberChange}) => {
  const [currentNum, setCurrentNum] = useState(0)

  return <form onSubmit={e => e.preventDefault(), onNumberChange(currentNum)}>
    <input type='number' onChange={e => setCurrentNum(e.target.value)}/>
    <button type='submit'>Enter Board Number</button>
  </form>
}