const darkMode = document.getElementById("darkMode");
const body = document.getElementsByTagName("body")[0];

darkMode.addEventListener("click", (e) => {
  body.classList.toggle("darkMode");
})
