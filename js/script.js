const menu = document.querySelector('header');
const botaoMenu = document.querySelector('.btn-secondary');
const logo = document.querySelector("header .logo img");

function mudarMenu(event) {
  console.log(event.currentTarget);
  if (scrollY > 80) {
    botaoMenu.classList.remove('white');
    menu.classList.add('fixed');
    logo.src = "./Img/logo-neon-color.svg";
  }
  else {
    botaoMenu.classList.add('white');
    menu.classList.remove('fixed');
    logo.src = "./Img/logo-neon-white.svg";
  }

}
window.addEventListener('scroll', mudarMenu)

const produto = document.querySelector("[href='#produtos']");
const dropdown = document.querySelector(".dropdown");

//dropdown
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

//menu-mobile

const menuMobile = document.querySelector(".btn-mobile");
const overlayMobile = document.querySelector(".overlay-mobile");
const teste = document.querySelector(".menu-mobile");

menuMobile.addEventListener("click", ativarOverlay,);

function ativarOverlay() {
  overlayMobile.classList.toggle("ativo");
  console.log("wallace");
}

overlayMobile.addEventListener('click', (event) => {
  // if (event.target === event.currentTarget) {
  //   overlayMobile.classList.remove("ativo");
  // }
  // event.stopPropagation();
  // event.preventDefault();
  overlayMobile.classList.remove("ativo");
  console.log("overlay teste");
}, {
  capture: false
});

teste.addEventListener("click", (event) => {
  event.stopPropagation();
  // console.log(event);
  console.log("menu-mobile");
})
