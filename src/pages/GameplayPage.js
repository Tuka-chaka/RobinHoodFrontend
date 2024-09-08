import React from 'react'
import Hand from '../components/hand/Hand'
import GameMap from '../components/gameMap/GameMap'
import styles from './GameplayPage.module.scss'
import Jail from '../components/jail/Jail'
import QuestField from '../components/questField/QuestField'
import OpponentHud from '../components/opponentHud/OpponentHud'
import PopularityTracker from '../ui/popularityTracker/PopularityTracker'

const GameplayPage = ({socket, players, cities, myId}) => {

  return (
    <div>
      <div className={styles.fieldLayout}>
        <Jail/>
        <GameMap/>
        <QuestField/>
      </div>
      <Hand cards={players[myId].hand}/>
      <OpponentHud/>
      <PopularityTracker color='brown' isOwn/>
    </div>
  )
}

export default GameplayPage
