// Define card suits and ranks
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const cardRank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
//Declaring an empty array to contain all the cards
const deck = [];
// Create a deck of cards
for (const suit of suits) {
    for (const value of cardRank) {
      deck.push(value +" of " + suit);
    }
}

//Function for performing card shuffling - performing swapping
function shuffleDeck(deck) {
  for(let i=deck.length-1; i>0; i--) {
    //Math.floor() will round the number down to the nearest integer
    //Math.random() to generate a random number bewteen 0-51
    let j = Math.floor(Math.random() * (i+1)); 
    //console.log(j); //checking to see the random number
    //perform swapping
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp; 
    }
}

//Function for dealing hands to players
const players = ['Player 1', 'Player 2', 'Player 3'];
const handSize = 5;
function dealHands(players, handSize) {
  const hands = {};
  for (const player of players) {
    hands[player] = [];
    for (let i = 0; i < handSize; i++) {
      hands[player].push(deck.pop() || ''); // Deal a card from the deck
    }
  }
  return hands;
}

// Function to determine the best hand (based on highest card)
function determineBestHand(hands) {
  let bestHand = '';
  let bestPlayer = '';
  for (const player in hands) {
    const playerHand = hands[player];
    const highestCard = 
                        Math.max(...playerHand.map(card => 
                          {
                                const rank = card.split(' ')[0];
                                return cardRank.indexOf(rank);
                          })
                        );
    if (highestCard > bestHand) {
      bestHand = highestCard;
      bestPlayer = player;
    }
  }
  return bestPlayer + " wins";
}

//Shuffle the deck and deal hands
shuffleDeck(deck);
const hands = dealHands(players, handSize);

// Display the hands
for (const player in hands) {
  console.log(`${player}: ${hands[player].join(', ')}`);
}

//Determining the winner
const winner = determineBestHand(hands);
console.log(winner);