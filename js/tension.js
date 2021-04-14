const modalTension = document.querySelector("#modal-tension"),
  closeTension = document.querySelector("#close-tension"),
  stopTest = document.querySelector("#stop-test"),
  resumeTest = document.querySelector("#resume-test"),
  abortTest = document.querySelector("#abort-test");





// Functions
stopTest.addEventListener("click", function () {
  modalTension.style.display = "grid"
})

resumeTest.addEventListener("click", function () {
  modalTension.style.display = "none"
})


closeTension.addEventListener("click", function () {
  modalTension.style.display = "none"
})


function switchPage() {
  setTimeout(() => {
    window.location.href = "complete.html"
  }, 80000);
}

switchPage()