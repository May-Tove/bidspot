import { getListing } from "../../api/listings/getListing.js";
import { listingImg, indicator } from "../../templates/index.js";
import { noResultError } from "../../error/error.js";

export async function renderListingImg() {
  const carouselContainer = document.querySelector("#carouselContainer");
  const smallImages = document.querySelector("#imagesSmall");
  const nextBtn = document.querySelector("#nextBtn");
  const prevBtn = document.querySelector("#prevBtn");

  if (carouselContainer) {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    const listing = await getListing(id);

    const images = listing.media;
    const output = images.map(listingImg);
    const small = images.map(indicator);

    if (images.length === 0) {
      carouselContainer.innerHTML = noResultError("No Images");
    } else {
      carouselContainer.innerHTML = output.join("");
      smallImages.innerHTML = small.join("");
    }

    if (images.length === 1) {
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
    }
  }
}
