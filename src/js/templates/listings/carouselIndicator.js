export const indicator = (img, index) => {
  const slideNumber = index + 1;

  let activeClass = "";
  if (index === slideNumber) {
    activeClass = "active";
  }

  return `<button tabindex="0" data-bs-target="#carouselIndicators" data-bs-slide-to="${index}" class="btn border-0 p-0 img-indicator ${activeClass}" aria-current="true" aria-label="Slide ${slideNumber}" id="indicatorBtn">
              <img tabindex="0" src="${img}" class="small-img rounded img-indicator" alt="Image of listing">
          </button>
`;
};
