from flask import Blueprint, jsonify
from app.blackjack.deck import Deck
from app.blackjack.player import Player

# Blueprint object to organize a group of related routes
# blueprint name = "game_routes"
bp = Blueprint("game_routes", __name__)

# Test route
# fetching from /api/ will return a json object with an attribute named message
@bp.route("/")
def make_deck():
  deck = Deck()
  isaac = Player("Isaac")
  deck.shuffle()
  isaac.hit(deck.deal_card())
  isaac.hit(deck.deal_card())
  isaac.hit(deck.deal_card())
  print(f"Player hand: {isaac.hand}")
  print(f"Total: {isaac.evaluate_hand()}")
  return jsonify(deck.deck)