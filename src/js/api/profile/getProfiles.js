import { api_profile_url } from "../constants.js";
import { fetchWithAuth } from "../fetchWithToken.js";

/**
 * Get all profiles from API using GET method(default)
 */
export async function getProfiles() {
  const getProfilesUrl = api_profile_url;
  const response = await fetchWithAuth(getProfilesUrl);

  const profiles = await response.json();
  console.log(profiles);

  /*if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.status);
  }*/
}
