const text = ["RailBnB Website"];
let count = 0;
let currentText = "";
let index = 0;
let letter = "";
(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".rail").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 1000);
})();

const displayTime = document.querySelector(".time");
let date = new Date().toLocaleTimeString();

setInterval(setTime, 1000);

function setTime() {
  displayTime.innerText = date;
}
