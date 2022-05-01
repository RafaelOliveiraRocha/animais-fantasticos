export default function iniciaAccordion() {
  const perguntaFaq = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = "ativo";
  function ativarAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (perguntaFaq.length) {
    perguntaFaq[0].classList.add(activeClass);
    perguntaFaq[0].nextElementSibling.classList.add(activeClass);
    perguntaFaq.forEach((pergunta) => {
      pergunta.addEventListener("click", ativarAccordion);
    });
  }
}
