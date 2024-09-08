import { useEffect, useState } from 'react';
import './App.css';
import GameplayPage from './pages/GameplayPage';
import io from 'socket.io-client'
import { Route, Routes, useNavigate } from "react-router-dom"
import HomePage from './pages/homePage/HomePage';
import LobbyPage from './pages/lobbyPage/LobbyPage';

const socket = io.connect("http://localhost:3001");

function App() {

  const navigate = useNavigate();

  const [players, setPlayers] = useState({})
  const [colors, setColors] = useState([])
  const [room, setRoom] = useState('')
  const [myId, setMyId] = useState(undefined)
  const [cities, setCities] = useState([])

  useEffect(() => {

    socket.on("playerJoined", ([colors, players]) => {
      setColors(colors)
      setPlayers(players)
      setMyId(socket.id)
    })

    socket.on("playerLeft", ([colors, players]) => {
      setColors(colors)
      setPlayers(players)
    })

    socket.on("playerPickedColor", ([colors, players]) => {
      setPlayers(players)
      setColors(colors)
    })

    socket.on("startGame", ([colors, players, cities]) => {
      setPlayers(players)
      setColors(colors)
      setCities(cities)
      navigate('/game')
    })


  }, [navigate])

  const handleJoinRoom = (roomId) => {

    socket.emit("joinRoom", roomId)
    setRoom(roomId)
    navigate('/lobby')

  }

  const handlePlayerReady = () => {

    socket.emit("playerReady", room)

  }

  const handleColorPicked = (color) => {

    socket.emit("colorPicked", [room, color])

  }
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage onJoinRoom={handleJoinRoom}/>} />
        <Route path="/lobby" element={
          <LobbyPage onPlayerReady={handlePlayerReady}
          colors={colors}
          players={players}
          myId={myId}
          onColorPicked={handleColorPicked} />} />
        <Route path="/game" element={<GameplayPage players={players} socket={socket} cities={cities} myId={myId}/>} />
      </Routes>
    </div>
  );
}

export default App;
