import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";
const method = "post";

export async function createBid(id, bidData) {
  const createBidUrl = `${api_auction_url}${endpoint}/${id}/bids`;

  const response = await fetchWithAuth(createBidUrl, {
    method,
    body: JSON.stringify(bidData),
  });

  const form = document.querySelector("#bidForm");
  const errorContainer = document.querySelector("#errorContainer");

  if (response.ok) {
    location.reload();
    form.reset();
    return await response.json();
  } else {
    errorContainer.innerHTML = await fetchError(response);
  }
}
