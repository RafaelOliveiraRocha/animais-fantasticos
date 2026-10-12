import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  checkDistance() {
    this.sections.forEach((section) => {
      const visivel = this.movimentoReduzido.matches
        || section.getBoundingClientRect().top < window.innerHeight * 0.6;
      section.classList.toggle("ativo", visivel);
    });
  }

  init() {
    if (this.sections.length) {
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance, { passive: true });
      window.addEventListener("resize", this.checkDistance);
      this.movimentoReduzido.addEventListener("change", this.checkDistance);
    }
    return this;
  }
}
