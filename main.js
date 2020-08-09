let displayValue = [];
let div = document.querySelector(".result-two");
let result = document.querySelector(".result-one");
let sign = document.querySelector(".result-three");

let tag = document.querySelector(".result-two");

const numbers = document.querySelectorAll(".x div");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (tag.innerText.length < 11) {
      div.innerHTML += number.textContent;
      if (!div.textContent.includes("+")) {
        displayValue.push(number.textContent);
      }
    }
  });
});
let c = "";
let add = function (a, b) {
  c = Number(a) + Number(b);
  return c;
};
let substract = function (a, b) {
  c = Number(a) - Number(b);
  return c;
};
let multiply = function (a, b) {
  c = Number(a) * Number(b);
  return c;
};
let divide = function (a, b) {
  c = Number(a) / Number(b);
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

let plus = document.querySelector(".plus");
let a = 0;
let displayValueSecond = [];
let displayValueThird = [];
let displayValueFourth = [];
let displayValueFifth = [];
plus.addEventListener("click", () => {
  div.innerHTML = "";
  sign.innerHTML = "+";
  a = displayValue.join("");
  displayValueSecond = [];
  if (sign.innerHTML.includes("+")) {
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (tag.innerText.length < 11) {
          b = displayValueSecond;
          let sum = +a + +b;
          displayValue = [sum];
          displayValueSecond = div.textContent;
        }
      });
    });
  }
});
let minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  div.innerHTML = "";
  sign.innerHTML = "-";
  a = displayValue.join("");
  displayValueThird = [];
  if (sign.innerHTML.includes("-")) {
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (tag.innerText.length < 11) {
          f = displayValueThird;
          let sum = a - f;
          displayValue = [sum];
          displayValueThird = div.textContent;
        }
      });
    });
  }
});

let multi = document.querySelector(".multi");
multi.addEventListener("click", () => {
  div.innerHTML = "";
  sign.innerHTML = "*";
  a = displayValue.join("");
  displayValueFourth = [];
  if (sign.innerHTML.includes("*")) {
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (tag.innerText.length < 11) {
          d = displayValueFourth;
          let sum = a * d;
          displayValue = [sum];
          displayValueFourth = div.textContent;
        }
      });
    });
  }
});

let divis = document.querySelector(".divis");
divis.addEventListener("click", () => {
  div.innerHTML = "";
  sign.innerHTML = "/";
  a = displayValue.join("");
  displayValueFifth = [];
  if (sign.innerHTML.includes("/")) {
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (tag.innerText.length < 11) {
          e = displayValueFifth;
          let sum = a / e;
          displayValue = [sum];
          displayValueFifth = div.textContent;
        }
      });
    });
  }
});

let CE = document.querySelector(".CE");
CE.addEventListener("click", () => {
  result.innerHTML = "";
  div.innerHTML = "";
  displayValue = [];
  displayValueSecond = [];
});
let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  b = displayValueSecond;
  f = displayValueThird;
  d = displayValueFourth;
  e = displayValueFifth;
  // console.log(b, f, d, e);
  if (sign.textContent.includes("+")) {
    operate(a, b, "+");
    let sum = +a + +b;
    displayValue = [sum];
    displayValueSecond = [];
  } else if (sign.textContent.includes("-")) {
    operate(a, f, "-");
    let sum = a - f;
    displayValue = [sum];
    displayValueThird = [];
  } else if (sign.textContent.includes("*")) {
    operate(a, d, "*");
    let sum = a * d;
    displayValue = [sum];
    displayValueFourth = [];
  } else if (sign.textContent.includes("/")) {
    if (e == 0) {
      div.innerHTML = "error";
    } else {
      operate(a, e, "/");
      let sum = a / e;
      displayValue = [sum];
      displayValueFifth = [];
    }
  }

  result.innerHTML = c;
});
