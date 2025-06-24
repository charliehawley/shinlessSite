const playPause = document.querySelector('.play-pause');
const channel = document.querySelector('.channel');
const pause = '⏹';
// const pause = 'pause';
const play = '▶';
// const play = 'play';

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
