import { api_profile_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";

/**
 * Getting all profile listings from API
 * @param {string} name
 * @returns Array with all listings the user has created
 * @example
 * ```js
 * async function renderProfileListings() {
 * // get name from url
 * const url = new URL(location.href);
 * const name = url.searchParams.get("name");
 * const listings = await getProfileListings(name);
 *
 * }
 * ```
 */
export async function getProfileListings(name) {
  const getProfileListingsUrl = `${api_profile_url}/${name}${endpoint}?sort=created&sortOrder=desc&_seller=true&_bids=true`;
  const response = await fetchWithAuth(getProfileListingsUrl);

  const profileListingsContainer = document.querySelector("#profileListings");

  if (response.ok) {
    return await response.json();
  } else {
    profileListingsContainer.innerHTML = await fetchError(response);
  }
}
