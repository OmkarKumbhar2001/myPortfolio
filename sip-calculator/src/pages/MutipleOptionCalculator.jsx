import { updateMainFalg } from '@/toolkit/valuesSlice';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const MutipleOptionCalculator = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(updateMainFalg(true))
  },[])
  return (
    <div>Options</div>
  )
}

export default MutipleOptionCalculator;