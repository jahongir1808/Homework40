// Timer fields

const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const millisecondElement = document.getElementById("millisecond");

// buttons

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const newBtn = document.getElementById("new");

// Listeners

startBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(interval);
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
  clearFields();
});

newBtn.addEventListener("click", () => {
  clearInterval(interval);
  const results = document.getElementById("results");
  const block = document.createElement("div");
  block.classList.add("results-info");
  block.innerHTML = `Result: ${hour}: ${minute}: ${second}: ${millisecond} `;
  results.append(block);
  clearFields();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

function clearFields() {
  hour = 00;
  minute = 00;
  second = 00;
  millisecond = 00;
  hourElement.textContent = "00";
  minuteElement.textContent = "00";
  secondElement.textContent = "00";
  millisecondElement.textContent = "00";
}

// Variables

let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
let interval;

function startTimer() {
  millisecond++;

  // Milliseconds
  if (millisecond < 9) {
    millisecondElement.innerText = "0" + millisecond;
  }
  if (millisecond > 9) {
    millisecondElement.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondElement.innerText = "0" + second;
    millisecond = 0;
    millisecondElement.innerText = "0" + millisecond;
  }

  //   Seconds
  if (second < 9) {
    secondElement.innerText = "0" + second;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }

  //   Minutes
  if (minute < 9) {
    minuteElement.innerText = "0" + minute;
  }
  if (minute > 9) {
    minuteElement.innerText = minute;
  }
  if (minute > 59) {
    hour++;
  }

  //   Hours

  if (hour < 9) {
    hourElement.innerText = "0" + hour;
  }
  if (hour > 9) {
    hourElement.innerText = hour;
  }
  if (hour > 59) {
    minuteElement.innerText = "0" + minute;
    minute = 0;
    hourElement.innerText = "0" + hour;
  }
}
