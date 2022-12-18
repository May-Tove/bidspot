import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";
const method = "post";

/**
 * Creating a bid on a listing using POST method
 * @param {string} id - the id of the listing to place a bid on
 * @param {number} bidData - amount from bid form
 */
export async function createBid(id, bidData) {
  const createBidUrl = `${api_auction_url}${endpoint}/${id}/bids`;

  const response = await fetchWithAuth(createBidUrl, {
    method,
    body: JSON.stringify(bidData),
  });

  const form = document.querySelector("#bidForm");
  const errorContainer = document.querySelector("#errorContainer");

  // Reload page and clear input field if response is OK
  if (response.ok) {
    location.reload();
    form.reset();
    return await response.json();
  } else {
    errorContainer.innerHTML = await fetchError(response);
  }
}
