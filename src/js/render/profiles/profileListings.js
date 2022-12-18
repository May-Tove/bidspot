import { getProfileListings } from "../../api/profile/getProfileListings.js";
import { getUrlSearchParam } from "../../tools/urlSearchParams.js";
import { listingCard } from "../../templates/index.js";
import { renderResult } from "../listings/displayResults.js";

/**
 * Render all listings a user has created
 */
export async function renderProfileListings() {
  const profileListingsContainer = document.querySelector("#profileListings");
  const listingsCount = document.querySelector("#listingsCount");

  const name = getUrlSearchParam("name");

  const profileListings = await getProfileListings(name);

  // Sort order so that active listings come first
  const sortedListings = profileListings.sort(
    (a, b) => new Date(b.endsAt) - new Date(a.endsAt)
  );

  listingsCount.innerHTML = `(${profileListings.length})`;
  renderResult(sortedListings, profileListingsContainer, listingCard);
}
