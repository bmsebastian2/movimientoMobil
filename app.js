console.log("hola 3");
let parrafoBeta = document.getElementsByClassName("beta");

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  console.log(alpha);
  parrafoBeta[0].innerText = parrafoBeta[0].innerText + 1;
  // Do stuff with the new orientation data
}
