export default function iniciaMenuDropDown() {
  document.querySelectorAll("[data-dropdown]").forEach((menu) => {
    const botao = menu.querySelector("[data-dropdown-sob]");
    let abertoPorHover = false;
    function definirAberto(aberto) {
      menu.classList.toggle("ativa", aberto);
      botao.setAttribute("aria-expanded", String(aberto));
    }
    botao.addEventListener("click", () => {
      if (abertoPorHover) {
        abertoPorHover = false;
        return;
      }
      definirAberto(botao.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("mouseenter", () => {
      definirAberto(true);
      abertoPorHover = true;
    });
    menu.addEventListener("mouseleave", () => {
      abertoPorHover = false;
      if (!menu.contains(document.activeElement)) definirAberto(false);
    });
    menu.addEventListener("focusout", (event) => {
      if (!menu.contains(event.relatedTarget)) definirAberto(false);
    });
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) definirAberto(false);
    });
    menu.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && botao.getAttribute("aria-expanded") === "true") {
        event.stopPropagation();
        definirAberto(false);
        botao.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target)) definirAberto(false);
    });
  });
}
