# Player object that stores game relevant player data
class Player():
  # Blackjack card values
  CARD_VALUES = {
    'A': 11,  # Ace (will handle 1 vs 11 logic in evaluation)
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
    'J': 10, 'Q': 10, 'K': 10
  }
  
  # Initializes player object
  # Takes in name argument for player name
  def __init__(self, name):
    self.name = name
    self.hand = []
  
  # Adds dealt card to player hand
  def hit(self, card):
    self.hand.append(card)
    self.hand_value = self.evaluate_hand()

  # Evaluates player hand value
  # Ace logic is automatically handled for optimal hand total
  def evaluate_hand(self):
    total = 0
    aces = 0
    
    # Calculate total and count aces
    for card in self.hand:
      value = self.CARD_VALUES[card['rank']]
      if card['rank'] == 'A':
        aces += 1
      total += value
    
    # Handle ace logic (11 vs 1)
    while total > 21 and aces > 0:
      total -= 10  # Convert ace from 11 to 1
      aces -= 1
    
    return total