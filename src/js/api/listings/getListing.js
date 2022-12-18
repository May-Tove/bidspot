import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";

/**
 * API call that gets one specific listing by id
 * @param {number} id
 * @returns Specific post
 * @example
 * ```js
 * // get id from url
 *  const url = new URL(location.href);
    const id = url.searchParams.get("id");

    // calling the function to get the post
    const result = await getListing(id);
 * ```
 */
export async function getListing(id) {
  if (!id) {
    throw new Error("Get requires a listing ID");
  }
  const getListingUrl = `${api_auction_url}${endpoint}/${id}?_seller=true&_bids=true`;

  const response = await fetchWithAuth(getListingUrl);

  if (response.ok) {
    return await response.json();
  } else {
    const listingContainer = document.querySelector("#listingContainer");
    listingContainer.innerHTML = await fetchError(response);
  }
}
