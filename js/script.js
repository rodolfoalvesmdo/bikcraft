/******* Active Menu Link *******/
const links = document.querySelectorAll(".header-menu a");

function changeLinkColor(link) {
  if(document.location.href.includes(link.href)) {
    link.classList.add("active");
  }
}
links.forEach(changeLinkColor)


/******* Image Gallery *******/
const images = document.querySelectorAll(".bike-images img");
const imagemPrincipal = images[0];

function swapImage(event) {
  const principalSrc = imagemPrincipal.getAttribute("src");
  const clicadaSrc = event.currentTarget.getAttribute("src");

  const principalAlt = imagemPrincipal.getAttribute("alt");
  const clicadaAlt = event.currentTarget.getAttribute("alt");

  if (principalSrc !== clicadaSrc) {
    imagemPrincipal.setAttribute("src", clicadaSrc);imagemPrincipal.setAttribute("alt", clicadaAlt);
    event.currentTarget.setAttribute("src", principalSrc);
    event.currentTarget.setAttribute("alt", principalAlt);
  }
}

function clickEvent(image) {
  image.addEventListener("click", swapImage);
}

images.forEach(clickEvent);
