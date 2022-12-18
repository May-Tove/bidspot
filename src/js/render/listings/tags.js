import { tags } from "../../templates/listings/tags.js";

/**
 * Render all tags that belong to a listing
 * @param {array} allTags - array with all tags from the specific listing
 * @returns {array} array with all tags, they will be mapped and displayed to the details page
 * @example
 * ```js
 * async function renderListingDetails() {
 * const id = getUrlSearchParam("id");
 * const result = await getListing(id);
 *
 * renderTags(result.tags);
 * }}
 * ```
 */
export async function renderTags(allTags) {
  const tagContainer = document.querySelector("#tagContainer");

  if (tagContainer) {
    const output = allTags.map(tags);

    if (allTags.length === 0) {
      tagContainer.innerHTML = " ";
    } else {
      tagContainer.innerHTML = output.join("");
    }
  }
}
