export const indicator = (img, index) => {
  const slideNumber = index + 1;

  return `<button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="${index}" class="btn border-0 p-0 img-indicator" aria-current="true" aria-label="Slide ${slideNumber}">
              <img src="${img}" class="small-img rounded img-indicator" alt="Image of listing">
          </button>
`;
};
