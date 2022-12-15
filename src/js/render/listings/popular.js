import { getPopularListings } from "../../api/listings/popularListings.js";
import { listingCard } from "../../templates/listings/listingCard.js";
import { noResultError } from "../../error/error.js";

export async function popularListings() {
  const listings = await getPopularListings();
  const popular = listings.sort((a, b) => b._count.bids - a._count.bids);
  const output = popular.map(listingCard);

  const listingsContainer = document.querySelector("#popularListings");

  if (listingsContainer) {
    if (output.length === 0) {
      listingsContainer.innerHTML = noResultError("No listings yet");
    } else {
      listingsContainer.innerHTML = output.join("");
    }
  }
}
