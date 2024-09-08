import React from 'react'
import Card from '../card/Card.js'
import styles from './Hand.module.scss'

const Hand = ({cards}) => {
  console.log(cards)
  return (
    <div className={styles.hand}>
      {
        cards.map((card, index) => <Card key={card.name}
        stats={card.stats}
        className={styles.card}
        content={card.name}
        style={{left: `${index * 10}vw`}}/>)
      }
    </div>
  )
}

export default Hand
