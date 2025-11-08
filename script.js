const carousel = document.getElementById('carousel');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentIndex = 0;
    const cards = document.querySelectorAll('.card');
  const visibleCards = 3;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20; // width + margin
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - visibleCards) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
    window.addEventListener('resize', updateCarousel);
