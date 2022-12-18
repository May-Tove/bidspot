import { carouselImg, carouselThumbnail } from "../../templates/index.js";
import { noResultError } from "../../error/error.js";

export async function renderListingImg(listing) {
  const carouselContainer = document.querySelector("#carouselContainer");
  const smallImages = document.querySelector("#imagesSmall");

  if (carouselContainer) {
    const images = listing.media;
    const output = images.map(carouselImg);
    const small = images.map(carouselThumbnail);

    if (images.length === 0) {
      carouselContainer.innerHTML = noResultError("No Images");
    } else {
      carouselContainer.innerHTML = output.join("");
      smallImages.innerHTML = small.join("");
    }

    // Hide carousel elements if there is one or less images
    const indicatorBtn = document.querySelector("#indicatorBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const prevBtn = document.querySelector("#prevBtn");

    if (images.length <= 1) {
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
      if (indicatorBtn) {
        indicatorBtn.style.display = "none";
      }
    }
  }
}
