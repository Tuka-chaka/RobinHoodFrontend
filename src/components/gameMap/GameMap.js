import {React, useEffect, useMemo, useState} from 'react'
import styles from './GameMap.module.scss'
import CityMarker from '../../ui/cityMarker/CityMarker'
import { ArcherContainer } from 'react-archer'

const GameMap= () => {

  // todo: это должно быть на сервере
  const [cities, setCities] = useState([
    {
      "id": "0",
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
      "id": "1",
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
      "id": "2",
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
      "id": "3",
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
      "id": "4",
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
      "id": "5",
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
      "id": "6",
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
      "id": "7",
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
      "id": "8",
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
      "id": "9",
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
      "id": "10",
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
      "id": "11",
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
      "id": "12",
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
      "id": "13",
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
      "id": "14",
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
      "id": "15",
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
      "id": "16",
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
      "id": "17",
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
      "id": "18",
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
      "id": "19",
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
      "id": "20",
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

  const createRoads = (cities) => {
    let checkedPairs = []
    let result = []
    for (let city of cities) {
      let neighbors = []
      for (let connection of city.connections) {
        let pair = new Set([city.name, connection])
        let isNew = true
        for (let checkedPair of checkedPairs) {
          if (checkedPair.difference(pair).size === 0) {
            isNew = false;
          }
        }

        if (isNew) {
          neighbors.push(`archer${cities.find(city => city.name === connection).id}`)
        }

        checkedPairs.push(pair)
      }

      result[city.name] = neighbors
    }

    return(result)
  }

  const roads = useMemo(
    () => createRoads(cities),
    [cities]
  );

  // useEffect(() => {
  //   console.log(roads)
  // }, [roads])

  return (
    <ArcherContainer endMarker={false} svgContainerStyle={{backgroundColor: "rgb(219, 182, 113)"}}>
    <div className={styles.gameMap}>
      
        {cities.map(city => 
          <CityMarker key={city.name}
          type={city.type}
          name={city.name}
          archerId={`archer${city.id}`}
          neighbors={roads[city.name]}
          style={{left: `${city.x}vw`, top: `${city.y}vh`}}/>
        )
        }
      
    </div>
    </ArcherContainer>
  )
}

export default GameMap