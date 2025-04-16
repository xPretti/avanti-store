let currentFooterSpoilerElement = null;

/**
 * Evento de click no spoiler do footer
 */
document.querySelectorAll(".footer-spoiler-btn").forEach((footerSpoiler) => {
  footerSpoiler.addEventListener("click", () => {
    const parent = footerSpoiler.parentElement;
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
  });
});

/**
 * Evento de pesquisa do header
 */
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  if (form instanceof HTMLFormElement) {
    const input = form.querySelector("#searchInput");
    if (input instanceof HTMLInputElement) {
      const valor = input.value.trim();
      if (valor) {
        console.log("Você buscou por:", valor);
      }
    }
  }
}

// const form = document.getElementById("searchForm");
// const input = document.getElementById("searchInput");

// form &&
//   input &&
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (input instanceof HTMLInputElement) {
//       const termo = input.value.trim();

//       if (termo) {
//         console.log("Buscando por:", termo);
//       }
//     }
//   });
