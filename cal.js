let screen = document.querySelector("#screen");

function display(num) {
  screen.value += num;
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (err) {
    alert("invalid");
  }
}

function Clear() {
  screen.value = "";
}

function del() {
  screen.value = screen.value.slice(0, -1);
}
