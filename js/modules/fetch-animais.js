import iniciaAnimaNumeros from "./anima-numeros.js";

export default function iniciaFetchAnimais() {
  function criarAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.animal}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJson.map((animal) => {
        const divAnimal = criarAnimal(animal);
        return numerosGrid.appendChild(divAnimal);
      });
      iniciaAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimais("./animaisapi.json");
}
