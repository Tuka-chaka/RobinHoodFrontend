import {React, useEffect, useMemo, useState} from 'react'
import styles from './GameMap.module.scss'
import CityMarker from '../../ui/cityMarker/CityMarker'
import { ArcherContainer, ArcherElement } from 'react-archer'

const GameMap= () => {

  // todo: это должно быть на сервере
  const [cities, setCities] = useState([
    {
      "name": "Энсли",
      "type": "forest",
      "x" : "8",
      "y" : "5",
      "connections" : [
        "Донкастер",
        "Эдвинстоув",
        "Барнсдэйл"
      ]
    },
    {
      "name": "Барнсдэйл",
      "type": "forest",
      "x" : "27",
      "y" : "6",
      "connections" : [
        "Энсли",
        "Клипстоун",
        "Фарнсфилд"
      ]
    },
    {
      "name": "Клипстоун",
      "type": "forest",
      "x" : "48",
      "y" : "3",
      "connections" : [
        "Барнсдэйл",
        "Глидторп",
        "Хантингтон"
      ]
    },
    {
      "name": "Донкастер",
      "type": "forest",
      "x" : "1",
      "y" : "20",
      "connections" : [
        "Энсли",
        "Эдвинстоув",
        "Олертон"
      ]
    },
    {
      "name": "Эдвинстоув",
      "type": "forest",
      "x" : "13",
      "y" : "18",
      "connections" : [
        "Энсли",
        "Донкастер",
        "Фарнсфилд",
        "Инглвуд"
      ]
    },
    {
      "name": "Фарнсфилд",
      "type": "plain",
      "x" : "26",
      "y" : "21",
      "connections" : [
        "Глидторп",
        "Эдвинстоув",
        "Барнсдэйл",
        "Инглвуд",
        "Джонсвуд"
      ]
    },
    {
      "name": "Глидторп",
      "type": "forest",
      "x" : "40",
      "y" : "15",
      "connections" : [
        "Фарнсфилд",
        "Клипстоун",
        "Хантингтон"
      ]
    },
    {
      "name": "Хантингтон",
      "type": "forest",
      "x" : "50",
      "y" : "22",
      "connections" : [
        "Глидторп",
        "Клипстоун",
        "Джонсвуд",
        "Кирклис"
      ]
    },
    {
      "name": "Инглвуд",
      "type": "plain",
      "x" : "16",
      "y" : "33",
      "connections" : [
        "Ноттингем",
        "Эдвинстоув",
        "Фарнсфилд",
        "Локсли"
      ]
    },
    {
      "name": "Джонсвуд",
      "type": "plain",
      "x" : "37",
      "y" : "33",
      "connections" : [
        "Ноттингем",
        "Фарнсфилд",
        "Глидторп",
        "Хантингтон",
        "Кирклис"
      ]
    },
    {
      "name": "Ноттингем",
      "type": "capital",
      "x" : "26",
      "y" : "36",
      "connections" : [
        "Инглвуд",
        "Джонсвуд",
        "Локсли",
        "Мэнсфилд"
      ]
    },
    {
      "name": "Кирклис",
      "type": "forest",
      "x" : "52",
      "y" : "39",
      "connections" : [
        "Джонсвуд",
        "Хантингтон",
        "Рэйвенсхед"
      ]
    },
    {
      "name": "Локсли",
      "type": "plain",
      "x" : "16",
      "y" : "49",
      "connections" : [
        "Ноттингем",
        "Инглвуд",
        "Олертон",
        "Паплвик"
      ]
    },
    {
      "name": "Мэнсфилд",
      "type": "plain",
      "x" : "38",
      "y" : "49",
      "connections" : [
        "Ноттингем",
        "Рэйвенсхед",
        "Вэйкфилд",
        "Паплвик"
      ]
    },
    {
      "name": "Паплвик",
      "type": "plain",
      "x" : "27",
      "y" : "54",
      "connections" : [
        "Локсли",
        "Мэнсфилд",
        "Трент",
        "Вэйкфилд",
        "Викарснест"
      ]
    },
    {
      "name": "Олертон",
      "type": "forest",
      "x" : "1",
      "y" : "51",
      "connections" : [
        "Донкастер",
        "Локсли",
        "Трент",
        "Сэйлс"
      ]
    },
    {
      "name": "Трент",
      "type": "forest",
      "x" : "9",
      "y" : "58",
      "connections" : [
        "Паплвик",
        "Олертон",
        "Сэйлс"
      ]
    },
    {
      "name": "Сэйлс",
      "type": "forest",
      "x" : "1",
      "y" : "67",
      "connections" : [
        "Олертон",
        "Трент",
        "Викарснест"
      ]
    },
    {
      "name": "Викарснест",
      "type": "forest",
      "x" : "29",
      "y" : "68",
      "connections" : [
        "Паплвик",
        "Сэйлс",
        "Вэйкфилд"
      ]
    },
    {
      "name": "Вэйкфилд",
      "type": "forest",
      "x" : "42",
      "y" : "66",
      "connections" : [
        "Паплвик",
        "Мэнсфилд",
        "Рэйвенсхед",
        "Викарснест"
      ]
    },
    {
      "name": "Рэйвенсхед",
      "type": "forest",
      "x" : "50",
      "y" : "60",
      "connections" : [
        "Мэнсфилд",
        "Вэйкфилд",
        "Кирклис"
      ]
    },
  ])

  const roads = useMemo(
    () => {
      let checkedPairs = []
      return cities.map((city) => {
          return ({
            name: city.name
            }
          )
        }
      )
    },
    [cities]
  );

  useEffect(() => {
    console.log(roads)
  }, [roads])

  return (
    <div className={styles.gameMap}>
      {cities.map(city => 
        <CityMarker key={city.name} type={city.type} name={city.name} style={{left: `${city.x}vw`, top: `${city.y}vh`}}/>
      )
      }
      {/* {connections.map(connection => <></>)} */}
    </div>
  )
}

export default GameMap