let tools_icon = document.querySelector(".tools i"),
ul_tools_items  = document.querySelector(".ul-tools-items");
function show_tools() {
  ul_tools_items.classList.toggle("show");
 
}
tools_icon.onclick = show_tools;
