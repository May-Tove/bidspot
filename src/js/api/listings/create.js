import { api_auction_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";

const endpoint = "/listings";
const method = "post";

/**
 * Creating a post using POST method
 * @param {object} listingData - values from form input creates this object
 * @returns A new post to the API
 */
export async function createListing(listingData) {
  const createPostUrl = api_auction_url + endpoint;

  const response = await fetchWithAuth(createPostUrl, {
    method,
    body: JSON.stringify(listingData),
  });

  console.log(response);

  // if response is OK, reload the page and reset the form
  /*const form = document.querySelector("#createForm");
  if (response.ok) {
    window.alert("Listing successfully created");
    form.reset();
    location.href = "/src/pages/listings/index.html";
  }*/

  return await response.json();
}
