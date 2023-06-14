console.log("hola 3");
let parrafoBeta = document.getElementsByClassName("beta");
let h1 = document.getElementById("h1");

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, true);
  h1.innerText = "suport";
  function handleOrientation(event) {
    parrafoBeta[0].innerText = "Beta: " + event.gamma;
  }
}

if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", handleMotion);

  function handleMotion(event) {
    const absolute = event.absolute;
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
    console.log(alpha);
    parrafoBeta[1].innerText = "aplha" + alpha;
    // Do stuff with the new orientation data
  }
}
