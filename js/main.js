// Animate fade-slide elements sequentially on page load
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-slide');

  elements.forEach(el => {
    const delay = el.getAttribute('data-delay') || 0;
    setTimeout(() => {
      el.classList.add('active');
    }, delay);
  });
});

// Optional: add parallax effect on scroll for accent shape and hero text
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const accentShape = document.querySelector('.accent-shape');
  const heroText = document.querySelector('.hero .container');

  if(accentShape) {
    // Slight horizontal parallax for shape
    accentShape.style.transform = `translateX(${scrollY * -0.1}px)`;
  }
  if(heroText) {
    // Slight vertical parallax for hero text
    heroText.style.transform = `translateY(${scrollY * 0.15}px)`;
  }
});
