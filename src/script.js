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












// const note = document.querySelectorAll('.rating button');

// const result = document.querySelector('.noteResult');

// note.forEach(button => {
//   button.addEventListener('click', setRating);
// });

// function setRating() {
//   const rating = this.dataset.rating;
//   note.forEach(button => {
//     button.classList.remove('active');
//     if (button.dataset.rating <= rating) {
//       button.classList.add('active')
//     }
//   })
// };

