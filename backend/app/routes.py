from flask import Blueprint, jsonify
from app.blackjack.deck import create_deck, shuffle_deck

# Blueprint object to organize a group of related routes
# blueprint name = "game_routes"
bp = Blueprint("game_routes", __name__)

# Test route
# fetching from /api/ will return a json object with an attribute named message
@bp.route("/")
def make_deck():
  deck = create_deck()
  deck = shuffle_deck(deck)
  return jsonify(deck)