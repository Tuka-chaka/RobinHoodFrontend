import React from 'react'
import styles from './QuestField.module.scss'
import QuestSocket from '../../ui/questSocket/QuestSocket'

const QuestField = () => {
  return (
    <div className={styles.questField}>
      <QuestSocket type='strength'/>
      <QuestSocket type='dexterity'/>
      <QuestSocket type='cunning'/>
      <QuestSocket type='noise'/>
    </div>
  )
}

export default QuestField
