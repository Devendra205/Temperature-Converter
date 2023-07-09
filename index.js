const givenElem = document.querySelector("#given");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#inputType");

window.addEventListener("load", () => {
    degree.value = "";
    givenElem.innerHTML = "";
  });

  convertBtn.addEventListener("click", () => {
    convertToAnswer();
  });
  

  function convertToAnswer() {
    let inputValue = degree.value;
  
  if (tempType.value === "celsius") {
      const FahrenheitToCelsius = (inputValue *(9/5)) + 32;
      givenElem.innerHTML = `${FahrenheitToCelsius.toFixed(2)} &deg;F`;
    } else if (tempType.value === "fahrenheit") {
      const CelsiusToFahrenheit = (inputValue -32) *(5/9);
      givenElem.innerHTML = `${CelsiusToFahrenheit.toFixed(2)} &deg;C`;
    }
  }