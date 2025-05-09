const title = document.getElementById('title');
title.addEventListener('mouseover', () => {
    title.textContent = 'Мишку наведено';
});
title.addEventListener('mouseout', () => {
    title.textContent = 'Наведи мишку';
}
);
title.addEventListener('click', () => {
    title.textContent = 'Мишка клікнута';
});
