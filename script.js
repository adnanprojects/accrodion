const accordion = document.querySelectorAll(".container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("toggle");
  });
}
