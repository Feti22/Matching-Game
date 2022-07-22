# Memory-Match-Game
This project is an amazing game built in JavaScript.

## Website: 
https://memory-match-game.netlify.app/ 

## Description:
The game shuffles and hides the cards randomly when the page is loaded or the game is reset. Users can reveal cards by clicking each card individually.
Users should not be able to reveal more than 1 card at a time. If several cards are clicked in succession, only the first click should register and reveal a card.
Users should not be able to open a card that is already *open* or *matched*.

A card that does not match should automatically hide after a set timeout period.
A user wins once all cards have successfully been *matched*.
Upon winning the game, the user should be presented with an alert, indicating that they have won the game and how many moves it took them
A user can restart the game at any time by pressing the restart button. This will cause all the cards to be *hidden* again, cards to be reshuffled and the moves reset to 0. 

The game should display the current number of moves a user has made. A move is considered to have occurred when a card has been shown to the user.
