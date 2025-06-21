const reelLink = document.querySelector('.reel-link');
const reelImg = document.querySelector('.big-thumb');

const thumb = './styles/images/reel.png';
const thumBelow = './styles/images/reelNeg.png';

reelLink.addEventListener('mouseover', () => {
  reelImg.src = thumBelow;
});

reelLink.addEventListener('mouseout', () => {
  reelImg.src = thumb;
});
