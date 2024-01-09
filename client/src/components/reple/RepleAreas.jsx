import React from 'react'
import RepleList from './RepleList'
import RepleWrite from './RepleWrite'

const RepleAreas = ({ position }) => {
  return (
    <>
      <RepleList position={position} />
      <RepleWrite position={position} />
    </>
  )
}

export default RepleAreas