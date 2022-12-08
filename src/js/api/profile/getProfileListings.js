import { api_profile_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/listings";
/**
 * Get all listings from API using GET method(default)
 */
export async function getProfileListings(name) {
  const getProfileListingsUrl = `${api_profile_url}/${name}${endpoint}?sort=created&sortOrder=desc&_seller=true&_bids=true`;
  const response = await fetchWithAuth(getProfileListingsUrl);

  const profileListingsContainer = document.querySelector("#profileListings");

  if (response.ok) {
    return await response.json();
  } else {
    profileListingsContainer.innerHTML = await fetchError(response);
  }
}
