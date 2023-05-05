const result = document.getElementById("result")
const btnSubmit = document.querySelector(".btnSubmit")
const pageResult = document.querySelector(".card2")
const form = document.querySelector(".formContainer")

form.addEventListener("submit", (ev) => {
  ev.preventDefault()
  const rating = form.rating.value
  result.textContent = `${rating}`
  if (result.textContent === "") {
    alert("Please, give us your feedback!")
  } else {
    pageResult.style.visibility = "visible"
  }
})