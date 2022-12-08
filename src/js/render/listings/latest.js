import { getLatestListings } from "../../api/listings/latestListings.js";
import { listingCard } from "../../templates/listings/listingCard.js";
import { noResultError } from "../../error/error.js";

export async function latestListings() {
  const listings = await getLatestListings();
  const output = listings.map(listingCard);

  const listingsContainer = document.querySelector("#latestListings");

  if (listingsContainer) {
    if (output.length === 0) {
      listingsContainer.innerHTML = noResultError("No listings yet");
    } else {
      listingsContainer.innerHTML = output.join("");
    }
  }
}
