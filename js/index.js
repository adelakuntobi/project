const closeBtn = document.querySelector("#closeBtn"),
  modalIndex = document.querySelector("#modal-index"),
 startTest = document.querySelector("#start-test"),
 loader = document.querySelector(".loader-div"),
 start =document.querySelector(".start")




// Functions


startTest.addEventListener("click", function () {
  loader.style.display = "flex"

  setTimeout(() => {
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

