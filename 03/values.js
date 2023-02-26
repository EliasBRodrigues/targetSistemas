function adressURL(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

let data = adressURL("./doc.json");
let days = JSON.parse(data);

function calcularMediaMensal() {
  let allDays = 0;
  let mediaMensal = 0;
  let totalValorMensal = 0;
  days.forEach((element) => {
    if (element.valor != 0) {
      totalValorMensal = totalValorMensal + element.valor;
      allDays = allDays + 1;
    }
  });
  mediaMensal = totalValorMensal / allDays;
  return mediaMensal;
}

function maiorMediaMensal() {
  let mediaMensal = calcularMediaMensal();
  let maiorMediaMensalText = document.getElementById("maiorMediaMensal");
  let maiorMediaMensal = 0;
  days.forEach((element) => {
    if (element.valor > mediaMensal) {
      maiorMediaMensal += 1;
    }
  });

  maiorMediaMensalText.innerHTML = maiorMediaMensal;
}

function maiorFaturamentoDoMes() {
  let maiorFaturamento = 0;
  let maiorFaturamentoText = document.getElementById("maiorFaturamentoDoMes");
  days.forEach((element) => {
    if (element.valor > maiorFaturamento) {
      maiorFaturamento = element.valor;
    }
  });

  maiorFaturamentoText.innerHTML = maiorFaturamento;
}

function menorFaturamentoDoMes() {
  let menorFaturamento;
  let menorFaturamentoText = document.getElementById("menorFaturamentoDoMes");
  days.forEach((element) => {
    if (element.dia == 1) {
      menorFaturamento = element.valor;
    } else {
      if ((element.valor < menorFaturamento) & (element.valor != 0)) {
        menorFaturamento = element.valor;
      }
    }
  });

  menorFaturamentoText.innerHTML = menorFaturamento;
}
