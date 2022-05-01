export default function iniciaAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowSessenta = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const VisibilidadeDeSecao = sectionTop - windowSessenta < 0;
      if (VisibilidadeDeSecao) section.classList.add("ativo");
      else section.classList.remove("ativo");
    });
  }
  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
