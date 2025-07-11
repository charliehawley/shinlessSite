window.onload = function () {
  const cCard = document.getElementById('cardCenter');
  const lCard = document.getElementById('cardLeft');
  const rCard = document.getElementById('cardRight');
  let offsetX = 0;
  const screenCenter = window.innerWidth / 2;

  cCard.addEventListener('touchstart', function (e) {
    const touchLocation = e.targetTouches[0];
    const cCardPos = cCard.getBoundingClientRect();
    offsetX = touchLocation.pageX - cCardPos.left;
  });

  cCard.addEventListener('touchmove', function (e) {
    const touchLocation = e.targetTouches[0];
    const newLeft = touchLocation.pageX - offsetX;

    const screenCenter = window.innerWidth / 2;
    const cardWidth = cCard.offsetWidth;
    const cardCenter = newLeft + cardWidth / 2;
    let centerOrigin = cardCenter - screenCenter;

    cCard.style.left = newLeft + 'px';
    cCard.style.transform = 'rotate(' + centerOrigin / 10 + 'deg)';
  });

  // DISAPPEAR
  cCard.addEventListener('touchend', function (e) {
    const cCardPos = cCard.getBoundingClientRect();
    const cCenter = (cCardPos.left + cCardPos.right) / 2;
    let centerOrigin = cardCenter - screenCenter;
    let xBoundL = screenCenter - screenCenter * 0.7;
    let xBoundR = screenCenter + screenCenter * 0.7;
    // swipe right
    if (cCenter > xBoundR) {
      console.log('right');
      cCard.style.left = 120 + '%';
      cCard.style.transform = 'rotate(' + centerOrigin / 10 + 'deg)';
      lCard.style.left = 15 + '%';
      lCard.style.transform = 'rotate(0deg)';
      // swipe left
    } else if (cCenter < xBoundL) {
      console.log('left');
      cCard.style.left = -100 + '%';
      cCard.style.transform = 'rotate(' + centerOrigin / 10 + 'deg)';
      rCard.style.left = 15 + '%';
      rCard.style.transform = 'rotate(0deg)';
      // snap back
    } else {
      console.log('snapped');
      cCard.style.left = 15 + '%';
      cCard.style.transform = 'rotate(0deg)';
    }
  });
};
