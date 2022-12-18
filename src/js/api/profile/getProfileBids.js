import { api_profile_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/bids";

/**
 * Getting all profile bids
 * @param {string} name
 * @returns Array with all bids the user had made on other listings
 * @example
 * ```js
 * async function renderProfileBids() {
 *  // get name from url
 *  const url = new URL(location.href);
    const name = url.searchParams.get("name");
 * const bids = await getProfileBids(name);
 *
 * }
 * ```
 */
export async function getProfileBids(name) {
  const getProfileBidsUrl = `${api_profile_url}/${name}${endpoint}?sort=created&sortOrder=desc&_seller=true&_listings=true`;
  const response = await fetchWithAuth(getProfileBidsUrl);

  const profileBidsContainer = document.querySelector("#profileBids");

  if (response.ok) {
    return await response.json();
  } else {
    profileBidsContainer.innerHTML = await fetchError(response);
  }
}
