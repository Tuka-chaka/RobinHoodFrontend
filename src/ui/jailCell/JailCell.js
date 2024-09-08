import React from 'react'
import styles from './JailCell.module.scss'
import { GiWoodenDoor } from "react-icons/gi";

const JailCell = () => {
  return (
    <div className={styles.jailCell}>
      <div className={styles.icon}>
        <GiWoodenDoor style={{ width: '100%', height: 'auto' }}/>
      </div>
    </div>
  )
}

export default JailCell
