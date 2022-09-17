const hamburgerBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const bodyOverlay = document.querySelector('body');
const mockup =document.querySelector('.mockups');

hamburgerBtn.addEventListener('click', () => {
  if(hamburgerBtn.classList.contains('show')) {
      hamburgerBtn.classList.remove('show');
      menu.classList.remove('show');
      bodyOverlay.classList.remove('show');
      mockup.classList.remove('show');
    } else {
      hamburgerBtn.classList.add('show');
      bodyOverlay.classList.add('show');
      mockup.classList.add('show');
      menu.classList.add('show');
    }
});


