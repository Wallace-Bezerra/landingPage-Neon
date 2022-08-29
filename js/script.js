const menu = document.querySelector('header');
const botaoMenu = document.querySelector('.btn-secondary');
const logo = document.querySelector("header .logo img");



function mudarMenu(event) {
  console.log(event.currentTarget);
  if (scrollY > 0) {
    botaoMenu.classList.remove('white');
    menu.classList.add('fixed');
    logo.src = "./img/logo-neon-color.svg";
  }
  else {
    botaoMenu.classList.add('white');
    menu.classList.remove('fixed');
    logo.src = "./img/logo-neon-white.svg";
  }

}
window.addEventListener('scroll', mudarMenu)

const produto = document.querySelector("[href='#produtos']");
const dropdown = document.querySelector(".dropdown");


produto.addEventListener('click', activeDropdown);
dropdown.addEventListener('mouseleave', activeDropdown);
function activeDropdown(event) {
  event.preventDefault();
  if (dropdown.classList.contains("ativo")) {
    dropdown.classList.remove("ativo");
    dropdown.style.overflow = "hidden";
  }
  else {
    dropdown.classList.add("ativo");
    setTimeout(() => {
      dropdown.style.overflow = "visible";
    }, 200);
  }
}