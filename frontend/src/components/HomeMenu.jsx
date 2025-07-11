export default function HomeMenu({ onStart }) {
    return (
        <div className="menu">
            <p>Welcome to BlackJack! :D</p>
            <button onClick={onStart}>Start</button>
        </div>
    )
}