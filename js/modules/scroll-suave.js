export default function iniciaScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function lidarComItem(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // FORMA ALTERNATIVA
    //     const topo = section.offsetTop;
    //     window.scrollTo({
    //         top: topo,
    //         behavior: 'smooth',
    //     });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", lidarComItem);
  });
}
