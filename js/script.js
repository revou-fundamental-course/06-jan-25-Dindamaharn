// Slider JS Home Page
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const offset = -index * 100; 
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); 

//Toggle untuk our profile
function toggleContent() {
    const additionalInfo = document.querySelector('.additional-info');
    const hiddenContents = document.querySelectorAll('.hidden-content');
    
    additionalInfo.style.display = additionalInfo.style.display === 'flex' ? 'none' : 'flex';
    
    hiddenContents.forEach(content => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

    var arrow = document.getElementById('arrow');
    arrow.classList.toggle('rotated');
}
