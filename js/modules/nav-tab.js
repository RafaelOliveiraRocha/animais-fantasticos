export default class TabNav {
  constructor(menu, conteudo) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabConteudo = document.querySelectorAll(conteudo);
    this.activeClass = "ativo";
  }

  // ativa a tab de acordo com o index da mesma
  ativarTab(index) {
    this.tabConteudo.forEach((conteudo) => {
      conteudo.classList.remove(this.activeClass);
    });
    const animacao = this.tabConteudo[index].dataset.anime;
    this.tabConteudo[index].classList.add(this.activeClass, animacao);
  }

  // adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.ativarTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabConteudo.length) {
      // ativar o primeiro item
      this.ativarTab(0);
      this.addTabNavEvent();
    }
  }
}
