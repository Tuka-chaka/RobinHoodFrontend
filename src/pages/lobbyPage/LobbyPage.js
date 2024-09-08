import React from 'react'
import styles from './LobbyPage.module.scss'

const LobbyPage = ({onPlayerReady, colors, players, myId, onColorPicked}) => {
  console.log(colors)
  return (
    <div>
      <div className={styles.colorPicker}>{colors.map(color => 
        <div key={color} style={{backgroundColor: color}}
        className={`${styles.colorOption} ${players[myId].color === color ? styles.myColor : ''}`}
        onClick={() => onColorPicked(color)}
        />)}
      </div>
      <ul>
        {Object.keys(players).map(playerKey => <li key={playerKey} style={playerKey === myId ? {backgroundColor: 'beige', color: players[playerKey].color} : {color: players[playerKey].color}}>{playerKey}</li>)}
      </ul>
      <button type="button" onClick={onPlayerReady}>ready</button>
    </div>
  )
}

export default LobbyPage
