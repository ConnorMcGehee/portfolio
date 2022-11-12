const $ = (elementId) => {
    return document.getElementById(elementId);
}

const menuButton = $("menu-button");
const navList = $("nav-list");
const logo = $("logo");
const mintGreenFilter = "brightness(0) saturate(100%) invert(75%) sepia(90%) saturate(1163%) hue-rotate(104deg) brightness(105%) contrast(101%)";

let isNavOpen = false;

menuButton.addEventListener("click", (e) => {
    if (!isNavOpen && !tabletMediaQuery.matches) {
        navList.style.display = "block";
        menuButton.style.filter = mintGreenFilter;
        isNavOpen = true;
    } else {
        navList.style.display = "none";
        menuButton.style.filter = "none";
        isNavOpen = false;
    }
    e.stopPropagation();
});

let navElement = document.querySelector('nav');
window.addEventListener("click", (event) => {
    if (isNavOpen && !navElement.contains(event.target)) {
        navList.style.display = "none";
        menuButton.style.filter = "none";
        isNavOpen = false;
    }
})
window.addEventListener("touchstart", (event) => {
    if (isNavOpen && !navElement.contains(event.target))  {
        navList.style.display = "none";
        menuButton.style.filter = "none";
        isNavOpen = false;
    }
})

menuButton.addEventListener("mouseover", () => {

    menuButton.style.filter = mintGreenFilter;
    menuButton.style.cursor = "pointer";
});
menuButton.addEventListener("mouseout", () => {

    menuButton.style.cursor = "initial";
    if (!isNavOpen) {
        menuButton.style.filter = "none";
    }
});

let tabletMediaQuery = window.matchMedia('(min-width: 40.063em)');

const widthChangeCallback = (tabletMediaQuery) => {
    if (tabletMediaQuery.matches) {
        navList.style.display = "flex";
    }
    else {
        navList.style.display = "none";
    }
    isNavOpen = false;
}

tabletMediaQuery.addEventListener('change', widthChangeCallback);