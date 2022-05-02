export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto das classes aos callbacks
    this.iniciaMouseLeave = this.iniciaMouseLeave.bind(this);
    this.iniciaMouseMove = this.iniciaMouseMove.bind(this);
    this.ativaMouseOver = this.ativaMouseOver.bind(this);
  }

  // move a tooltip com base nos seus estilos de acordo com a posição do mouse
  iniciaMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 130}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltip e os eventos de mousemove e mouseleave
  iniciaMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener(
      "mouseleave",
      this.iniciaMouseLeave
    );
    event.currentTarget.removeEventListener("mousemove", this.iniciaMouseMove);
  }

  // cria a tooltip box e adiciona no body
  criarTooltipsBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // cria a tooltip e eadiciona os eventos de mousemove e mouseleave ao target
  ativaMouseOver(event) {
    // cria a tooltip box e coloca em uma propriedade
    this.criarTooltipsBox(event.currentTarget);
    event.currentTarget.addEventListener("mousemove", this.iniciaMouseMove);
    event.currentTarget.addEventListener("mouseleave", this.iniciaMouseLeave);
  }

  // adiciona o evento de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.ativaMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
