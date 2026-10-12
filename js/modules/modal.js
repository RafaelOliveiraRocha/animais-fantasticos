export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.teclado = this.teclado.bind(this);
  }

  abrir() {
    this.focoAnterior = document.activeElement;
    this.containerModal.hidden = false;
    this.containerModal.classList.add("ativo");
    this.pagina = document.querySelector(".grid-container");
    this.inertAnterior = this.pagina.inert;
    this.pagina.inert = true;
    this.overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", this.teclado);
    this.botaoFechar.focus();
  }

  fechar() {
    this.containerModal.classList.remove("ativo");
    this.containerModal.hidden = true;
    this.pagina.inert = this.inertAnterior;
    document.body.style.overflow = this.overflowAnterior;
    document.removeEventListener("keydown", this.teclado);
    this.focoAnterior.focus();
  }

  teclado(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.fechar();
    } else if (event.key === "Tab") {
      // O modal informativo possui um único controle: fechar.
      event.preventDefault();
      this.botaoFechar.focus();
    }
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.botaoAbrir.addEventListener("click", () => this.abrir());
      this.botaoFechar.addEventListener("click", () => this.fechar());
      this.containerModal.addEventListener("click", (event) => {
        if (event.target === this.containerModal) this.fechar();
      });
    }
    return this;
  }
}
