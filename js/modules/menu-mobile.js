import outsideClick from "./outside-click.js";

export default function iniciaMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function abrirMenu() {
    menuList.classList.add("ativo");
    menuButton.classList.add("ativo");
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    });
  }
  if (menuButton) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, abrirMenu);
    });
  }
}
