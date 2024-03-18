document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var waterPopup = document.getElementById('waterPopup');
        waterPopup.style.display = 'block';
        document.body.classList.add('popup-open');
    }, 2000);
});

function closePopup() {
    var waterPopup = document.getElementById('waterPopup');
    waterPopup.style.display = 'none';
    document.body.classList.remove('popup-open'); 
}
