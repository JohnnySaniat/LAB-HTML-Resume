console.log("Resume")

const hireBtnText = document.getElementById("hirebtn-text");
const hireBtn = document.getElementById("hirebtn");

hireBtn.addEventListener("click", () => {
  hireBtnText.classList.remove("hidden");
  hireBtnText.classList.add("popup-message");
});

hireBtnText.addEventListener("animationend", () => {
  hireBtnText.classList.remove("popup-message");
  hireBtnText.classList.add("hidden");
});
