import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";
const method = "post";
const errorContainer = document.querySelector("#errorContainer");
console.log(errorContainer);

export async function createBid(id, bidData) {
  const createBidUrl = `${api_auction_url}${endpoint}/${id}/bids`;

  const response = await fetchWithAuth(createBidUrl, {
    method,
    body: JSON.stringify(bidData),
  });

  console.log(response);
  const form = document.querySelector("#bidForm");
  if (response.ok) {
    location.reload();
    form.reset();
    return await response.json();
  } else {
    const message = await response.text();
    errorContainer.innerHTML = fetchError(
      `Error: ${response.status}, ${message}`
    );
  }
}
