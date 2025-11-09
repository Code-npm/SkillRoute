const carousel = document.getElementById("carousel");
    const cards = document.querySelectorAll(".card");
    let index = 0;

    function autoSlide() {
      index++;
      if (index >= cards.length) {
        index = 0;
      }
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(autoSlide, 3000);