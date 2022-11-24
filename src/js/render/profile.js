import { getProfile } from "../api/profile/index.js";
import { isLoggedIn } from "../api/auth/state.js";
import * as templates from "../templates/index.js";

/**
 * Displaying the profile details on the page using API call
 */
export async function renderProfile() {
  const profileContainer = document.querySelector("#profileDetailContainer");
  const profileListings = document.querySelector("#profileListings");
  const winListings = document.querySelector("#winListings");

  if (!isLoggedIn()) {
    location.href = "/src/pages/profile/login/index.html";
  } else {
    const profile = await getProfile();

    if (profile) {
      if (profileContainer) {
        profileContainer.innerHTML = templates.profilePage(profile);
      }

      if (profileListings) {
        if (profile._count.listings === 0) {
          profileListings.innerHTML = "No listings yet";
        } else {
          profileListings.innerHTML = templates.listingCard(profile);
        }
      }

      if (winListings) {
        if (profile.wins.length === 0) {
          winListings.innerHTML = "No wins yet";
        } else {
          winListings.innerHTML = templates.listingCard(profile);
        }
      }
    }

    console.log(profile);
  }
}
