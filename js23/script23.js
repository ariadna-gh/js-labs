const style = document.createElement('style');
style.textContent = `
    .inactive {
        background-color: gray;
        color: white;
        cursor: pointer;
    }
    .active {
        background-color: orange;
        color: white;
        cursor: pointer;
    } `;
document.head.appendChild(style);

const element = document.createElement('div');
element.id = 'toggle';
element.className = 'inactive';
element.textContent = 'Click to toggle';
document.body.appendChild(element);

element.addEventListener('click', function() {
    element.classList.toggle('active');
    element.classList.toggle('inactive');
});