import { get } from "../../storage/index.js";
import { options } from "../../templates/listings/options.js";

/**
 * Function that checks if the user that is logged in is the same as the name of the owner of the listing
 * If it matches, the buttons with option to edit or delete a listing will be displayed
 * @param {string} seller - name of the seller
 * @example
 * ```js
 * async function renderListingDetails() {
 * const id = getUrlSearchParam("id");
 * const result = await getListing(id);
 *
 * displayListingOptions(result.seller.name);
 * }}
 * ```
 */
export function displayListingOptions(seller) {
  const dropdown = document.querySelector("#dropdownContainer");

  if (dropdown) {
    dropdown.innerHTML = "";
    const loggedInUser = get("user").name;

    if (loggedInUser === seller) {
      dropdown.innerHTML = options();
    }
  }
}
