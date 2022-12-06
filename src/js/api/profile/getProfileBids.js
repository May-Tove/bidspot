import { api_profile_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";
import { fetchError } from "../../error/error.js";

const endpoint = "/bids";
/**
 * Get all listings from API using GET method(default)
 */
export async function getProfileBids(name) {
  const getProfileBidsUrl = `${api_profile_url}/${name}${endpoint}?sort=created&sortOrder=desc&_seller=true&_listings=true`;
  const response = await fetchWithAuth(getProfileBidsUrl);

  if (response.ok) {
    return await response.json();
  } else {
    const main = document.querySelector("#main");
    main.innerHTML = fetchError(response.statusText);
  }
}
