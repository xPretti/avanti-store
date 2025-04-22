export function addEventScroll(object) {
   object.addEventListener(
      "wheel",
      (e) => {
         handleScroll(object, e);
      },
      {passive: false}
   );
}

export function handleScroll(object, event) {
   if (!(event instanceof WheelEvent)) return;
   const atTop = object.scrollTop === 0;
   const atBottom = object.scrollHeight - object.scrollTop === object.clientHeight;

   const scrollingUp = event.deltaY < 0;
   const scrollingDown = event.deltaY > 0;

   if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
      event.preventDefault();
   }
}
