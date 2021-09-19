const openBurgerMenu = document.getElementById('open-burger-menu');
const closeBurgerMenu = document.getElementById('close-burger-menu');
const menu = document.getElementById('menu');

function showMenu () {
  openBurgerMenu.classList.add('hide-btn');
  menu.classList.add('show');
  closeBurgerMenu.classList.add('show-btn');
}

function closeMenu () {
  closeBurgerMenu.classList.remove('show-btn');
  openBurgerMenu.classList.remove('hide-btn');
  menu.classList.remove('show');
}

openBurgerMenu.addEventListener('click', showMenu);
closeBurgerMenu.addEventListener('click', closeMenu);

console.log("Oценка - 140 баллов, нет видеорезюме и нет изображения-ссылки проектов, все остальные пункты выполнены  PS: Code example - это ссылка на github") 
 
 
  
  