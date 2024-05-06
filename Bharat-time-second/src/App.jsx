import Content from './component/Content';
import Realtime from './component/realtime';
import Heading from './component/heading';
import React from 'react'
import './App.css'

function App() {
  return (
    <>
    <div>
      <Heading/>
      <Content></Content>
      <Realtime></Realtime>
    </div>
    </>
  )
}

export default App
