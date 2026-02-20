<script id="hamburger-js">
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // animate hamburger
  hamburger.classList.toggle("open");
});
</script>
