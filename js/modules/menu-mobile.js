export default function iniciaMenuMobile() {
  const botao = document.querySelector('[data-menu="button"]');
  const lista = document.querySelector('[data-menu="list"]');
  if (!botao || !lista) return;
  function definirAberto(aberto) {
    lista.classList.toggle("ativo", aberto);
    botao.classList.toggle("ativo", aberto);
    botao.setAttribute("aria-expanded", String(aberto));
  }
  botao.addEventListener("click", () => {
    definirAberto(botao.getAttribute("aria-expanded") !== "true");
  });
  lista.addEventListener("click", (event) => {
    if (event.target.closest('a[href^="#"]')) definirAberto(false);
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest('[data-modal="container"]')) return;
    if (!lista.contains(event.target) && !botao.contains(event.target)) definirAberto(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && botao.getAttribute("aria-expanded") === "true"
      && !document.querySelector('[data-modal="container"]').classList.contains("ativo")) {
      definirAberto(false);
      botao.focus();
    }
  });
}
