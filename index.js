/* const darkMode = document.getElementById("darkMode");
const body = document.getElementsByTagName("body")[0];

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("darkMode");
}

darkMode.addEventListener("click", (e) => {
  body.classList.toggle("darkMode");
  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", "false");
  } else {
    localStorage.setItem("darkMode", "true");
  }
})
 */

const ofLink = document.getElementById("of");
ofLink.addEventListener("click", e => {
  window.alert("Did you serious just click that lmao");
})
