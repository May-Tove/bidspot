import { getListing } from "../../api/listings/getListing.js";
import { listingImg } from "../../templates/index.js";

export async function renderListingImg() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const carouselContainer = document.querySelector("#carouselContainer");

  if (carouselContainer) {
    const listing = await getListing(id);

    const images = listing.media;
    const output = images.map(listingImg);

    if (images.length === 0) {
      carouselContainer.innerHTML = "No Images";
    } else {
      carouselContainer.innerHTML = output.join("");
    }
  }
}
