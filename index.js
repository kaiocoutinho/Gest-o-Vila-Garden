const btnConfig = document.querySelector("#btnSaveConfig");
const btnRegister = document.querySelector("#btnSave");
const valueHours = 0;
btnConfig.addEventListener("click", (ev) => {
  const input = document.querySelector("#valueHours");
  const inputValue = input.value;
  valueHours = inputValue;
});
