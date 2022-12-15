import { api_auction_url } from "../constants.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";

export async function getPopularListings() {
  const getListingsUrl = `${api_auction_url}${endpoint}?limit=4&_seller=true&_bids=true&_active=true`;
  const response = await fetch(getListingsUrl);

  if (response.ok) {
    return await response.json();
  } else {
    const listingsContainer = document.querySelector("#popularListings");
    listingsContainer.innerHTML = await fetchError(response);
  }
}
