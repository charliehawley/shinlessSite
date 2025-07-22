const cCard = document.getElementById('cardCenter');
const lCard = document.getElementById('cardLeft');
const rCard = document.getElementById('cardRight');

let artist = document.getElementById('artist');
let title = document.getElementById('title');
let detailLink = document.getElementById('detailLink');

const thumbs = [
  {
    title: 'Anode',
    image: './styles/images/music-thumbs/anode.png',
    artist: 'K. Leimer',
    url: 'gMJ1Aj4odh4',
  },
  {
    title: 'Attacked The Church',
    image: './styles/images/music-thumbs/atc.png',
    artist: 'Dear Earth',
    url: 'ZA3jw6UKv48',
  },
  {
    title: 'Blue Room',
    image: './styles/images/music-thumbs/blue-room.png',
    artist: 'Rafiki',
    url: 'VN1VLjDaG_A',
  },
  {
    title: 'Dunne Luft',
    image: './styles/images/music-thumbs/dunne-luft.png',
    artist: 'K. Leimer',
    url: 'BJ_IeaUsPMI',
  },
  {
    title: 'Eucharis Told Me',
    image: './styles/images/music-thumbs/eucharis.png',
    artist: 'K. Leimer',
    url: 'nEhKFxeE9fM',
  },
  {
    title: 'Fernsehen im Fruhling',
    image: './styles/images/music-thumbs/fernsehen.png',
    artist: 'K. Leimer',
    url: '2axY5mHRBWk',
  },
  {
    title: 'First Serve',
    image: './styles/images/music-thumbs/first-serve.png',
    artist: 'Rafiki',
    url: 'EXqOYohC39A',
  },
  {
    title: 'Gem',
    image: './styles/images/music-thumbs/gem.png',
    artist: 'Oliver Say',
    url: 'qHxNDLfxVUs',
  },
  {
    title: 'Get Along',
    image: './styles/images/music-thumbs/get-along.png',
    artist: 'The Mantis Opera',
    url: '0XxNhQSj6_I',
  },
  {
    title: 'Interlude / Microcube',
    image: './styles/images/music-thumbs/interlude.png',
    artist: 'Rafiki',
    url: '4Tmbh7vPDyg',
  },
  {
    title: 'Lilac Moor',
    image: './styles/images/music-thumbs/lilac-moor.png',
    artist: 'The Gardener',
    url: 'hQPM5yd1p8c',
  },
  {
    title: 'Nerve',
    image: './styles/images/music-thumbs/nerve.png',
    artist: 'Gillbanks',
    url: 'JfpDMEJoIcE',
  },
  {
    title: 'Peacebloom',
    image: './styles/images/music-thumbs/peacebloom.png',
    artist: 'Aphty Khea',
    url: 'Ff5RUksxE',
  },
  {
    title: 'Prisma Ltd.',
    image: './styles/images/music-thumbs/prisma.png',
    artist: 'Rouge Mecanique',
    url: '10GLMn0CieM',
  },
  {
    title: 'SBM',
    image: './styles/images/music-thumbs/sbm.png',
    artist: 'Zee Town and the Dog Boys',
    url: '2AhufjhhK80',
  },
  {
    title: 'Symbiosis',
    image: './styles/images/music-thumbs/symbiosis.png',
    artist: 'The Mantis Opera',
    url: 'TMacoNki7Rg',
  },
  {
    title: 'Without A Sound',
    image: './styles/images/music-thumbs/was.png',
    artist: 'Le Son',
    url: 'NBICGVAZgx8',
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
artist.innerText = thumbs[cIndex].artist;
title.innerText = thumbs[cIndex].title;
detailLink.setAttribute('href', 'https://youtu.be/' + thumbs[cIndex].url);

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

    const xBoundL = screenCenter - screenCenter * 0.6;
    const xBoundR = screenCenter + screenCenter * 0.6;

    isSwiping = true;

    if (cCenter > xBoundR) {
      cCard.style.left = '120%';
      cCard.style.transform = `rotate(${centerOrigin / 10}deg)`;

      lCard.style.left = 15 / 2 + '%';
      lCard.style.transform = 'rotate(0deg)';

      setTimeout(() => {
        swapCards('left');
        isSwiping = false;
      }, 200);
    } else if (cCenter < xBoundL) {
      cCard.style.left = '-100%';
      cCard.style.transform = `rotate(${centerOrigin / 10}deg)`;

      rCard.style.left = 15 / 2 + '%';
      rCard.style.transform = 'rotate(0deg)';

      setTimeout(() => {
        swapCards('right');
        isSwiping = false;
      }, 200);
    } else {
      cCard.style.left = 15 / 2 + '%';
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

    detailLink.setAttribute('href', 'https://youtu.be/' + thumbs[cIndex].url);
    cCard.setAttribute('href', 'https://youtu.be/' + thumbs[cIndex].url);
    artist.innerText = thumbs[cIndex].artist;
    title.innerText = thumbs[cIndex].title;

    cCard.style.left = 15 / 2 + '%';
    cCard.style.transform = 'rotate(0deg)';
    rCard.style.left = '150%';
    rCard.style.transform = 'rotate(50deg)';
    lCard.style.left = '-150%';
    lCard.style.transform = 'rotate(-50deg)';

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

    detailLink.setAttribute('href', 'https://youtu.be/' + thumbs[cIndex].url);
    cCard.setAttribute('href', 'https://youtu.be/' + thumbs[cIndex].url);
    artist.innerText = thumbs[cIndex].artist;
    title.innerText = thumbs[cIndex].title;

    cCard.style.left = 15 / 2 + '%';
    cCard.style.transform = 'rotate(0deg)';
    rCard.style.left = '150%';
    rCard.style.transform = 'rotate(50deg)';
    lCard.style.left = '-150%';
    lCard.style.transform = 'rotate(-50deg)';

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
