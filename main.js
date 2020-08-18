let displayValue = [];
let div = document.querySelector(".result-two");
let result = document.querySelector(".result-one");
let sign = document.querySelector(".result-three");
let dot = document.querySelector(".dot");

function addDot() {
  if (div.innerText.length < 11) {
    if (div.textContent.includes(".")) {
      return;
    } else {
      div.innerHTML += ".";
      displayValue.push(".");
    }
  }
}

const numbers = document.querySelectorAll(".x div");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (div.innerText.length < 11) {
      div.innerHTML += number.textContent;
      if (!div.textContent.includes("+")) {
        displayValue.push(number.textContent);
      }
    }
  });
});

dot.addEventListener("click", addDot);

let c = "";
let add = function (a, b) {
  c = Number(a) + Number(b);
  c = Math.round(c * 100) / 100;
  return c;
};
let substract = function (a, b) {
  c = Number(a) - Number(b);
  c = Math.round(c * 100) / 100;
  return c;
};
let multiply = function (a, b) {
  c = Number(a) * Number(b);
  c = Math.round(c * 100) / 100;
  return c;
};
let divide = function (a, b) {
  c = Number(a) / Number(b);
  c = Math.round(c * 100) / 100;
  return c;
};
let operate = function (a, b, operator) {
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      substract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
};
let plusFunc = () => {
  div.innerHTML = "";
  sign.innerHTML = `${displayValue.join("")} +`;
  a = displayValue.join("");
  displayValueSecond = [];

  if (sign.innerHTML.includes("+")) {
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (div.innerText.length < 11) {
          displayValueSecond = div.textContent;
          b = displayValueSecond;
          let sum = +a + +b;
          displayValue = [sum];
        }
      });
    });
  }
};
let minusFunc = () => {
  div.innerHTML = "";

  sign.innerHTML = `${displayValue.join("")} -`;
  a = displayValue.join("");
  displayValueSecond = [];

  if (sign.innerHTML.includes("-")) {
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (div.innerText.length < 11) {
          displayValueSecond = div.textContent;
          f = displayValueSecond;
          let sum = a - f;
          displayValue = [sum];
        }
      });
    });
  }
};
let multiFunc = () => {
  div.innerHTML = "";
  sign.innerHTML = `${displayValue.join("")} *`;
  a = displayValue.join("");
  displayValueSecond = [];
  if (sign.innerHTML.includes("*")) {
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (div.innerText.length < 11) {
          displayValueSecond = div.textContent;
          d = displayValueSecond;
          let sum = a * d;
          displayValue = [sum];
        }
      });
    });
  }
};
let divisFunc = () => {
  div.innerHTML = "";
  sign.innerHTML = `${displayValue.join("")} /`;
  a = displayValue.join("");
  displayValueSecond = [];
  if (sign.innerHTML.includes("/")) {
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (div.innerText.length < 11) {
          displayValueSecond = div.textContent;
          e = displayValueSecond;
          let sum = a / e;
          displayValue = [sum];
        }
      });
    });
  }
};

let equalFunc = () => {
  b = displayValueSecond;

  if (sign.textContent.includes("+")) {
    operate(a, b, "+");
    let sum = +a + +b;
    displayValue = [sum];
    displayValueSecond = [];
  } else if (sign.textContent.includes("-")) {
    operate(a, b, "-");
    let sum = a - b;
    displayValue = [sum];
    displayValueSecond = [];
  } else if (sign.textContent.includes("*")) {
    operate(a, b, "*");
    let sum = a * b;
    displayValue = [sum];
    displayValueSecond = [];
  } else if (sign.textContent.includes("/")) {
    if (b == 0) {
      div.innerHTML = "error";
    } else {
      operate(a, b, "/");
      let sum = a / b;
      displayValue = [sum];
      displayValueSecond = [];
    }
  }

  result.innerHTML = c;
};
let plus = document.querySelector(".plus");
let a = 0;
let displayValueSecond = [];

plus.addEventListener("click", plusFunc);
let minus = document.querySelector(".minus");
minus.addEventListener("click", minusFunc);

let multi = document.querySelector(".multi");
multi.addEventListener("click", multiFunc);

let divis = document.querySelector(".divis");
divis.addEventListener("click", divisFunc);

let CE = document.querySelector(".CE");
CE.addEventListener("click", () => {
  result.innerHTML = "";
  div.innerHTML = "";
  sign.innerHTML = "";
  displayValue = [];
  displayValueSecond = [];
  a = "";
  b = "";
});
let equal = document.querySelector(".equal");
equal.addEventListener("click", equalFunc);

window.addEventListener("keydown", function (e) {
  if (Number.isInteger(Number(e.key))) {
    if (div.innerText.length < 11) {
      div.innerHTML += e.key;
      if (!div.textContent.includes("+")) {
        displayValue.push(e.key);
      }
    }
    if (sign.textContent.includes("+")) {
      displayValueSecond = div.textContent;
      b = displayValueSecond;
      let sum = +a + +b;
      displayValue = [sum];
    }
    if (sign.textContent.includes("-")) {
      displayValueSecond = div.textContent;
      f = displayValueSecond;
      let sum = a - f;
      displayValue = [sum];
    }
    if (sign.textContent.includes("*")) {
      displayValueSecond = div.textContent;
      d = displayValueSecond;
      let sum = a * d;
      displayValue = [sum];
    }
    if (sign.textContent.includes("/")) {
      displayValueSecond = div.textContent;
      e = displayValueSecond;
      let sum = a / e;
      displayValue = [sum];
    }
  } else if (e.key == "." || e.which == "110") {
    addDot();
  } else if (e.key == "+") {
    plusFunc();
  } else if (e.key == "-") {
    minusFunc();
  } else if (e.key == "*") {
    multiFunc();
  } else if (e.key == "/") {
    divisFunc();
  } else if (e.key == "=" || e.key == "Enter") {
    equalFunc();
  } else if (e.key == "Backspace") {
    backSpace();
  }
});
let arrow = document.querySelector(".arrow");
let backSpace = function () {
  let newText = div.textContent.slice(0, -1);
  div.innerHTML = newText;
  displayValue = displayValue.slice(0, -1);
};
arrow.addEventListener("click", () => backSpace);
