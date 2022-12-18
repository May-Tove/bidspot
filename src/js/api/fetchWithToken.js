import { get } from "../storage/index.js";

/**
 * Setting headers with JWT token to authenticate user
 */
export function headers() {
  const token = get("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Fetch with JWT access token to be able to get, create, update and remove listings and profile details
 * @param {String} url - API url to be passed in
 * @param {any} options - fetch options such as method and body
 * @example
 * ```js
 * async function createListing(listingData) {
 * // URL
 * const createListingUrl = api_auction_url + endpoint;
 *
 * // Call fetch function and pass in url and options as parameters
 * const response = await fetchWithAuth(createListingtUrl, {
 * method: "POST",
 * body: JSON.stringify(listingData),
 * });
 *
 * return await response.json();
 * }
 * ```
 */
export async function fetchWithAuth(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
