import {MenuHamburger} from "../classes/MenuHamburger.js";

const dropdownMenu = document.getElementById("dropdown"); //
const dropdownMenuContainer = document.getElementById("dropdown-content"); //
const hamburger = document.getElementById("hamburger-desktop");

let hamburgerMenu = undefined;
if (dropdownMenu && dropdownMenuContainer) {
   if (hamburger) {
      hamburger.addEventListener("click", () => hamburgerMenu.handleClick());
      hamburger.addEventListener("mouseover", () => hamburgerMenu.handleHover());
      hamburgerMenu = new MenuHamburger(hamburger, dropdownMenu, dropdownMenuContainer);
   }
}

export function handleExitDocumentHamburger(event) {
   if (!hamburgerMenu || !event) return;
   if (hamburger && dropdownMenu) {
      if (hamburger.contains(event.target) || dropdownMenu.contains(event.target)) return;
   }
   hamburgerMenu.disableMenu();
}

export function handleClickDocumentHamburger(event) {
   if (!hamburgerMenu || !event) return;

   if (hamburger && dropdownMenu) {
      if (hamburger.contains(event.target) || dropdownMenu.contains(event.target)) return;
   }
   hamburgerMenu.disableMenu();
}

// HAMBURGER MOBILE PROVISÓRIO

const menuMobile = document.getElementById("hamburger-mobile");
const menuMobileClose = document.getElementById("dropdown-mobile-close");
const dropdownMenuMobile = document.getElementById("dropdown-mobile");

menuMobile?.addEventListener("click", () => handleOpenDropdownMobile());
menuMobileClose?.addEventListener("click", () => handleCloseDropdownMobile());

function handleOpenDropdownMobile() {
   dropdownMenuMobile?.classList.add("active");
}

function handleCloseDropdownMobile() {
   dropdownMenuMobile?.classList.remove("active");
}
