import { getListing } from "../api/listings/getListing.js";
import { listingImg } from "../templates/index.js";

export async function renderListingImg() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const listing = await getListing(id);

  const images = listing.media;
  const output = images.map(listingImg);

  const carouselContainer = document.querySelector("#carouselContainer");

  if (carouselContainer) {
    if (images.length === 0) {
      carouselContainer.innerHTML = "No bids yet";
    } else {
      carouselContainer.innerHTML = output.join("");
    }
  }
}
