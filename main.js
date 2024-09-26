const input = document.getElementById("credit-card-input");
input.addEventListener("input", () => input.value = formatNumber(input.value.replaceAll(" ", "")));

const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, "");





let select = document.getElementById('year');
let currYear = new Date().getFullYear();
console.log(currYear)
for(let year=currYear; year <= currYear+10; year++){
  let option = document.createElement('option');
  option.setAttribute('value', year);
  option.innerHTML = year;
  select.appendChild(option);
}