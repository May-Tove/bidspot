export const carouselThumbnail = (img, index) => {
  const slideNumber = index + 1;

  return `<button data-bs-target="#mediaCarousel" data-bs-slide-to="${index}" class="btn border-0 p-0 indicator-btn" aria-label="Slide ${slideNumber}" aria-current="true">
              <img tabindex="0" src="${img}"  class="small-img rounded " alt="Image of listing">
          </button>
`;
};
