import { api_auction_url } from "../constants.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";
/**
 * Get all listings from API using GET method(default)
 */
export async function getLatestListings() {
  const getListingsUrl = `${api_auction_url}${endpoint}?limit=8&sort=created&sortOrder=desc&_seller=true&_bids=true`;
  const response = await fetch(getListingsUrl);

  if (response.ok) {
    return await response.json();
  } else {
    const listingsContainer = document.querySelector("#latestListings");
    listingsContainer.innerHTML = await fetchError(response);
  }
}
