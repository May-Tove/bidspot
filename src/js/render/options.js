import { get } from "../storage/index.js";
import { options } from "../templates/listings/options.js";

/**
 * Function that checks if the user that is logged in is the same as the name of the owner of the post
 * If it matches, the buttons with option to edit or delete a post will be displayed in the post
 * @param {string} author
 * @example
 * ```js
 * displayPostOptions(result.author.name)
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
