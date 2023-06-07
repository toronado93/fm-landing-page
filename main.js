const primaryHeader = document.querySelector(".primary-header");
const mobile_nav_toggle = document.querySelector(".mobile-nav-toggle");
const primary_navigation = document.querySelector(".primary-navigation");

const hamgurger_icon = document.querySelector(".icon-hamburger");
const close_icon = document.querySelector(".icon-close");

mobile_nav_toggle.addEventListener("click", () => {
  // display info
  let hg_display = window.getComputedStyle(hamgurger_icon).display;
  let ic_display = window.getComputedStyle(close_icon).display;

  if (hg_display === "block" && ic_display === "none") {
    hamgurger_icon.style.display = "none";
    close_icon.style.display = "block";
    console.log(hamgurger_icon.style.display, close_icon.style.display);
  }
  if (hg_display === "none" && ic_display === "block") {
    hamgurger_icon.style.display = "block";
    close_icon.style.display = "none";
  }

  console.log();

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
