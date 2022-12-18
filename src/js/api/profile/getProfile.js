import { api_profile_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

/**
 * Getting profile details from API
 * @param {string} name
 * @returns profile details
 * @example
 * ```js
 * async function renderProfile() {
 * // get name from url
 * const url = new URL(location.href);
 * const name = url.searchParams.get("name");
 * const bids = await getProfile(name);
 *
 * }
 * ```
 */
export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }

  const getProfileUrl = `${api_profile_url}/${name}`;

  const response = await fetchWithAuth(getProfileUrl);

  const mainContainer = document.querySelector("#main");

  if (response.ok) {
    return await response.json();
  } else {
    mainContainer.innerHTML = await fetchError(response);
  }
}
