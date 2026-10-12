export default async function fetchBitcoin(url, target) {
  const preco = document.querySelector(target);
  if (!preco) return;
  try {
    const resposta = await fetch(url);
    if (!resposta.ok) throw new Error("Cotação indisponível");
    const json = await resposta.json();
    if (!json.BRL || !Number.isFinite(json.BRL.sell) || json.BRL.sell <= 0) {
      throw new Error("Cotação inválida");
    }
    preco.textContent = (100 / json.BRL.sell).toFixed(4);
  } catch (erro) {
    preco.textContent = "cotação indisponível";
  }
}
