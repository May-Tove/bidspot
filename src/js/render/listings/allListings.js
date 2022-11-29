import { getListings } from "../../api/listings/getAllListings.js";
import { listingCard } from "../../templates/listings/listingCard.js";

export async function renderListings() {
  const listings = await getListings();
  const output = listings.map(listingCard);

  const listingsContainer = document.querySelector("#listingsContainer");

  if (listingsContainer) {
    if (output.length === 0) {
      listingsContainer.innerHTML = "No listings yet";
    } else {
      listingsContainer.innerHTML = output.join("");
    }
  }
  console.log(listings);
}
