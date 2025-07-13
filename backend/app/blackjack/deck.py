import random

def create_deck():
  suits = ["C", "D", "K", "S"]
  ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]    
  return [{'rank': r, 'suit': s} for r in ranks for s in suits]

def shuffle_deck(deck):
    random.shuffle(deck)
    return deck