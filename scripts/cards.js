const cCard = document.getElementById('cardCenter');
const lCard = document.getElementById('cardLeft');
const rCard = document.getElementById('cardRight');

const thumbs = [
  {
    title: 'nerve',
    image: './styles/images/music-thumbs/nerve.png',
  },
  {
    title: 'symbiosis',
    image: './styles/images/music-thumbs/symbiosis.png',
  },
  {
    title: 'eucharis',
    image: './styles/images/music-thumbs/eucharis.png',
  },
  {
    title: 'blue-room',
    image: './styles/images/music-thumbs/blue-room.png',
  },
];

let cIndex = Math.floor(Math.random() * thumbs.length);
let lIndex = cIndex - 1;
if (lIndex < 0) {
  lIndex = thumbs.length - 1;
}
let rIndex = cIndex + 1;
if (rIndex >= thumbs.length) {
  rIndex = 0;
}
let cardIndexes = [lIndex, cIndex, rIndex];
console.log(cardIndexes);

lCard.firstElementChild.setAttribute('src', thumbs[lIndex].image);
cCard.firstElementChild.setAttribute('src', thumbs[cIndex].image);
rCard.firstElementChild.setAttribute('src', thumbs[rIndex].image);

window.onload = function () {
  let offsetX = 0;
  let isSwiping = false;

  cCard.addEventListener('touchstart', function (e) {
    if (isSwiping) return;
    const touchLocation = e.targetTouches[0];
    const cCardPos = cCard.getBoundingClientRect();
    offsetX = touchLocation.pageX - cCardPos.left;
  });

  cCard.addEventListener('touchmove', function (e) {
    if (isSwiping) return;
    const touchLocation = e.targetTouches[0];
    const newLeft = touchLocation.pageX - offsetX;
    const screenCenter = window.innerWidth / 2;
    const cardWidth = cCard.offsetWidth;
    const cardCenter = newLeft + cardWidth / 2;
    const centerOrigin = cardCenter - screenCenter;

    cCard.style.left = `${newLeft}px`;
    cCard.style.transform = `rotate(${centerOrigin / 10}deg)`;
  });

  cCard.addEventListener('touchend', function (e) {
    if (isSwiping) return;
    const screenCenter = window.innerWidth / 2;
    const cCardPos = cCard.getBoundingClientRect();
    const cCenter = (cCardPos.left + cCardPos.right) / 2;

    const cardWidth = cCard.offsetWidth;
    const cardCenter = cCenter;
    const centerOrigin = cardCenter - screenCenter;

    const xBoundL = screenCenter - screenCenter * 0.7;
    const xBoundR = screenCenter + screenCenter * 0.7;

    isSwiping = true;

    if (cCenter > xBoundR) {
      cCard.style.left = '120%';
      cCard.style.transform = `rotate(${centerOrigin / 10}deg)`;

      lCard.style.left = '15%';
      lCard.style.transform = 'rotate(0deg)';

      setTimeout(() => {
        swapCards('left');
        isSwiping = false;
      }, 200);
    } else if (cCenter < xBoundL) {
      cCard.style.left = '-100%';
      cCard.style.transform = `rotate(${centerOrigin / 10}deg)`;

      rCard.style.left = '15%';
      rCard.style.transform = 'rotate(0deg)';

      setTimeout(() => {
        swapCards('right');
        isSwiping = false;
      }, 200);
    } else {
      cCard.style.left = '15%';
      cCard.style.transform = 'rotate(0deg)';
      isSwiping = false;
    }
  });
};

function swapCards(direction) {
  if (direction === 'left') {
    toggleTrans(cCard);
    toggleTrans(lCard);
    toggleTrans(rCard);

    cardIndexes[0] -= 1;
    cardIndexes[1] -= 1;
    cardIndexes[2] -= 1;

    for (let i = 0; i < cardIndexes.length; i++) {
      if (cardIndexes[i] == thumbs.length) {
        cardIndexes[i] = 0;
      } else if (cardIndexes[i] < 0) {
        cardIndexes[i] = thumbs.length - 1;
      } else {
        continue;
      }
    }

    lIndex = cardIndexes[0];
    cIndex = cardIndexes[1];
    rIndex = cardIndexes[2];

    console.log(cardIndexes, lIndex, cIndex, rIndex);

    lCard.firstElementChild.setAttribute('src', thumbs[lIndex].image);
    cCard.firstElementChild.setAttribute('src', thumbs[cIndex].image);
    rCard.firstElementChild.setAttribute('src', thumbs[rIndex].image);

    // const temp = cCard.innerHTML;
    // cCard.innerHTML = lCard.innerHTML;
    // lCard.innerHTML = temp;

    cCard.style.left = '15%';
    cCard.style.transform = 'rotate(0deg)';
    rCard.style.left = '120%';
    lCard.style.left = '-100%';

    setTimeout(() => {
      toggleTrans(cCard);
      toggleTrans(lCard);
      toggleTrans(rCard);
    }, 50);
  } else {
    toggleTrans(cCard);
    toggleTrans(rCard);
    toggleTrans(lCard);

    cardIndexes[0] += 1;
    cardIndexes[1] += 1;
    cardIndexes[2] += 1;

    for (let i = 0; i < cardIndexes.length; i++) {
      if (cardIndexes[i] >= thumbs.length) {
        cardIndexes[i] = 0;
      } else if (cardIndexes[i] < 0) {
        cardIndexes[i] = thumbs.length - 1;
      } else {
        continue;
      }
    }

    lIndex = cardIndexes[0];
    cIndex = cardIndexes[1];
    rIndex = cardIndexes[2];

    lCard.firstElementChild.setAttribute('src', thumbs[lIndex].image);
    cCard.firstElementChild.setAttribute('src', thumbs[cIndex].image);
    rCard.firstElementChild.setAttribute('src', thumbs[rIndex].image);

    // const temp = cCard.innerHTML;
    // cCard.innerHTML = rCard.innerHTML;
    // rCard.innerHTML = temp;

    cCard.style.left = '15%';
    cCard.style.transform = 'rotate(0deg)';
    lCard.style.left = '-100%';
    rCard.style.left = '120%';

    setTimeout(() => {
      toggleTrans(cCard);
      toggleTrans(rCard);
      toggleTrans(lCard);
    }, 50);
  }
}

function toggleTrans(elem) {
  if (elem.classList.contains('trans')) {
    elem.classList.remove('trans');
  } else {
    elem.classList.add('trans');
  }
}
