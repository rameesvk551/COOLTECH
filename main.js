var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,  // Default to one slide per view
    spaceBetween: 10,  // Space between slides
    breakpoints: {
      640: {
        slidesPerView: 1,  // On screens smaller than 640px, show 1 card
      },
      768: {
        slidesPerView: 2,  // On screens larger than 768px, show 2 cards
      },
      1024: {
        slidesPerView: 3,  // On screens larger than 1024px, show 3 cards
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
const sliderImage = document.getElementById('sliderImage');
let index = 0;
let isDragging = false;
let startX, scrollLeft;

function slideNext() {
    index++;
    if (index >= sliderImage.children.length - 2) {  // Stop at the last image
        index = 0;
    }
    sliderImage.style.transform = `translateX(-${index * 33.33}%)`; // Move 1/3 of the width at a time
}

// Auto-slide every 3 seconds
setInterval(slideNext, 3000);

// Drag functionality
sliderImage.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollLeft = sliderImage.offsetLeft;
});

sliderImage.addEventListener('mouseleave', () => {
    isDragging = false;
});

sliderImage.addEventListener('mouseup', () => {
    isDragging = false;
});

sliderImage.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.pageX;
    const walk = (x - startX) * 2; // Multiply for faster drag movement
    sliderImage.style.transform = `translateX(${scrollLeft + walk}px)`;
});

// After drag ends, determine which image is closest and slide to it
sliderImage.addEventListener('mouseup', () => {
    const width = sliderImage.offsetWidth;
    const position = Math.abs(sliderImage.offsetLeft) % width;

    if (position > width / 2) {
        slideNext(); // Slide to the next image
    } else {
        sliderImage.style.transform = `translateX(0)`;
    }
});


        function onToggleMenu(e) {
            const navLinks = document.querySelector('.nav-links');
            e.name = e.name === 'menu' ? 'close' : 'menu';
            navLinks.classList.toggle('hidden');
        }


