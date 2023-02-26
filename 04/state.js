const valueSP = 67836.43;
const valueRJ = 36678.66;
const valueMG = 29229.88;
const valueES = 27165.48;
const valueOther = 19849.53;

valueAll = (valueSP + valueRJ + valueMG + valueES + valueOther);

percentSP = (valueSP / valueAll) * 100;
percentRJ = (valueRJ / valueAll) * 100;
percentMG = (valueMG / valueAll) * 100;
percentES = (valueES / valueAll) * 100;
percentOther = (valueOther / valueAll) * 100;

function numberValue() {
  let response = document.getElementById("response");

  response.innerHTML = "SP - " + Math.round(percentSP * 100) / 100 + "%<br>";
  response.innerHTML += "RJ - " + Math.round(percentRJ * 100) / 100 + "%<br>";
  response.innerHTML += "MG - " + Math.round(percentMG * 100) / 100 + "%<br>";
  response.innerHTML += "ES - " + Math.round(percentES * 100) / 100 + "%<br>";
  response.innerHTML +=
    "Outros - " + Math.round(percentOther * 100) / 100 + "%";
}