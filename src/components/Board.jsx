import React, { useEffect } from 'react'
import Grid from './Grid.jsx'
import { useSelector } from 'react-redux'


function Board() {

  const data = useSelector((state) => state.data)
  
  useEffect(() => {
    const check = data.filter((item) => (
      item.token === "X" 
    ))

    console.log(check);
  }, [])

  return (
  
    <div className='bg-emerald-400 flex flex-wrap justify-center mt-20'>

    {data.map((item) => (

      <div key={item.id} className='flex justify-center m-1 sm:w-1/4' >
        <Grid id={item.id} token={item.token} />
      </div>

    ))}

  </div>
  
)
}

export default Board
