export default function iniciaFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioDeServico = funcionamento.dataset.horario.split(",").map(Number);

  const agora = new Date();
  const hoje = agora.getDay();
  const horaAgora = agora.getHours();

  const diaQueFunciona = diasSemana.indexOf(hoje) !== -1;
  const horarioAberto =
    horaAgora >= horarioDeServico[0] && horaAgora < horarioDeServico[1];

  if (diaQueFunciona && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
