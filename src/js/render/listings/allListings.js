import { getListings } from "../../api/listings/getAllListings.js";
import { listings_url, listings_flags } from "../../api/constants.js";
import { listingCard } from "../../templates/index.js";
import { renderResult } from "./displayResults.js";

export async function allListings() {
  const listingsContainer = document.querySelector("#listingsContainer");
  const listings = await getListings(`${listings_url}?${listings_flags}`);

  if (listings.length) {
    renderResult(listings, listingsContainer, listingCard);
  }
}
