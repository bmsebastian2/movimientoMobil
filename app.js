console.log("hola 2");
window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  console.log(alpha);
  // Do stuff with the new orientation data
}
