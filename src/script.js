
let form = document.getElementById("akanForm");
let birthdateInput = document.getElementById("birthdate");
let genderGroup = document.getElementById("genderGroup");
let resultEl = document.getElementById("result");

// Akan name data
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Calculate day index using formula 

function calculateDayIndex(day, month, year) {
  let CC = Math.floor(year / 100);
  let YY = year % 100;
  let DD = day;
  let MM = month;

  let part1 = (CC / 4) - (2 * CC) - 1;
  let part2 = (5 * YY) / 4;
  let part3 = (26 * (MM + 1)) / 10;

  let sum = part1 + part2 + part3 + DD;
  return ((Math.floor(sum) % 7) + 7) % 7;
}

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let dateValue = birthdateInput.value;
  let genderEl = document.querySelector('input[name="gender"]:checked');

  if (!dateValue || !genderEl) {
    alert("Please enter a valid birthdate and select a gender.");
    return;
  }

  let [year, month, day] = dateValue.split("-").map(Number);
  let index = calculateDayIndex(day, month, year);
  let akanName = genderEl.value === "male" ? maleNames[index] : femaleNames[index];

  resultEl.textContent =
    `You were born on a ${days[index]}. Your Akan name is ${akanName}.`;
});