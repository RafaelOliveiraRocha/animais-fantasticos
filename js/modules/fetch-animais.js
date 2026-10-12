import AnimaNumeros from "./anima-numeros.js";

export default async function fetchAnimais(url, target) {
  const grid = document.querySelector(target);
  const status = document.querySelector(".status-numeros");
  if (!grid || !status) return;
  grid.replaceChildren();
  status.textContent = "Carregando números…";
  try {
    const resposta = await fetch(url);
    if (!resposta.ok) throw new Error("Arquivo indisponível");
    const animais = await resposta.json();
    if (!Array.isArray(animais) || animais.some((animal) => (
      !animal || typeof animal.animal !== "string" || !animal.animal.trim()
      || !Number.isInteger(animal.total) || animal.total < 0
    ))) throw new Error("Formato inválido");
    animais.forEach((animal) => {
      const div = document.createElement("div");
      div.classList.add("numero-animal");
      const titulo = document.createElement("h3");
      titulo.textContent = animal.animal;
      const total = document.createElement("span");
      total.setAttribute("data-numero", "");
      total.textContent = animal.total;
      div.append(titulo, total);
      grid.appendChild(div);
    });
    status.textContent = animais.length ? "" : "Nenhum número disponível no arquivo.";
    new AnimaNumeros("[data-numero]", ".numeros", "ativo").init();
  } catch (erro) {
    grid.replaceChildren();
    status.textContent = "Não foi possível carregar os números. As outras seções continuam disponíveis.";
  }
}
