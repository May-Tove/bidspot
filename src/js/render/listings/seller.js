import { isLoggedIn } from "../../api/auth/state.js";
import { sellerLink } from "../../templates/index.js";

/**
 * If user is logged in, the link to a sellers profile in the details page will be active and possible to visit
 * @param {string} seller - name of the seller
 * @returns {string} replaces regular paragraph text with a link to sellers profile
 * @example
 * ```js
 * async function renderListingDetails() {
 * const id = getUrlSearchParam("id");
 * const result = await getListing(id);
 *
 * activateSellerLink(result.seller.name);
 * }}
 * ```
 */
export function activateSellerLink(seller) {
  const linkContainer = document.querySelector("#sellerLink");

  if (isLoggedIn) {
    linkContainer.innerHTML = sellerLink(seller);
  }
}
