import { useState } from 'react'

import HomeMenu from './components/HomeMenu'
import GameBoard from './components/GameBoard'


export default function App() {
  const [screen, setScreen] = useState('home'); // or 'game' screen

  return (
    <div className="app">
      {screen === "home" && <HomeMenu onStart={() => setScreen("game")} />}
      {screen === "game" && <GameBoard onQuit={() => setScreen("home")} />}
    </div>
  );
}
