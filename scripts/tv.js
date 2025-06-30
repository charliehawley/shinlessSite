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

const buttonOutTimeout = 200;

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

const sounds = [
  '../styles/sounds/btn1.mp3',
  '../styles/sounds/btn2.mp3',
  '../styles/sounds/btn3.mp3',
];

const channels = [
  'peacebloom.mp4',
  'symbiosis.mp4',
  'anode.mp4',
  'attackedTheChurch.mp4',
  'blueRoom.mp4',
  'dunneLuft.mp4',
  'eucharisToldMe.mp4',
  'fernsehen.mp4',
  'firstServe.mp4',
  'gem.mp4',
  'getAlong.mp4',
  'imStill.mp4',
  'interlude.mp4',
  'lilacMoor.mp4',
  'nerve.mp4',
  'prismaLtd.mp4',
  'somethingBlindsMe.mp4',
  'withoutASound.mp4',
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
      let currentChannel = Math.floor(Math.random() * channels.length);
      let trim = Math.floor(Math.random() * 120);
      channel.setAttribute(
        'src',
        './styles/videos/channels/' + channels[currentChannel] + '#t=' + trim
      );
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
  let currentChannel = Math.floor(Math.random() * channels.length);
  let trim = Math.floor(Math.random() * 120);
  channel.setAttribute(
    'src',
    './styles/videos/channels/' + channels[currentChannel] + '#t=' + trim
  );
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
