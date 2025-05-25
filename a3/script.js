function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";
  for (let i = 0; i < pHeight; i++) {
    rLine += "<p>";
    for (let j = 0; j <= i; j++) {
      if (j % 2 === 0) {
        rLine += `<span style='color:${pColorEven};'>${pSymbol}</span>`;
      } else {
        rLine += `<span style='color:${pColorOdd};'>${pSymbol}</span>`;
      }
    }
    rLine += "</p>";
  }
  document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";
  for (let i = pHeight; i > 0; i--) {
    rLine += "<p>";
    for (let j = 0; j < i; j++) {
      if (j % 2 === 0) {
        rLine += `<span style='color:${pColorEven};'>${pSymbol}</span>`;
      } else {
        rLine += `<span style='color:${pColorOdd};'>${pSymbol}</span>`;
      }
    }
    rLine += "</p>";
  }
  document.getElementById("downRight").innerHTML = rLine;
}
