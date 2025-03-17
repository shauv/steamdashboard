const wrapper = document.querySelector('.carousel-wrapper');
const dots = document.querySelectorAll('.dot');

// Navigate to the specified slide
function goToSlide(index) {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;

    // Use scrollLeft instead of transform for better alignment
    wrapper.scrollTo({
        left: index * containerWidth, // Scroll to the calculated position
        behavior: "smooth" // Smooth transition when changing slides
    });

    // Update the active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Sync dots with scrolling
wrapper.addEventListener('scroll', () => {
    const scrollPosition = wrapper.scrollLeft; // Get the current scroll position
    const containerWidth = wrapper.offsetWidth;
    const activeIndex = Math.round(scrollPosition / containerWidth);

    // Update the active dot based on scroll position
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
    });
});