document.querySelector('#grid-item-props').style.display = 'none';
document.querySelector('#grid-container-props').style.display = 'none';

// Show the grid container table upon button press
document.getElementById("grid-container-btn").addEventListener("click", () => {
    document.querySelector('#grid-container-props').style.display = 'block';
    document.querySelector('#grid-item-props').style.display = 'none';
});

// Show the grid item table upon button press
document.getElementById("grid-item-btn").addEventListener("click", () => {
    document.querySelector('#grid-item-props').style.display = 'block';
    document.querySelector('#grid-container-props').style.display = 'none';
});