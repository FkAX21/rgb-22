// RGB Colors

// Event Listener
document.getElementById("previewBtn").addEventListener("click", rgbPreview);

// Event Function
function rgbPreview() {
  // Input
  let rvalue = document.getElementById("red").value;
  let gvalue = document.getElementById("green").value;
  let bvalue = document.getElementById("blue").value;
  // Process
  let rgbstring = "rgb(" + rvalue + ", " + gvalue + ", " + bvalue + ")";
  // Output
  document.getElementById("rgbstrout").innerHTML = rgbstring;
  document.getElementById("display").style.background = rgbstring;
}
document.getElementById("black").addEventListener("click", black);

function black() {
  document.getElementById("display").style.background = "rgb(0, 0, 0)";
}

document.getElementById("white").addEventListener("click", white);

function white() {
  document.getElementById("display").style.background = "rgb(255, 255, 255)";
}
