import random

# Deck object thats stores cards to be used for gameplay
class Deck():
  # Class constants for suits and ranks
  SUITS = ["C", "D", "H", "S"]
  RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  
  # Initializes deck
  # C = Club, D = Diamond, H = Heart, S = Spade
  # A = Ace, J = Jack, Q = Queen, K = King
  def __init__(self):
    self._create_deck()

  # Private function for creating a fresh deck
  def _create_deck(self):
    self.deck = [{'rank': r, 'suit': s} for r in self.RANKS for s in self.SUITS]

  # Shuffles deck into a random order
  def shuffle(self):
    random.shuffle(self.deck)

  # Returns top card of deck to be dealt
  def deal_card(self):
    return(self.deck.pop())
  
  # Resets the deck to a fresh unshuffled state 
  def reset_deck(self):
    self._create_deck()

  def to_dict(self):
    return {"deck": self.deck}
  
  @classmethod
  def from_dict(cls, data):
    new_deck = cls()
    new_deck.deck = data["deck"]
    return new_deck