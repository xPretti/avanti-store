let isDown = false;
let startX;
let scrollLeft;
const scrollSpeed = 1.5;

export function addEventScroll(object) {
   object.addEventListener(
      "wheel",
      (e) => {
         handleScroll(object, e);
      },
      {passive: false}
   );
}

export function addEventScrollMobile(object) {
   object.addEventListener("mousedown", (e) => {
      isDown = true;
      object.classList.add("grab");
      startX = e.pageX - object.offsetLeft;
      scrollLeft = object.scrollLeft;
   });
   object.addEventListener("mouseleave", () => {
      isDown = false;
      object.classList.remove("grab");
   });
   object.addEventListener("mouseup", () => {
      isDown = false;
      object.classList.remove("grab");
   });
   object.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - object.offsetLeft;
      const walk = (x - startX) * scrollSpeed;
      object.scrollLeft = scrollLeft - walk;
   });
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
