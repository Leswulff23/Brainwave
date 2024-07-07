import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from './components/Button';


function App() {

  const handleClick = () => {
    console.log("Connected")
  }

  return (
    <>
    <Button className='mt-10' href="#login" onClick={handleClick}>
      Hello World
    </Button>
    <ButtonGradient/>

    </>
  )
}

export default App
