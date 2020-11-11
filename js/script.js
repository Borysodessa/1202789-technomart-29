const link = document.querySelector(".contacts-link");
const popap = document.querySelector(".modal-contacts");
const closePopap = document.querySelector(".modal-close");
const login = popap.querySelector("[name=name]");
const form = popap.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault(evt);
  popap.classList.remove('visually-hidden');
  login.focus()
});

closePopap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.add("visually-hidden");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("Отправляем форму");
});
