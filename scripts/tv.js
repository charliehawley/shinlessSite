const tv = document.querySelector('.screen');
const standby = document.querySelector('#standby');
const indicator = document.querySelector('#indicator');
let channel = document.querySelector('.channel');
let muteText = document.querySelector('#mute-text');
const muter = document.querySelector('#mute');
const muteIcon = document.querySelector('#mute-icon');
const switcher = document.querySelector('#switch');
let muteCheck = 1;
let screenCheck = 0;
let buttonCheck = 0;
const chName = document.getElementById('ch-name');
const chDetails = document.getElementById('ch-details');
const chClone = document.getElementById('ch-details-clone');

const buttonOutTimeout = 200;

const sounds = [
  '../styles/sounds/btn1.mp3',
  '../styles/sounds/btn2.mp3',
  '../styles/sounds/btn3.mp3',
];

const channels = [
  {
    title: 'Peacebloom',
    artist: 'Aphty Khea',
    url: 'peacebloom.mp4',
    channel: '263 Moon FM',
    ytUrl: 'Ff5RUksxE-U',
  },
  {
    title: 'Symbiosis',
    artist: 'The Mantis Opera',
    url: 'symbiosis.mp4',
    channel: '254 Meltdown TV',
    ytUrl: '',
  },
  {
    title: 'Anode',
    artist: 'K. Leimer',
    url: 'anode.mp4',
    channel: '259 MLitBoG',
    ytUrl: 'gMJ1Aj4odh4',
  },
  {
    title: 'Attacked The Church',
    artist: 'Dear Earth',
    url: 'attackedTheChurch.mp4',
    channel: '256 Partyland',
    ytUrl: 'hZA3jw6UKv48',
  },
  {
    title: 'Blue Room',
    artist: 'Rafiki',
    url: 'blueRoom.mp4',
    channel: '251 Live Room',
    ytUrl: 'VN1VLjDaG_A',
  },
  {
    title: 'Dunne Luft',
    artist: 'K. Leimer',
    url: 'dunneLuft.mp4',
    channel: '258 Prozess fm',
    ytUrl: 'BJ_IeaUsPMI',
  },
  {
    title: 'Eucharis Told Me',
    artist: 'K. Leimer',
    url: 'eucharisToldMe.mp4',
    channel: '261 Wilderness',
    ytUrl: 'nEhKFxeE9fM',
  },
  {
    title: 'Fernsehen Im Fruling',
    artist: 'K. Leimer',
    url: 'fernsehen.mp4',
    channel: '260 HptBnHf',
    ytUrl: '2axY5mHRBWk',
  },
  {
    title: 'First Serve',
    artist: 'Rafiki',
    url: 'firstServe.mp4',
    channel: '253 Room Sound',
    ytUrl: 'EXqOYohC39A',
  },
  {
    title: 'Gem',
    artist: 'Oliver Say',
    url: 'gem.mp4',
    channel: '265 Bitrater',
    ytUrl: 'qHxNDLfxVUs',
  },
  {
    title: 'Get Along',
    artist: 'The Mantis Opera',
    url: 'getAlong.mp4',
    channel: '255 Meltdown TV+',
    ytUrl: '0XxNhQSj6_I',
  },
  {
    title: 'Im Still',
    artist: 'Oliver Say',
    url: 'imStill.mp4',
    channel: '264 The Void',
    ytUrl: 'zyP0xPS1ydI',
  },
  {
    title: 'Interlude/Microcube',
    artist: 'Rafiki',
    url: 'interlude.mp4',
    channel: '252 Front Seat',
    ytUrl: '4Tmbh7vPDyg',
  },
  {
    title: 'Lilac Moor Pt.1',
    artist: 'The Gardener',
    url: 'lilacMoor.mp4',
    channel: '262 Wilderness XL',
    ytUrl: 'hQPM5yd1p8c',
  },
  {
    title: 'Nerve',
    artist: 'Gillbanks',
    url: 'nerve.mp4',
    channel: '266 Gurrung!',
    ytUrl: 'JfpDMEJoIcE',
  },
  {
    title: 'Prisma Ltd.',
    artist: 'Rouge Mechanique',
    url: 'prismaLtd.mp4',
    channel: '257 IDMfm',
    ytUrl: '10GLMn0CieM',
  },
  {
    title: 'Something Blinds Me',
    artist: 'Zee Town and the Dog Boys',
    url: 'somethingBlindsMe.mp4',
    channel: '267 PostWorld',
    ytUrl: '2AhufjhhK80',
  },
  {
    title: 'Without A Sound',
    artist: 'Le Son',
    url: 'withoutASound.mp4',
    channel: '250 Top 100',
    ytUrl: 'NBICGVAZgx8',
  },
];

// HIDE/UNHIDE VIDEO ON CLICK -----------
standby.addEventListener('click', () => {
  screenToggle();
  if (muteCheck == 1) {
    return;
  } else {
    muteToggle();
  }
});

// MUTE EVENT ------------------------
muter.addEventListener('click', () => {
  new Audio(sounds[Math.floor(Math.random() * 3)]).play();
  muteToggle();
  buttonPress(muter);
  setTimeout(() => {
    buttonPress(muter);
  }, buttonOutTimeout);
});

// SWITCH EVENT ------------------------
switcher.addEventListener('click', () => {
  new Audio(sounds[Math.floor(Math.random() * 3)]).play();
  buttonPress(switcher);
  setTimeout(() => {
    buttonPress(switcher);
  }, buttonOutTimeout);
  switchChannel();
});

// FUNCTIONS -------------------------
function screenToggle() {
  if (screenCheck == 0) {
    screenCheck = 1;
    new Audio('../styles/sounds/tv-on.mp3').play();
    setTimeout(() => {
      indicator.classList.remove('indi-off');
      indicator.classList.add('indi-on');
    }, 750);
    buttonPress(standby);
    setTimeout(() => {
      buttonPress(standby);
    }, buttonOutTimeout);
    setTimeout(() => {
      let currentChannel =
        channels[Math.floor(Math.random() * channels.length)];
      let trim = Math.floor(Math.random() * 120);
      channel.setAttribute(
        'src',
        './styles/videos/channels/' + currentChannel.url + '#t=' + trim
      );
      chName.innerText = currentChannel.channel;
      chDetails.innerText =
        currentChannel.artist + ' - ' + currentChannel.title;
      chClone.innerText = currentChannel.artist + ' - ' + currentChannel.title;
      channel.classList.remove('hide');
    }, 750);
  } else {
    screenCheck = 0;
    indicator.classList.add('indi-off');
    indicator.classList.remove('indi-on');
    channel.classList.add('hide');
    channel.setAttribute('src', '');
    new Audio('../styles/sounds/tv-off.mp3').play();
    buttonPress(standby);
    setTimeout(() => {
      buttonPress(standby);
    }, buttonOutTimeout);
    chName.innerText = '';
    chDetails.innerText = '';
    chClone.innerText = '';
  }
}

function muteToggle() {
  if (muteCheck == 1) {
    channel.muted = false;
    muteCheck = 0;
    muteIcon.classList.add('hide');
  } else {
    channel.muted = true;
    muteCheck = 1;
    muteIcon.classList.remove('hide');
  }
}

function switchChannel(button) {
  let currentChannel = channels[Math.floor(Math.random() * channels.length)];
  let trim = Math.floor(Math.random() * 120);
  channel.setAttribute(
    'src',
    './styles/videos/channels/' + currentChannel.url + '#t=' + trim
  );
  chName.innerText = currentChannel.channel;
  chDetails.innerText = currentChannel.artist + ' - ' + currentChannel.title;
  chClone.innerText = currentChannel.artist + ' - ' + currentChannel.title;
}

function buttonPress(button) {
  if (buttonCheck == 0) {
    buttonCheck = 1;
    button.classList.add('button-press');
  } else {
    buttonCheck = 0;
    button.classList.remove('button-press');
  }
}

screenToggle();

// const ytid = [
//   '0XxNhQSj6_I',
//   'nEhKFxeE9fM',
//   '2axY5mHRBWk',
//   '10GLMn0CieM',
//   'hQPM5yd1p8c',
//   'AmmPHHYpfTY',
//   'TMacoNki7Rg',
//   'NBICGVAZgx8',
//   'JfpDMEJoIcE',
//   'zyP0xPS1ydI',
//   '2AhufjhhK80',
//   'Hiiq9S0aW1w',
//   'Ff5RUksxE-U',
//   'VN1VLjDaG_A',
//   '4Tmbh7vPDyg',
//   'EXqOYohC39A',
//   'TtXuT02jfdU',
// ];

// const sky = [
//   'peacebloom.mp4',
//   'symbiosis.mp4',
//   'anode.mp4',
//   'attackedTheChurch.mp4',
//   'blueRoom.mp4',
//   'dunneLuft.mp4',
//   'eucharisToldMe.mp4',
//   'fernsehen.mp4',
//   'firstServe.mp4',
//   'gem.mp4',
//   'getAlong.mp4',
//   'imStill.mp4',
//   'interlude.mp4',
//   'lilacMoor.mp4',
//   'nerve.mp4',
//   'prismaLtd.mp4',
//   'somethingBlindsMe.mp4',
//   'withoutASound.mp4',
// ];
