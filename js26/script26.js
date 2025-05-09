const menu = document.getElementById("menu");
const toggleButton = document.getElementById("menuButton");

toggleButton.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.classList.toggle("hidden");
});
document.addEventListener("click", () => {
    menu.classList.add("hidden");
});
menu.addEventListener("click", (event) => {
    event.stopPropagation();
}); 