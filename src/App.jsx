import React from 'react'
import Word from './componion/Word'
import uuid from 'react-uuid'
import Abc from './componion/Abc'

export default function App() {
  console.log(uuid())
  return (
    <>
    <Abc></Abc>
      {/* <Word></Word>  */}
      </>
  )
}
