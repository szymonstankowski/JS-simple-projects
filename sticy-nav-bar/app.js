const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");
const topContainer = document.querySelector(".top-container h1");
console.log(bottomContainerEl.offsetTop);
console.log(navbarEl.offsetHeight);
console.log(topContainer.offsetHeight);
console.log(window.scrollY);

// Navbar zmienia kolor na czarny w momencie kiedy window.scrollY osiagnie wartosc wieksza niz
// (bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50)

navbarEl.classList.remove("active");

window.addEventListener("scroll", () => {
  if (
    window.scrollY > (bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50 )){
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
