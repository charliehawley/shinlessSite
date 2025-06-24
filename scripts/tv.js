const playPause = document.querySelector('.play-pause');
const switcher = document.querySelector('.switch');
const channel = document.querySelector('.channel');
const pause = '⏹';
const play = '▶';
const channels = [
  '0XxNhQSj6_I',
  'nEhKFxeE9fM',
  '2axY5mHRBWk',
  '10GLMn0CieM',
  'hQPM5yd1p8c',
  'AmmPHHYpfTY',
  'TMacoNki7Rg',
  'NBICGVAZgx8',
  'JfpDMEJoIcE',
  'zyP0xPS1ydI',
  '2AhufjhhK80',
  'Hiiq9S0aW1w',
];

document.addEventListener('DOMContentLoaded', (event) => {
  let currentChannel = Math.floor(Math.random() * channels.length);
  channel.setAttribute(
    'src',
    'https://www.youtube.com/embed/' +
      channels[currentChannel] +
      '?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=' +
      channels[currentChannel] +
      '&mute=1'
  );
});

playPause.addEventListener('click', () => {
  if (playPause.innerText == play) {
    console.log('playing');
    playPause.innerText = pause;
    channel.classList.remove('hide');
  } else {
    console.log('pausing');
    playPause.innerText = play;
    channel.classList.add('hide');
  }
});

switcher.addEventListener('click', () => {
  let currentChannel = Math.floor(Math.random() * channels.length);
  channel.setAttribute(
    'src',
    'https://www.youtube.com/embed/' +
      channels[currentChannel] +
      '?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=' +
      channels[currentChannel] +
      '&mute=1'
  );
  console.log(channels[currentChannel]);
});
