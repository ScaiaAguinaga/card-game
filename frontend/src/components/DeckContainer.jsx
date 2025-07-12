export default function DeckContainer({ cards = [], title = "Player" }) {
  return (
    <div className="container mx-auto">
      <h3 className="text-xl font-bold text-center mb-4 text-white">{title}</h3>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {cards.map((card, index) => (
          <div key={index} className="card-container">
            <img
              src={card}
              alt={`Card ${index + 1}`}
              className="w-24 h-32 md:w-32 md:h-44 object-contain drop-shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}