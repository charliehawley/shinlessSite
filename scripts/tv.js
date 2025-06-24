const playPause = document.querySelector('.play-pause');
const switcher = document.querySelector('.switch');
const channel = document.querySelector('.channel');
const pause = '⏹';
const play = '▶';
const channels = [
  'https://www.youtube.com/embed/0XxNhQSj6_I?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=0XxNhQSj6_I',
  'https://www.youtube.com/embed/nEhKFxeE9fM?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=nEhKFxeE9fM',
  'https://www.youtube.com/embed/2axY5mHRBWk?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=2axY5mHRBWk',
  'https://www.youtube.com/embed/10GLMn0CieM?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=10GLMn0CieM',
  'https://www.youtube.com/embed/ZA3jw6UKv48?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=ZA3jw6UKv48',
  'https://www.youtube.com/embed/hQPM5yd1p8c?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=hQPM5yd1p8c',
  'https://www.youtube.com/embed/AmmPHHYpfTY?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=AmmPHHYpfTY',
  'https://www.youtube.com/embed/TMacoNki7Rg?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=TMacoNki7Rg',
  'https://www.youtube.com/embed/NBICGVAZgx8?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=NBICGVAZgx8',
  'https://www.youtube.com/embed/JfpDMEJoIcE?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=JfpDMEJoIcE',
  'https://www.youtube.com/embed/zyP0xPS1ydI?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=zyP0xPS1ydI',
  'https://www.youtube.com/embed/2AhufjhhK80?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=2AhufjhhK80',
  'https://www.youtube.com/embed/Hiiq9S0aW1w?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=Hiiq9S0aW1w',
];

document.addEventListener('DOMContentLoaded', (event) => {
  let currentChannel = Math.floor(Math.random() * channels.length);
  channel.setAttribute('src', channels[currentChannel]);
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
  channel.setAttribute('src', channels[currentChannel]);
});
