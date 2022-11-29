import { getListings } from "../api/listings/get.js";
import { listingCard } from "../templates/index.js";

const sortSelector = document.querySelector("#sortListings");
let sortedListings = [];

/**
 * Event listener that sorts posts on change
 */
export async function sortListings(event) {
  const sortSelected = event.target.value;
  console.log(sortSelected);

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

  const listingContainer = document.querySelector("#listingsContainer");
  if (listingContainer) {
    listingContainer.innerHTML = output.join("");
  }
}

if (sortSelector) {
  sortSelector.addEventListener("change", sortListings);
}
