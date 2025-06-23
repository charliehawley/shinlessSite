const playPause = document.querySelector('.play-pause');
const pause = '⏹';
// const pause = 'pause';
const play = '▶';
// const play = 'play';

playPause.addEventListener('click', () => {
  if (playPause.innerText == play) {
    console.log('playing');
    playPause.innerText = pause;
  } else {
    console.log('pausing');
    playPause.innerText = play;
  }
});
