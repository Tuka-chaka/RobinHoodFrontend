import React from 'react'
import Card from '../card/Card.js'
import styles from './Hand.module.scss'

const Hand = () => {
  return (
    <div className={styles.hand}>
        {/* Карты отражать циклом, добавляя смещение пропом style 
        ToDo: звук при ховере*/}
      <Card className={styles.card} content={'Отец Крюк'} isFaceUp/>
      <Card className={styles.card} style={{left: '170px'}}/>
    </div>
  )
}

export default Hand
