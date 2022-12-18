import { getListings } from "../../api/listings/getAllListings.js";
import { listings_url, listings_flags } from "../../api/constants.js";
import { listingCard } from "../../templates/index.js";
import { renderResult } from "./displayResults.js";

/**
 * Render the four latest listings from API
 */
export async function latestListings() {
  const latestUrl = `${listings_url}?${listings_flags}&limit=4&offset=0`;
  const listings = await getListings(latestUrl);

  const listingsContainer = document.querySelector("#latestListings");

  renderResult(listings, listingsContainer, listingCard);
}
