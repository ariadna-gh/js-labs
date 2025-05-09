const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentIndex = 0;
const imageElement = document.getElementById('img');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function showImage(index) {
    imageElement.src = images[index];
}
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
