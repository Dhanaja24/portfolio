// Dhanaja Portfolio - JavaScript

// Display the current year automatically in the footer.
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Close the mobile Bootstrap navigation after clicking a navigation link.
const navLinks = document.querySelectorAll("#navbarMenu .nav-link, #navbarMenu .btn");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navbarMenu");
    const bsCollapse = bootstrap.Collapse.getInstance(menu);

    if (bsCollapse && window.innerWidth < 992) {
      bsCollapse.hide();
    }
  });
});

// Smooth scrolling for internal section links.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
