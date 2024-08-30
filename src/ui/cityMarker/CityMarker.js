import React from 'react'
import styles from './CityMarker.module.scss'
import { GiVillage,  GiChurch,  GiCastle } from "react-icons/gi";

const CityMarker = ({style, type, name}) => {

  const icons = {
    "forest": <GiVillage style={{ width: '100%', height: 'auto' }}/>,
    "plain": <GiChurch style={{ width: '100%', height: 'auto' }}/>,
    "capital": <GiCastle style={{ width: '100%', height: 'auto' }}/>
  }

  return (
    <div className={styles.cityMarker} style={style}>
      <div className={`${styles.icon} ${type === 'capital' ? styles.capital : ''} ${name}`}>{icons[type]}</div>
      <div className={`${styles.nameTag} ${type === 'plain' ? styles.plain : ''}`}>{name}</div>
    </div>
  )
}

export default CityMarker
