let bill = document.querySelector("#bill");
let tipButtons = document.querySelectorAll(".tip-values button");
let customTip = document.querySelector(".tip-values input");
let people = document.querySelector("#people");
let amountPerPerson = document.querySelector(".amount span");
let totalAmount = document.querySelector(".total span");
let resetButton = document.querySelector(".section-2 input");

let billValue;
let buttonTip;
let customTipValue;
let peopleNumber;
let totalTip;
let finalValue;

//Valor da conta
bill.addEventListener("input", function () {
  billValue = parseFloat(Number(bill.value));
  console.log(billValue);
  if (isNaN(billValue)) {
    bill.classList.add("error");
  } else {
    bill.classList.remove("error");
  }

  calculatePersonValue();
});

//percentagem dos botoes
tipButtons.forEach((tip) => {
  tip.addEventListener("click", function () {
    tipButtons.forEach((tip) => {
      tip.classList.remove("clicked");
    });

    buttonTip = parseFloat(tip.value);
    tip.classList.toggle("clicked");

    customTip.value = "";
    customTipValue = "";

    calculatePersonValue();
  });
});

//valor customizado

customTip.addEventListener("input", function () {
  tipButtons.forEach((tip) => {
    tip.classList.remove("clicked");
  });

  customTipValue = parseFloat(customTip.value / 100);
  if (isNaN(customTipValue)) {
    customTip.classList.add("error");
  } else {
    customTip.classList.remove("error");
  }

  console.log(customTipValue);
  calculatePersonValue();
});

//Ao cliciar no valor customizado os botões deixam de estar selecionados
customTip.addEventListener("focus", function () {
  tipButtons.forEach((tip) => {
    tip.classList.remove("clicked");
  });
});

//numero pessoas

people.addEventListener("input", function () {
  peopleNumber = parseInt(Number(people.value));
  if (isNaN(peopleNumber)) {
    people.classList.add("error");
  } else {
    people.classList.remove("error");
  }

  calculatePersonValue();
});

//Colocar os valores iniciais

resetButton.addEventListener("click", function () {
  bill.value = "";
  tipButtons.forEach((tip) => {
    tip.classList.remove("clicked");
  });
  customTip.value = "";
  people.value = "";
  amountPerPerson.innerHTML = "0.00";
  totalAmount.innerHTML = "0.00";
});

function calculatePersonValue() {
  if (billValue && buttonTip && peopleNumber) {
    totalTip = (billValue * buttonTip) / peopleNumber;
    finalValue = billValue / peopleNumber + totalTip;

    amountPerPerson.innerHTML = totalTip.toFixed(2);
    totalAmount.innerHTML = finalValue.toFixed(2);
  }
  if (billValue && customTipValue && peopleNumber) {
    totalTip = (billValue * customTipValue) / peopleNumber;
    finalValue = billValue / peopleNumber + totalTip;

    amountPerPerson.innerHTML = totalTip.toFixed(2);
    totalAmount.innerHTML = finalValue.toFixed(2);
  }
}
