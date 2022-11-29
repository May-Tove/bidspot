import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";

const endpoint = "/listings";
const method = "post";

export async function createBid(id, bidData) {
  const createBidUrl = `${api_auction_url}${endpoint}/${id}/bids?_seller=true&_bids=true`;

  const response = await fetchWithAuth(createBidUrl, {
    method,
    body: JSON.stringify(bidData),
  });

  console.log(response);
  const form = document.querySelector("#bidForm");
  if (response.ok) {
    form.reset();
    location.reload();
    return await response.json();
  }

  throw new Error(response.statusText);
}
