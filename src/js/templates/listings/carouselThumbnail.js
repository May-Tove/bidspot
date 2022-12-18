export const carouselThumbnail = (img, index) => {
  const slideNumber = index + 1;

  return `<button data-bs-target="#mediaCarousel" data-bs-slide-to="${index}" class="btn border-0 p-0" aria-label="Slide ${slideNumber}" aria-current="true" id="indicatorBtn">
              <img tabindex="0" src="${img}"  class="small-img rounded " alt="Image of listing" id="imgIndicator">
          </button>
`;
};
