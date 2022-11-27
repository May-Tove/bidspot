import { api_profile_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";

/**
 * Getting profile details from API
 * @param {string} name
 * @returns profile details
 * @example
 * ```js
 * async function renderProfile() {
 * const profileContainer = document.querySelector("#profileDetailContainer");
 * const profile = await getProfile();
 *
 * profileContainer.innerHTML = templates.profileTemplate(profile);
 * }
 * ```
 */
export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }

  const getProfileUrl = `${api_profile_url}/${name}`;

  const response = await fetchWithAuth(getProfileUrl);

  return await response.json();
}
