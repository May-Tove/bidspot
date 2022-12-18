import { fetchError } from "../../error/error.js";

/**
 * Get all listings from API using GET method(default)
 */
export async function getListings(url) {
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  } else {
    const listingsContainer = document.querySelector("#listingsContainer");
    listingsContainer.innerHTML = await fetchError(response);
  }
}
