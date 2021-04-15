const closeBtn = document.querySelector("#closeBtn"),
  modalIndex = document.querySelector("#modal-index"),
  startTest = document.querySelector("#start-test"),
  loader = document.querySelector(".loader-div"),
  start = document.querySelector(".start"),
  modal_side_bar = document.querySelector(".modal-side-bar"),
  hamburger = document.querySelector(".mobile__hamburger")




// Functions


startTest.addEventListener("click", function () {
  loader.style.display = "flex"

  setTimeout(() => {
    if (modal_side_bar.style.display = "flex") {
      modal_side_bar.style.display = "none";
    }
    loader.style.display = "none"
    modalIndex.style.display = "grid"
  }, 2000);
})

start.addEventListener("click", function () {
  loader.style.display = "flex"

  setTimeout(() => {
    loader.style.display = "none"
    window.location.href = "tensiontest.html"
  }, 2000);
})

closeBtn.addEventListener("click", function () {
  modalIndex.style.display = "none"
})


// Side bar Modal
hamburger.addEventListener("click", function() {
  modal_side_bar.style.display = "flex";
})

window.onclick = function (event) {
  if (event.target == modal_side_bar) {
    modal_side_bar.style.display = "none";
  }

}