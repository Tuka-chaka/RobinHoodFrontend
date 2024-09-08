import React from 'react'

const HomePage = ({onJoinRoom}) => {
  return (
    <div>
      <button type="button" onClick={() => onJoinRoom('1')}>join room 1</button>
    </div>
  )
}

export default HomePage
