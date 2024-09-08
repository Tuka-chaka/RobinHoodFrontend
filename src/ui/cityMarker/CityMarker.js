import React from 'react'
import styles from './CityMarker.module.scss'
import { GiVillage,  GiChurch,  GiCastle } from "react-icons/gi";
import { ArcherElement } from 'react-archer';

const CityMarker = ({style, type, name, neighbors, archerId}) => {

  const icons = {
    "forest": <GiVillage style={{ width: '100%', height: 'auto' }}/>,
    "plain": <GiChurch style={{ width: '100%', height: 'auto' }}/>,
    "capital": <GiCastle style={{ width: '100%', height: 'auto' }}/>
  }

  return (
    <div className={styles.cityMarker} style={style}>
      <ArcherElement id={archerId} relations={
        neighbors.map(neighbor => ({
          targetId: neighbor,
          targetAnchor: 'middle',
          sourceAnchor: 'middle',
          style: {strokeDasharray: '5,5', strokeColor: "#c48647", strokeWidth: 4 }
        }))}>

        <div className={`${styles.icon} ${type === 'capital' ? styles.capital : ''} ${name}`}>{icons[type]}</div>
      </ArcherElement>
      <div className={`${styles.nameTag} ${type === 'plain' ? styles.plain : ''}`}>{name}</div>
    </div>
  )
}

export default CityMarker
