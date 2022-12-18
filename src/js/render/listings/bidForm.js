import { get } from "../../storage/index.js";
import { bidForm } from "../../templates/index.js";

/**
 * Displaying form to place bid, if listing belongs to the logged in user, the form vil not be displayed at all
 * @param {string} seller - the logged in user, string will be used to check if seller is the same as the logged in user
 * @example
 * ```js
 * function displayBidForm(seller) {
 * const formContainer = document.querySelector("#bidFormContainer");
 * const loggedInUser = get("user").name;
 *
 * if (!loggedInUser === seller) {
 *    formContainer.innerHTML = bidForm();
 * }
 * }
 *
 * displayBidForm(result.seller.name);
 * ```
 */
export function displayBidForm(seller) {
  const formContainer = document.querySelector("#bidFormContainer");

  if (formContainer) {
    formContainer.innerHTML = "";
    const loggedInUser = get("user").name;

    if (loggedInUser === seller) {
      formContainer.innerHTML = "";
    } else {
      formContainer.innerHTML = bidForm();
    }
  }
}
