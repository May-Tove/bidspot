import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";
const method = "post";

/**
 * Creating a listing using POST method
 * @param {object} listingData - values from form input creates this object
 * @returns An object with details from the form
 */
export async function createListing(listingData) {
  const createPostUrl = api_auction_url + endpoint;

  const response = await fetchWithAuth(createPostUrl, {
    method,
    body: JSON.stringify(listingData),
  });

  // if response is OK, reload the page and reset the form
  const form = document.querySelector("#createForm");
  const errorContainer = document.querySelector("#errorContainer");

  if (response.ok) {
    window.alert("Listing successfully created");
    form.reset();
    location.href = "/src/pages/listings/index.html";
    return await response.json();
  } else {
    errorContainer.innerHTML = await fetchError(response);
  }
}
