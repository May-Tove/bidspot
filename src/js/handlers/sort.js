import { getListings } from "../api/listings/getAllListings.js";
import { listings_url, listings_flags } from "../api/constants.js";
import { listingCard } from "../templates/index.js";
import { renderResult } from "../render/index.js";

/**
 * Event listener that sorts posts on change
 */
export async function sortListings() {
  const listingContainer = document.querySelector("#listingsContainer");
  const sortSelector = document.querySelector("#sortListings");
  let sortedListings = [];

  if (sortSelector) {
    sortSelector.addEventListener("change", async (event) => {
      const listings = await getListings(`${listings_url}?${listings_flags}`);

      const sortSelected = event.target.value;
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
        case "popular":
          sortedListings = listings.sort(
            (a, b) => b._count.bids - a._count.bids
          );
          break;
      }

      renderResult(sortedListings, listingContainer, listingCard);
    });
  }
}
