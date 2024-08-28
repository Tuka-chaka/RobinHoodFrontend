import React from 'react'
import styles from './Card.module.scss'

const Card = ({className, style, content, isFaceUp}) => {
  console.log(style)
  return (
    <div className={className} style={style}>
      {isFaceUp ? <p>{content}</p> : <></>}
    </div>
  )
}

export default Card