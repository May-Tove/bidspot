import { carouselImg, carouselThumbnail } from "../../templates/index.js";
import { noResultError } from "../../error/error.js";

/**
 * Render all images on a listing
 * @param {array} listing - Array with all listings from API
 * @returns {array} Array with all images that belongs to the specific listing
 * @example
 * ```js
 * async function renderListingDetails() {
 * const id = getUrlSearchParam("id");
 * const result = await getListing(id);
 *
 * const images = listing.media;
 *
 * renderListingImg(images);
 * }}
 * ```
 */
export async function renderListingImg(listing) {
  const carouselContainer = document.querySelector("#carouselContainer");
  const thumbnails = document.querySelector("#imagesSmall");

  if (carouselContainer) {
    const images = listing.media;
    const output = images.map(carouselImg);
    const small = images.map(carouselThumbnail);

    if (images.length === 0) {
      carouselContainer.innerHTML = noResultError("No Images");
    } else {
      carouselContainer.innerHTML = output.join("");
      thumbnails.innerHTML = small.join("");
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
