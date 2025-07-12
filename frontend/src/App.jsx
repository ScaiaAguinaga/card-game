import { useState } from "react";

import HomeMenu from "./components/HomeMenu";
import GameBoard from "./components/GameBoard";

import card1 from "./assets/Diamonds/8D.svg";
import card2 from "./assets/Diamonds/2D.svg";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  // Take the current (prev) state of a deck and update it with the new card
  const addPlayerCard = (card) => {
    setPlayerCards((prev) => [...prev, card]);
  };
  const addDealerCard = (card) => {
    setDealerCards((prev) => [...prev, card]);
  };

  // Clear the decks
  const resetGame = () => {
    setPlayerCards([]);
    setDealerCards([]);
  };

  /** Test Buttons */
  const handleHit = () => {
    console.log("Hit button clicked");
  };

  const handleStand = () => {
    console.log("Stand button clicked");
  };

  /**
   * NOTE: One of the two initial dealer cards MUST be made hidden (flipped) from the user for the game to play out as intended.
   */
  const handleStartGame = () => {
    resetGame();
    setScreen("game");
    /** Manually Add Cards (temporary) */
    addPlayerCard(card1);
    addPlayerCard(card2);
    addDealerCard(card1);
    addDealerCard(card2);
  };

  return (
    <>
      {screen === "home" && <HomeMenu onStart={handleStartGame} />}
      {screen === "game" && (
        <GameBoard
          onQuit={() => {
            resetGame();
            setScreen("home");
          }}
          onHit={handleHit}
          onStand={handleStand}
          playerCards={playerCards}
          dealerCards={dealerCards}
        />
      )}
    </>
  );
}
