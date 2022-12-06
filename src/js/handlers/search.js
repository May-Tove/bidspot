import { listingCard } from "../templates/index.js";
import { getListings } from "../api/listings/getAllListings.js";
import { noResultError } from "../error/error.js";

const searchInput = document.querySelector("#search-input");

/**
 * Search for posts by title, body and/or author name on keyup
 * @param {event} keyup - event listens for keyup
 * @example
 * ```js
 * searchInput.addEventListener("keyup", handleSearch);
 * ```
 */
export async function handleSearch(e) {
  const listingsContainer = document.querySelector("#listingsContainer");

  if (listingsContainer) {
    const inputValue = e.target.value.toLowerCase();

    const listings = await getListings();

    const searchResult = listings.filter((listing) =>
      listing.title.toLowerCase().includes(inputValue)
    );
    const output = searchResult.map(listingCard);

    if (searchResult.length === 0) {
      listingsContainer.innerHTML = noResultError("No results found");
    } else {
      listingsContainer.innerHTML = output.join("");
    }
  }
}

if (searchInput) {
  searchInput.addEventListener("keyup", handleSearch);
}
