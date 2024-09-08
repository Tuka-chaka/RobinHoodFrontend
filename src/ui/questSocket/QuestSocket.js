import React from 'react'
import styles from './QuestSocket.module.scss'
import { GiCrossedSwords, GiBowArrow, GiFoxHead, GiDominoMask } from "react-icons/gi";

const QuestSocket = ({type}) => {

    const icons = {
        "strength": <GiCrossedSwords style={{ width: '100%', height: 'auto' }}/>,
        "dexterity": <GiBowArrow style={{ width: '100%', height: 'auto' }}/>,
        "cunning": <GiFoxHead style={{ width: '100%', height: 'auto' }}/>,
        "noise": <GiDominoMask style={{ width: '100%', height: 'auto' }}/>
      }

  return (
    <div className={styles.questSocket}>
      <div className={`${styles.icon} ${type === 'noise' ? styles.noise : ''}`}>
        {icons[type]}
      </div>
      <div className={`${styles.cardSocket}  ${type === 'noise' ? styles.noise : ''}`}></div>
    </div>
  )
}

export default QuestSocket
