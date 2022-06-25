const menu = document.querySelector('header');
const botaoMenu = document.querySelector('.btn-secondary');
const logo = document.querySelector("header .logo img");
console.log(logo);


function mudarMenu(event) {
  console.log(event.currentTarget);
  if (scrollY > 0) {
    botaoMenu.classList.remove('white');
    menu.classList.add('fixed');
    logo.src = "../img/logo-neon-color.svg";
  }
  else {
    botaoMenu.classList.add('white');
    menu.classList.remove('fixed');
    logo.src = "../img/logo-neon-white.svg";
  }

}

window.addEventListener('scroll', mudarMenu)
// console.log(menu);