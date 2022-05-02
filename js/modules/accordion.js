export default class Accordion {
  constructor(list) {
    this.perguntaFaq = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(pergunta) {
    pergunta.classList.toggle(this.activeClass);
    pergunta.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona o evento aos accordion
  addAccordionEvent() {
    this.perguntaFaq.forEach((pergunta) => {
      pergunta.addEventListener("click", () => this.toggleAccordion(pergunta));
    });
  }

  // iniciar função
  init() {
    if (this.perguntaFaq.length) {
      // ativar primeiro item
      this.toggleAccordion(this.perguntaFaq[0]);
      this.addAccordionEvent();
    }
  }
}
