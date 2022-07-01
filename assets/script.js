// Event Click Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const ul = document.querySelector(".navbar-list");
const liHome = document.querySelector(".li-home");
const liSejarah = document.querySelector(".li-sejarah");
const liGeografis = document.querySelector(".li-geografis");
const liWisata = document.querySelector(".li-wisata");
const liKuliner = document.querySelector(".li-kuliner");
const liBudaya = document.querySelector(".li-budaya");

// Menampilkan dan Menghilangkan Navigation List ketika Hamburger menu di klik
hamburgerMenu.addEventListener("click", function() {
    ul.classList.toggle("navbar-list-block");
    liHome.classList.toggle("li-block");
    liSejarah.classList.toggle("li-block");
    liGeografis.classList.toggle("li-block");
    liWisata.classList.toggle("li-block");
    liKuliner.classList.toggle("li-block");
    liBudaya.classList.toggle("li-block");
});

// Active Navbar
const home = document.querySelector("#home-button");
const sejarah = document.querySelector("#sejarah-button");
const geografis = document.querySelector("#geografis-button");
const wisata = document.querySelector("#wisata-button");
const kuliner = document.querySelector("#kuliner-button");
const budaya = document.querySelector("#budaya-button");

home.addEventListener("click", function() {
    home.classList.add("nav-click");
    sejarah.classList.remove("nav-click");
    geografis.classList.remove("nav-click");
    wisata.classList.remove("nav-click");
    kuliner.classList.remove("nav-click");
    budaya.classList.remove("nav-click");
});

sejarah.addEventListener("click", function() {
    sejarah.classList.add("nav-click");
    home.classList.remove("nav-click");
    geografis.classList.remove("nav-click");
    wisata.classList.remove("nav-click");
    kuliner.classList.remove("nav-click");
    budaya.classList.remove("nav-click");
});

geografis.addEventListener("click", function() {
    geografis.classList.add("nav-click");
    sejarah.classList.remove("nav-click");
    home.classList.remove("nav-click");
    wisata.classList.remove("nav-click");
    kuliner.classList.remove("nav-click");
    budaya.classList.remove("nav-click");
});

wisata.addEventListener("click", function() {
    wisata.classList.add("nav-click");
    sejarah.classList.remove("nav-click");
    geografis.classList.remove("nav-click");
    home.classList.remove("nav-click");
    kuliner.classList.remove("nav-click");
    budaya.classList.remove("nav-click");
});

kuliner.addEventListener("click", function() {
    kuliner.classList.add("nav-click");
    sejarah.classList.remove("nav-click");
    geografis.classList.remove("nav-click");
    wisata.classList.remove("nav-click");
    home.classList.remove("nav-click");
    budaya.classList.remove("nav-click");
});

budaya.addEventListener("click", function() {
    budaya.classList.add("nav-click");
    sejarah.classList.remove("nav-click");
    geografis.classList.remove("nav-click");
    wisata.classList.remove("nav-click");
    kuliner.classList.remove("nav-click");
    home.classList.remove("nav-click");
});



