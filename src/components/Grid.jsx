import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { togglePlayer, declareWinner, resetGame } from '../store/Slice.js';

function Grid({id, token}) {

  // const data = useSelector((state) => state.data)
  
  const winner = useSelector((state) => state.winner)

  const dispatch = useDispatch()

  const handlePlayers = () => {
 
    dispatch(togglePlayer({id}))

    dispatch(declareWinner({id}))

  }


  useEffect(() => {
    dispatch(resetGame())
  }, [winner])

  return (

    <div className='flex items-center justify-center border-4 border-emerald-900 bg-emerald-500 h-24 w-24 cursor-pointer rounded-md text-amber-950 text-xl' onClick={handlePlayers}>
      {`${token}`}
    </div>

  )

}

export default Grid
