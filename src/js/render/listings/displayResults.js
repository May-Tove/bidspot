import { noResultError } from "../../error/error.js";

/**
 * Displaying results from API call in their assigned containers
 * @param {array} result - Array from API call
 * @param {string} container - Container for where they should be displayed (innerHtml)
 * @param {string} template - Template to be called for mapping the result
 * @example
 * ```js
 * async function allListings() {
 * const listingsContainer = document.querySelector("#listingsContainer");
 * const listings = await getListings(`${listings_url}?${listings_flags}`);
 *
 * if (listings.length) {
 *      renderResult(listings, listingsContainer, listingCard);
 * }
 * }
 * ```
 */
export function renderResult(result, container, template, errorMessage) {
  const output = result.map(template);

  if (container) {
    if (result.length === 0) {
      container.innerHTML = noResultError(errorMessage);
    } else {
      container.innerHTML = output.join("");
    }
  }
}
