window.addEventListener("scroll", function() {
    const scrollY = window.scrollY;
    const blue = Math.min(255, scrollY % 256);
    const red = 100;
    const green = 200;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
