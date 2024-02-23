const slides = document.querySelector(".slider .slide");
const items = document.querySelectorAll(".slider .slide .item");
const dots = document.querySelectorAll(".slider .dots li");
const navigation = document.querySelectorAll("[data-slider-navigation]");

let active = 0;
let lengthItems = items.length - 1;
const size = items[0].clientWidth;

navigation.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.dataset.sliderNavigation === "next") {
      if (active + 1 > lengthItems) {
        active = 0;
      } else {
        active += 1;
      }
    } else if (button.dataset.sliderNavigation === "prev") {
      if (active - 1 < 0) {
        active = lengthItems;
      } else {
        active--;
      }
    }

    reloadSlider();
  })
);

function reloadSlider() {
  slides.style.transform = `translateX(${-size * active}px)`;

  const lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
}

dots.forEach((button, index) =>
  button.addEventListener("click", () => {
    active = index;
    reloadSlider();
  })
);
