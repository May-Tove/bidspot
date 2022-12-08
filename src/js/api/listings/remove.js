import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";

const endpoint = "/listings";
const method = "delete";

/**
 * Delete post using DELETE method
 * @param {number} id - id of the post to be deleted
 * @example
 * ```js
 * // When clicking delete button, the function will be called, deleting the post by id
 *  deleteBtn.addEventListener("click", () => {
      removePost(id);
    });
 * ```
 */
export async function removeListing(id) {
  if (!id) {
    throw new Error("Delete requires a listing ID");
  }

  const deleteListingUrl = `${api_auction_url}${endpoint}/${id}`;

  const response = await fetchWithAuth(deleteListingUrl, {
    method,
  });

  console.log(response);

  if (response.ok) {
    window.alert("Listing deleted");
    location.href = "/src/pages/listings/index.html";
    return await response.json();
  } else {
    throw new Error("Could not update listing");
  }
}
