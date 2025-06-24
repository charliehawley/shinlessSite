const playPause = document.querySelector('.play-pause');
const switcher = document.querySelector('.switch');
const channel = document.querySelector('.channel');
const pause = '⏹';
const play = '▶';
const channels = [
  'https://www.youtube.com/embed/0XxNhQSj6_I?autoplay=1&loop=1&rel=0&showinfo=0&playlist=0XxNhQSj6_I',
  'https://www.youtube.com/embed/nEhKFxeE9fM?autoplay=1&loop=1&rel=0&showinfo=0&playlist=nEhKFxeE9fM',
];

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
