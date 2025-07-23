from flask import Blueprint, jsonify, session
from app.blackjack.deck import Deck
from app.blackjack.player import Player

# Blueprint object to organize a group of related routes
# blueprint name = "game_routes"
bp = Blueprint("game_routes", __name__)

# Initializers deck and player objects for a new game
@bp.route("/start")
def start_game():
  # Creates deck object
  deck = Deck()
  deck.shuffle()
  # Stores deck info in session
  session["deck"] = deck.to_dict()
  # Creates player object
  player = Player("player_name")
  # Stores player info in session
  session["player"] = player.to_dict()
  return "game started"

# Deals card to player hand
@bp.route("/deal_card")
def deal_card():
  # Get deck from session and rebuild deck object
  deck_data = session.get("deck")
  deck = Deck.from_dict(deck_data)

  # Get player from session and rebuild player object
  player_data = session.get("player")
  player = Player.from_dict(player_data)

  # Deal a card and add it to the player's hand
  player.add_card(deck.deal_card())

  # Save updated deck and player info back to session
  session["deck"] = deck.to_dict()
  session["player"] = player.to_dict()

  # return relevant player data
  return jsonify({
    "card_dealt": player.hand[-1],
    "hand": player.hand,
    "hand_value": player.evaluate_hand()
  })

# Returns player information
@bp.route("/show_player")
def show_player():
  player_data = session.get("player")
  if not player_data:
    return "No player found", 400
  return jsonify(player_data)