import { getListings } from "../api/listings/getAllListings.js";
import { listingCard } from "../templates/index.js";

const sortSelector = document.querySelector("#sortListings");
let sortedListings = [];

/**
 * Event listener that sorts posts on change
 */
export async function sortListings(event) {
  const listingContainer = document.querySelector("#listingsContainer");

  if (listingContainer) {
    const sortSelected = event.target.value;

    const listings = await getListings();

    switch (sortSelected) {
      case "newest":
        sortedListings = listings;
        break;
      case "oldest":
        sortedListings = listings.sort(
          (a, b) => new Date(a.created) - new Date(b.created)
        );
        break;
      case "ending":
        sortedListings = listings.sort(
          (a, b) => new Date(a.endsAt) - new Date(b.endsAt)
        );
        break;
    }

    const output = sortedListings.map(listingCard);

    listingContainer.innerHTML = output.join("");
  }
}

if (sortSelector) {
  sortSelector.addEventListener("change", sortListings);
}
