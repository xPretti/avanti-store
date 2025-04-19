// VARIABLES
let currentFooterSpoilerElement = null;

export function handleClickSpoiler(object) {
   const parent = object.parentElement;
   if (!parent) {
      return;
   }
   parent.classList.toggle("open");
   if (currentFooterSpoilerElement) {
      if (currentFooterSpoilerElement !== parent) {
         currentFooterSpoilerElement.classList.remove("open");
      }
   }
   currentFooterSpoilerElement = parent;
}
