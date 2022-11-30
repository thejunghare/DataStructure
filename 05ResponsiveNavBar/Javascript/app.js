const bars = document.getElementById("bars");
const navbar = document.getElementById("navbar");

bars.addEventListener("click", function () {
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
  console.log("clicked");
});
