let displayValue = [];
let div = document.querySelector(".result-two");
let result = document.querySelector(".result-one");
let sign = document.querySelector(".result-three");
let dot =document.querySelector(".dot")

let dotFunction = function(){
  if (div.innerText.length < 11) {
    div.innerHTML += dot.textContent;
    if (!div.textContent.includes("+")) {
    displayValue.push(dot.textContent)
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

dot.addEventListener("click", dotFunction)
if (div.textContent.includes(".")){
    dot.removeEventListener("click", dotFunction)
}
  

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
  sign.innerHTML = `${displayValue} +`;
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
 
});
let minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  div.innerHTML = "";
  sign.innerHTML = `${displayValue} -`;
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

});

let multi = document.querySelector(".multi");
multi.addEventListener("click", () => {
  div.innerHTML = "";
  sign.innerHTML = `${displayValue} *`;
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
});

let divis = document.querySelector(".divis");
divis.addEventListener("click", () => {
  div.innerHTML = "";
  sign.innerHTML = `${displayValue} /`;
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
});

let CE = document.querySelector(".CE");
CE.addEventListener("click", () => {
  result.innerHTML = "";
  div.innerHTML = "";
  sign.innerHTML ='';
  displayValue = [];
  displayValueSecond = [];
  a = '';
  b='';
});
let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
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
    let sum = a *b ;
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
});
