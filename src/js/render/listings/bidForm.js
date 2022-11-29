import { get } from "../../storage/index.js";
import { bidForm } from "../../templates/index.js";

/**
 * Function that checks if the user that is logged in is the same as the name of the owner of the post
 * If it matches, the buttons with option to edit or delete a post will be displayed in the post
 * @param {string} author
 * @example
 * ```js
 * displayPostOptions(result.author.name)
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
