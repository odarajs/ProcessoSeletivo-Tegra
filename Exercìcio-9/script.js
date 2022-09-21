function calcular(dura, horas, min, seg, result) {
  dura = Math.abs(document.querySelector("#dru").value);
  horas = Math.floor(dura / 3600);
  min = Math.floor((dura % 3600) / 60);
  seg = Math.floor((dura % 3600) % 60);

  result = document.querySelector(
    "#result-total"
  ).innerHTML = `Digite a duração em segundos: ${dura}<br>\
    ${horas}:${min}:${seg}\n\n
    `;
}
