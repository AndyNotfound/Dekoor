var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display) {
      panel.style.display = null;
    } else {
      panel.style.display = "block";
    }
  });
}
