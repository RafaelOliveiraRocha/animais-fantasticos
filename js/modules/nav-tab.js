export default function iniciaNavTab() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabConteudo = document.querySelectorAll(
    '[data-tab="conteudo"] section'
  );
  function ativarTab(index) {
    tabConteudo.forEach((conteudo) => {
      conteudo.classList.remove("ativo");
    });
    const animacao = tabConteudo[index].dataset.anime;
    tabConteudo[index].classList.add("ativo", animacao);
  }
  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add("ativo");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  }
}
