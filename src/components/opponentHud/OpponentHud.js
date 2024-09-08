import React from 'react'
import styles from './OpponentHud.module.scss'
import PopularityTracker from '../../ui/popularityTracker/PopularityTracker'

const OpponentHud = () => {
  return (
    <div className={styles.opponentHud}>
      <PopularityTracker color='green'/>
      <PopularityTracker color='red'/>
      <PopularityTracker color='blue'/>
    </div>
  )
}

export default OpponentHud
