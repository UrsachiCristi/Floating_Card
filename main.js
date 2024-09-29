const input = document.getElementById("credit-card-input");
let select = document.getElementById('year');
let currYear = new Date().getFullYear();
const cardNumber = document.querySelector(`.card-number`)
const cardHolder = document.getElementById("card-holder");
const holderInput = document.getElementById("holder");
const cardExpiration = document.getElementById("cardexpiration");
const month = document.getElementById("months");
const year = document.getElementById("year");
const cvv = document.querySelector(`.white-code`)
const cvvInput = document.getElementById("cvv");
const cardFront = document.querySelector(`.card_front`)
const cardBack = document.querySelector(`.card-back`)




input.addEventListener("input", () => input.value = formatNumber(input.value.replaceAll(" ", "")));
const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, "");






for(let year=currYear; year <= currYear+10; year++){
  let option = document.createElement('option');
  option.setAttribute('value', year);
  option.innerHTML = year;
  select.appendChild(option);
}


input.addEventListener("input", () => {
  let inputValue = input.value.replaceAll(" ", ""); // remove spaces
  cardNumber.innerHTML = formatCardNumber(inputValue)
});
// replace card number with intput

const formatCardNumber = (value)=> {
  let formattedValue = value.padEnd(16, "#");
  return formattedValue.replace(/(.{4})/g, "$1 ").trim();
}


holderInput.addEventListener("input",()=>{
  cardHolder.innerHTML = holderInput.value.toUpperCase()
});




month.addEventListener("change",()=>{
  cardExpiration.innerHTML = month.value + cardExpiration.innerHTML.trim().slice(2) 
})



year.addEventListener("change",()=>{
  cardExpiration.innerHTML =  cardExpiration.innerHTML.trim().slice(0,-2) + year.value.slice(-2)
})


cvvInput.addEventListener("input",()=>{
  cvv.textContent = cvvInput.value
})



cvvInput.addEventListener("mouseover",()=>{
  cardFront.classList.toggle('flipped')
  cardBack.classList.toggle('flipped')
})
cvvInput.addEventListener("mouseout", () => {

  setTimeout(() => {
    cardFront.classList.toggle('flipped');
    cardBack.classList.toggle('flipped');
  }, 2000);
});



