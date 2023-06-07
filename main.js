const primaryHeader = document.querySelector(".primary-header");
const mobile_nav_toggle = document.querySelector(".mobile-nav-toggle");
const primary_navigation = document.querySelector(".primary-navigation");

mobile_nav_toggle.addEventListener("click", () => {
  primary_navigation.hasAttribute("data-visible")
    ? mobile_nav_toggle.setAttribute("aria-expanded", false)
    : mobile_nav_toggle.setAttribute("aria-expanded", true);
  primary_navigation.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  arrows: false,
  responsive: {
    500: {
      dots: true,
    },
    700: {
      arrows: false,
    },
  },
});
