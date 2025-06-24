const playPause = document.querySelector('.play-pause');
const switcher = document.querySelector('.switch');
const channel = document.querySelector('.channel');
const pause = '⏹';
const play = '▶';
const channels = [
  'https://youtu.be/0XxNhQSj6_I',
  'https://youtu.be/nEhKFxeE9fM',
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
  console.log(currentChannel);
});
