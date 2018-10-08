let colorWell;
let defaultColor = "#0000ff";

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateAll, false);
  colorWell.addEventListener("change", updateFirst, false);
  colorWell.select();
}


//när fönstret laddas kör funtionen startup. 
window.addEventListener("load", startup, false);

function updateFirst(event) {
  var p = document.querySelectorAll("p");
  if (p) {
    p.forEach().style.color = event.target.value;
  }
}

function updateAll(event) {
  var p = document.querySelectorAll("p");
  if (p) {
    p.forEach(function(p) {
      p.style.color = event.target.value;
    });
  }
}

