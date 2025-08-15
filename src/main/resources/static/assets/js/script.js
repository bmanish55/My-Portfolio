function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const skillFills = document.querySelectorAll(".skill-progress-fill");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const percentage = fill.parentElement.previousElementSibling.querySelector("data").value;
        fill.style.width = percentage + "%";
        observer.unobserve(fill); // Animate only once
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(fill => {
    observer.observe(fill);
  });
});

var swiper = new Swiper(".swiper",{
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: false,
  slidesPerView:"auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  on: {
  click(event) {
    const slide = this.slides[this.clickedIndex];
    const url = slide.dataset.url;
    if (url) {
      window.open(url, "_blank");
    }
  },
},
  pagination: {
    el: ".swiper-pagination",
  }
})

