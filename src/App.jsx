import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => { 
    alert("Greeting's from Anirban !! Let's Get Started")
  })

  return (
    <div className='bg-emerald-400 h-[100vh] flex-col'>
      <Header />
      <Board />
      <Footer />
    </div>
  )
}

export default App
