const result = document.getElementById("result")
const btnSubmit = document.querySelector(".submit");
const pageResult = document.querySelector(".card2");

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.dataset.value
    result.textContent = `${value}`
  })
})

btnSubmit.addEventListener("click", () => {
  if (result.textContent === "") {
    alert("Please, give us your feedback!")
  } else {
    pageResult.style.visibility = "visible"
  } 
})