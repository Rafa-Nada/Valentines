const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const gifContainer = document.getElementById('gif-container');
const arrowContainer = document.querySelector('.arrow-container');

// Make "No" button run away
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
noBtn.addEventListener('mouseover', moveNoButton);

// Launch arrows/hearts
function launchProjectile() {
  const type = Math.random() > 0.5 ? 'arrow' : 'heart';
  const projectile = document.createElement('div');
  projectile.classList.add(type);

  projectile.style.left = Math.random() * window.innerWidth + 'px';
  projectile.style.top = (window.innerHeight - 100) + 'px';

  arrowContainer.appendChild(projectile);

  setTimeout(() => {
    projectile.remove();
  }, 3000);
}

// Yes button click
yesBtn.addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
  gifContainer.style.display = 'flex';
  document.querySelector('.cupid-container').style.display = 'block';
  arrowContainer.style.display = 'block';

  // Launch arrows/hearts every 2 seconds
  setInterval(launchProjectile, 2000);
});

