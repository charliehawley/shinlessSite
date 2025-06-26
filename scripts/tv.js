const tv = document.querySelector('.screen');
const standby = document.querySelector('#standby');
const indicator = document.querySelector('#indicator');
const switcher = document.querySelector('.switch');
let channel = document.querySelector('.channel');
let muteText = document.querySelector('#mute-text');
const muter = document.querySelector('#mute-toggle');
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
  if (indicator.classList.contains('indi-off')) {
    indicator.classList.add('indi-on');
    indicator.classList.remove('indi-off');
    let currentChannel = Math.floor(Math.random() * channels.length);
    channel.setAttribute(
      'src',
      './styles/videos/channels/' + channels[currentChannel]
    );
    channel.classList.remove('hide');
  } else {
    indicator.classList.add('indi-off');
    indicator.classList.remove('indi-on');
    channel.classList.add('hide');
    let currentChannel = Math.floor(Math.random() * channels.length);
    channel.setAttribute('src', '');
  }
});

// MUTE ------------------------
muter.addEventListener('click', () => {
  console.log('mute clicked');
  if (muter.innerText == 'toggle_on') {
    channel.muted = false;
    muter.innerText = 'toggle_off';
  } else {
    channel.muted = true;
    muter.innerText = 'toggle_on';
  }
});
