document.querySelector('.openPopup').addEventListener('click', (event) => {
    console.log('Clicked')
    document.getElementById('popup-1').classList.toggle('active')
    event.stopPropagation();
})

document.querySelector('.closePopup').addEventListener('click', (event) => {
    document.getElementById('popup-1').classList.toggle('active');
    event.stopPropagation();
})

document.querySelector('keydown', function (event) {
    if (document.getElementById("popup-1").className.includes('active')) {
        if (event.key === "Escape") {
            document.getElementById("popup-1").classList.toggle("active");
        }
    }
})

