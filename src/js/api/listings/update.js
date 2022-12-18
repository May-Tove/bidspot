import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";

const endpoint = "/listings";
const method = "put";

/**
 * Updating a listing using PUT method
 * @param {object} listingData - values from the inputs in the form create new object to be updated
 * @returns Updated value to existing listing
 * @example
 * ```js
 * // When form is submitted, the function will be called.
 * // Replacing the old values with the new entries from the form
 *      form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      listing.id = id;

      // Calling function
      updateListing(listing);
    });
 * ```
 */
export async function updateListing(listingData) {
  if (!listingData.id) {
    throw new Error("Update requires a listing ID");
  }

  const updateListingUrl = `${api_auction_url}${endpoint}/${listingData.id}`;

  const response = await fetchWithAuth(updateListingUrl, {
    method,
    body: JSON.stringify(listingData),
  });

  // Reload page if response is OK
  if (response.ok) {
    location.reload();
    return await response.json();
  } else {
    alert("There was a problem updating the listing");
  }
}
