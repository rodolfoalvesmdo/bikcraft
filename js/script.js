/******* Active Menu Link *******/
const links = document.querySelectorAll(".header-menu a");

function changeLinkColor(link) {
  if (document.location.href.includes(link.href)) {
    link.classList.add("active");
  }
}
links.forEach(changeLinkColor);


/******* Image Gallery *******/
const bikesImg = document.querySelectorAll(".bike-images img");
const imagesGallery = document.querySelector(".bike-images");

function changeBikeImage(event) {
  const img = event.currentTarget;
  if(matchMedia("(min-width: 360px)").matches) {
    imagesGallery.prepend(img);
  }
}

function galleryEvents(bikeImg) {
  bikeImg.addEventListener("click", changeBikeImage);
}

bikesImg.forEach(galleryEvents);


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