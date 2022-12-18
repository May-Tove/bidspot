import { getListings } from "../api/listings/getAllListings.js";
import { listings_url, listings_flags } from "../api/constants.js";
import { listingCard } from "../templates/index.js";
import { renderResult } from "../render/index.js";

/**
 * Search listings by title or tags
 * @param {event} submit - event on submit
 * @example
 * ```js
 * searchInput.addEventListener("submit", handleSearch);
 * ```
 */

export async function handleSearch() {
  const listingsContainer = document.querySelector("#listingsContainer");
  const searchForm = document.querySelector("form#searchForm");

  if (searchForm) {
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const listings = await getListings(`${listings_url}?${listings_flags}`);
      const form = event.target;

      const searchTerm = form.term.value.toLowerCase();

      const searchResult = listings.filter(function (listing) {
        const title = listing.title.toLowerCase();

        const tags = Boolean(
          listing.tags
            .map((tag) => tag.toLowerCase())
            .filter((tag) => tag.includes(searchTerm)).length
        );

        return title.includes(searchTerm) || tags;
      });

      renderResult(searchResult, listingsContainer, listingCard);
      form.reset();
    });
  }
}
