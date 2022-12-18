import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";

const endpoint = "/listings";
const method = "delete";

/**
 * Delete listing using DELETE method
 * @param {number} id - id of the listing to be deleted
 * @example
 * ```js
 * // When clicking delete button, the function will be called, deleting the listing by id
 *  deleteBtn.addEventListener("click", () => {
      removeListing(id);
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

  // Alert that listing got successfully deleted and redirect to listings page if response is OK
  if (response.ok) {
    window.alert("Listing deleted");
    location.href = "/src/pages/listings/index.html";
    return await response.json();
  } else {
    throw new Error("Could not delete listing");
  }
}
