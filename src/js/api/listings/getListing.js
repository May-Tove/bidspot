import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";

const endpoint = "/listings";

/**
 * API call that gets one specific post by id
 * @param {number} id
 * @returns Specific post
 * @example
 * ```js
 * // get id from url
 *  const url = new URL(location.href);
    const id = url.searchParams.get("id");

    // calling the function to get the post
    const result = await getPost(id);
 * ```
 */
export async function getListing(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  const getListingUrl = `${api_auction_url}${endpoint}/${id}?_seller=true&_bids=true`;

  const response = await fetchWithAuth(getListingUrl);
  console.log(response);
  return await response.json();
}