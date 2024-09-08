import React from 'react'
import styles from './Card.module.scss'

const Card = ({className, style, content, isFaceUp}) => {
  return (
    <div className={className} style={style}>
      <p>{content}</p>
      
    </div>
  )
}

export default Card