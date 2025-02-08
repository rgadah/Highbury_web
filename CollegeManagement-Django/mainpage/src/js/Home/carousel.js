import image1 from './firstC.gif';
import image2 from './2nd.gif';
import image3 from './3rd.gif';

export function loadCarousel() {
    document.addEventListener('DOMContentLoaded', () => {
        const mainElement = document.querySelector('main');
        if (!mainElement) {
            console.error("Main element not found. Carousel cannot be loaded.");
            return;
        }

        const carouselContainer = document.createElement('div');
        carouselContainer.id = 'mycarousel';
        carouselContainer.className = 'carousel slide';
        carouselContainer.dataset.bsRide = 'carousel';

        carouselContainer.innerHTML = `
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" id="slide-1">
                    <img src="${image1}" class="d-block w-100" alt="First slide GIF" loading="lazy">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First Slide Label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item" id="slide-2">
                    <img src="${image2}" class="d-block w-100" alt="Second slide GIF" loading="lazy">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second Slide Label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item" id="slide-3">
                    <img src="${image3}" class="d-block w-100" alt="Third slide GIF" loading="lazy">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third Slide Label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        `;

        mainElement.appendChild(carouselContainer);

        // Manual initialization (optional)
        const carouselElement = document.getElementById('mycarousel');
        const gifElements = document.querySelectorAll('img');
        new bootstrap.Carousel(carouselElement, {
            interval: 5000, // Adjust the interval as needed
            wrap: true,     // Enable looping back to the first slide
        });

        // Control GIF playback when the slide becomes active
        const carouselItems = document.querySelectorAll('.carousel-item');

        // Listen for slide changes
        $('#mycarousel').on('slid.bs.carousel', function (e) {
            const activeSlide = e.relatedTarget;
            const activeSlideId = activeSlide.id;

            // Stop all GIFs and reset them
            gifElements.forEach(gif => {
                gif.src = gif.src; // Resetting the GIF to stop it
            });

            // Start the GIF for the active slide
            const activeGif = document.querySelector(`#${activeSlideId} img`);
            if (activeGif) {
                activeGif.src = activeGif.src; // Reset the source to start the animation
            }
        });
    });
}
