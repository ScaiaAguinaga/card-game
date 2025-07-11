export default function GameBoard({ onQuit }) {
    return (
        <div className="game">
            <p>Blackjack Table</p>
            {/** Game UI */}
            <button onClick={onQuit}>Quit</button>
        </div>
    )
}