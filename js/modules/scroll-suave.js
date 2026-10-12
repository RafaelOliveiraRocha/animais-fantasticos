export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }

    this.lidarComItem = this.lidarComItem.bind(this);
  }

  lidarComItem(event) {
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    if (section) {
      event.preventDefault();
      section.scrollIntoView({
        ...this.options,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto" : this.options.behavior,
      });
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
    }
  }

  addLinkEvent() {
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", this.lidarComItem);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
