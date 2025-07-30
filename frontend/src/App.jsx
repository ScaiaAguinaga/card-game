import { useState } from "react";

import HomeMenu from "./components/HomeMenu";
import GameBoard from "./components/GameBoard";

const getCardAsset = (card) => {
  const { rank, suit } = card;

  const suitMap = {
    S: "Spades",
    H: "Hearts",
    D: "Diamonds",
    C: "Clubs",
  };

  const suitName = suitMap[suit];
  const fileName = `${rank}${suit}.svg`;

  return `/src/assets/${suitName}/${fileName}`;
};

export default function App() {
  const [screen, setScreen] = useState("home");
  const [playerCards, setPlayerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);

  // Clear the displayed cards and reset the displayed player score to zero
  const resetGame = () => {
    setPlayerCards([]);
    setPlayerScore(0);
  };

  const handleStartGame = async () => {
    try {
      const response = await fetch("/api/start", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        resetGame();
        setScreen("game");

        // Deal initial 2 cards to player
        await dealCard(); // First card
        await dealCard(); // Second card
      }
    } catch (error) {
      console.error("Failed to start game:", error);
    }
  };

  // Helper function to deal a single card
  const dealCard = async () => {
    try {
      const response = await fetch("/api/deal_card", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();

        // Add the new card to display
        const cardAsset = getCardAsset(data.card_dealt);
        setPlayerCards((prev) => [...prev, cardAsset]);

        // Update the score
        setPlayerScore(data.hand_value);

        return data;
      }
    } catch (error) {
      console.error("Failed to deal card:", error);
    }
  };

  const handleHit = async () => {
    const result = await dealCard();

    // Check for bust
    if (result.hand_value > 21) {
      console.log(`Bust! You lose! You got a ${result.hand_value}`);
      resetGame();
      setScreen("home");
    }
  };

  const handleStand = () => {
    console.log(`You stood with ${playerScore}.`);
  };

  return (
    <>
      {screen === "home" && <HomeMenu onStart={handleStartGame} />}
      {screen === "game" && (
        <GameBoard
          onQuit={() => {
            setScreen("home");
          }}
          onHit={handleHit}
          onStand={handleStand}
          playerCards={playerCards}
          dealerCards={[]} // No dealer support yet
          playerScore={playerScore}
          dealerScore={0} // No dealer yet
        />
      )}
    </>
  );
}
