console.log("check balance");

export function getInputNumb(idName) {
  const amount = document.getElementById(idName).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

export function updateSpanTest(idName, addedNumber) {

  const current = document.getElementById(idName).innerText;
  const currentStringToInt = parseFloat(current);

  const total = currentStringToInt + addedNumber;

  document.getElementById(idName).innerText = total;
}
