let ModeBtn = document.querySelector("#Mode");
let body = document.querySelector("body");
let currMode = "Light";

ModeBtn.addEventListener("click", () => {
  if (currMode === "Light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("Light");
  } else {
    currMode = "Light";
    body.classList.add("Light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});

const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
