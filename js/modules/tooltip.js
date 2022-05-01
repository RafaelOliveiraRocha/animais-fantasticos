export default function iniciaTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const iniciaMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const iniciaMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", iniciaMouseLeave);
      this.element.removeEventListener("mousemove", iniciaMouseMove);
    },
  };
  function criarTooltipsBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  function ativaMouseOver() {
    const tooltipBox = criarTooltipsBox(this);

    iniciaMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", iniciaMouseMove);

    iniciaMouseLeave.tooltipBox = tooltipBox;
    iniciaMouseLeave.element = this;
    this.addEventListener("mouseleave", iniciaMouseLeave);
  }
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", ativaMouseOver);
  });
}
