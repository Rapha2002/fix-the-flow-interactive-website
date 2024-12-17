

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}


document.getElementById('openPopup').addEventListener('click', (event) => {
    console.log('Clicked')
    document.getElementById('popup-1').classList.toggle('active')
    event.stopPropagation();
})

document.getElementById('closePopup').addEventListener('click', (event) => {
    document.getElementById('popup-1').classList.toggle('active')
    event.stopPropagation();
})

document.addEventListener('keydown', function (event) {
    if (document.getElementById("popup-1").className.includes('active')) {
        if (event.key === "Escape") {
            document.getElementById("popup-1").classList.toggle("active");
        }
    }
});
document.addEventListener('click', function (event) {

    if (document.getElementById("popup-1").className.includes('active')) {
        document.getElementById("popup-1").classList.toggle("active");
    }
});

