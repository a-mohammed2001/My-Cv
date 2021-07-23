let control = document.querySelector(".control"),
  details = document.querySelector(".details");
function detailsToggle() {
  details.classList.toggle("active-details");
}
control.onclick = detailsToggle;
