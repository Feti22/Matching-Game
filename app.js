let cards = [
  'fas fa-atom',
  'fas fa-frog',
  'fas fa-feather-alt',
  'fas fa-cogs',
  'fa fa-anchor',
  'fas fa-fan',
  'fas fa-bolt',
  'fas fa-hat-wizard',
  'fas fa-apple-alt',
  'fas fa-bell',
  'fa fa-bomb',
  'fas fa-brain',
];

let openCards = [];
let score = 0;
let counter = document.getElementById("score");
const restart = document.querySelector('.restart');

let shuffle = function(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateCard(card) {
  return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
}

function initGame() {
  score = 0;
  counter.innerHTML = score;
  const deck = document.getElementById('cards');
  const deckCards = shuffle(cards).map(function(card) {
      return generateCard(card);
  });

  deck.innerHTML = deckCards.join('');
  allCards = document.querySelectorAll('.card');
 
  let nextCard = document.getElementById('next-card');
  let num = (Math.random() * cards.length);
  let randomCard = cards[num | 0];
  
  nextCard.className = randomCard;
  cards.splice(num, 1);
 
  allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {
      score++;
      counter.innerHTML = score;
      openCards.push(card);
      card.classList.add('open', 'show', 'disabled');

        if (openCards[0].dataset.card === nextCard.className) {
          matched();
          allMatched();
          setTimeout(function() {
            let num = (Math.random() * cards.length);
            randomCard = cards[num| 0];
            nextCard.className = randomCard;

            if (cards.length > 1) {
              cards.splice(num, 1);
            }
          }, 400);
        } else {
          unmatched();
        }
    })
  })
}

initGame();

function matched() {
  openCards[0].classList.add('matched', 'disabled');
  openCards = [];
}

function allMatched() {
  let matchedCards = document.getElementsByClassName('matched');

  if (matchedCards.length === 12) {
    setTimeout(function() {
      alert (`Winner! Number of moves: ${score}`);
    }, 250);
  }
}

function unmatched() {
  openCards[0].classList.add('unmatched');
  disable();
  setTimeout(function() {
      enable();
      openCards = [];
  }, 400);
}

function disable() {
  openCards[0].classList.add('disabled');
  allCards.forEach(function(card) {
      card.classList.add('disabled');
  });
}

function enable() {
  allCards.forEach(function(card) {
    card.classList.remove('disabled', 'open', 'show', 'unmatched');
  });
}

restart.addEventListener('click', function() {
  cards = [
    'fas fa-atom',
    'fas fa-frog',
    'fas fa-feather-alt',
    'fas fa-cogs',
    'fa fa-anchor',
    'fas fa-fan',
    'fas fa-bolt',
    'fas fa-hat-wizard',
    'fas fa-apple-alt',
    'fas fa-bell',
    'fa fa-bomb',
    'fas fa-brain',
  ];

  initGame();
});
