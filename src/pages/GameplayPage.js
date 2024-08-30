import React from 'react'
import Hand from '../components/hand/Hand'
import GameMap from '../components/gameMap/GameMap'
import styles from './GameplayPage.module.scss'
import Jail from '../components/jail/Jail'
import QuestField from '../components/questField/QuestField'

const GameplayPage = () => {
  return (
    <div>
      <div className={styles.fieldLayout}>
        <Jail/>
        <GameMap/>
        <QuestField/>
      </div>
      <Hand/>
    </div>
  )
}

export default GameplayPage
