import { fetchError } from "../../error/error.js";

/**
 * Get all listings from API using GET method(default)
 * @param {string} url - API URL to fetch
 * @returns {Array} - Array with all listings
 * @example
 * ```js
 * const listings = await getListings(`https://nf-api.onrender.com/api/v1/auction/listings`);
 * ```
 */
export async function getListings(url) {
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  } else {
    const listingsContainer = document.querySelector("#listingsContainer");
    listingsContainer.innerHTML = await fetchError(response);
  }
}
