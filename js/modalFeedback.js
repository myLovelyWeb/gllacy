var linkFeedback = document.querySelector(".btn-feedback");
var modalFeedback = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay")
var closeModalFeedback = modalFeedback.querySelector(".modal__close-btn") 

linkFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal--show");
  overlay.classList.add("overlay--show");
});

closeModalFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal--show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});