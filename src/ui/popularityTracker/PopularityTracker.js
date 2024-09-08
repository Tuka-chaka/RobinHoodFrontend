import React from 'react'
import styles from './PopularityTracker.module.scss'

const PopularityTracker = ({color, isOwn = false}) => {
  return (
    <div className={`${styles.popularityTracker} ${styles[color]} ${isOwn ? styles.isOwn : ''}`}>
      
    </div>
  )
}

export default PopularityTracker
