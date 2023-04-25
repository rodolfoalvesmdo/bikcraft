/******* Active Menu Link *******/
const links = document.querySelectorAll(".header-menu a");

function changeLinkColor(link) {
  if (document.location.href.includes(link.href)) {
    link.classList.add("active");
  }
}
links.forEach(changeLinkColor);


/******* Image Gallery *******/
const images = document.querySelectorAll(".bike-images img");
const imagemPrincipal = images[0];

function swapImage(event) {
  const principalSrc = imagemPrincipal.getAttribute("src");
  const clicadaSrc = event.currentTarget.getAttribute("src");

  const principalAlt = imagemPrincipal.getAttribute("alt");
  const clicadaAlt = event.currentTarget.getAttribute("alt");

  if (principalSrc !== clicadaSrc) {
    imagemPrincipal.setAttribute("src", clicadaSrc);
    imagemPrincipal.setAttribute("alt", clicadaAlt);
    event.currentTarget.setAttribute("src", principalSrc);
    event.currentTarget.setAttribute("alt", principalAlt);
  }
}

function clickEvent(image) {
  image.addEventListener("click", swapImage);
}

images.forEach(clickEvent);


/******* Auto Select Proposal Items *******/
const urlParams = new URLSearchParams(location.search);

function selectProposalItems(param) {
  const proposalItem = document.querySelector('[value="' + param + '"]');

  if (proposalItem) {
    proposalItem.checked = true;
  }
}

urlParams.forEach(selectProposalItems);


/******* FAQ *******/
const buttons = document.querySelectorAll(".faq button");

function expandFaqAnswer(event) {
  const faqButtonControls = event.currentTarget.getAttribute("aria-controls");
  const faqAnswer = document.getElementById(faqButtonControls);

  faqAnswer.classList.toggle("active-faq");

  const faqActive = faqAnswer.classList.contains("active-faq");
  event.currentTarget.setAttribute("aria-expanded", faqActive);
}

function faqClickEvent(button) {
  button.addEventListener("click", expandFaqAnswer);
}

buttons.forEach(faqClickEvent);