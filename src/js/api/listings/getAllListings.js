import { api_auction_url } from "../constants.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";
/**
 * Get all listings from API using GET method(default)
 */
export async function getListings() {
  const getListingsUrl = `${api_auction_url}${endpoint}?sort=created&sortOrder=desc&_seller=true&_bids=true`;
  const response = await fetch(getListingsUrl);

  if (response.ok) {
    return await response.json();
  } else {
    const listingsContainer = document.querySelector("#listingsContainer");
    listingsContainer.innerHTML = await fetchError(response);
  }
}
