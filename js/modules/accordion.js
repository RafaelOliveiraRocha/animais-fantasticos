export default class Accordion {
  constructor(list) {
    this.perguntaFaq = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(pergunta) {
    const aberta = pergunta.classList.toggle(this.activeClass);
    pergunta.querySelector("button").setAttribute("aria-expanded", String(aberta));
    pergunta.nextElementSibling.classList.toggle(this.activeClass, aberta);
    pergunta.nextElementSibling.hidden = !aberta;
  }

  // adiciona o evento aos accordion
  addAccordionEvent() {
    this.perguntaFaq.forEach((pergunta) => {
      pergunta.querySelector("button").addEventListener("click", () => this.toggleAccordion(pergunta));
    });
  }

  // iniciar função
  init() {
    if (this.perguntaFaq.length) {
      this.perguntaFaq.forEach((pergunta) => {
        pergunta.nextElementSibling.hidden = true;
      });
      // ativar primeiro item
      this.toggleAccordion(this.perguntaFaq[0]);
      this.addAccordionEvent();
    }
  }
}
