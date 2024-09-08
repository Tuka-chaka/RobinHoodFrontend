import React from 'react'
import styles from './Jail.module.scss'
import JailCell from '../../ui/jailCell/JailCell'

const Jail = () => {
  return (
    <div className={styles.jail}>
      <JailCell/>
      <JailCell/>
      <JailCell/>
      <JailCell/>
    </div>
  )
}

export default Jail
