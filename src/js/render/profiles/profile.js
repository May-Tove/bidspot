import { getProfile } from "../../api/profile/index.js";
import { isLoggedIn } from "../../api/auth/state.js";
import * as render from "../../render/index.js";
import * as templates from "../../templates/index.js";

/**
 * Displaying the profile details on the page using API call
 */
export async function renderProfile() {
  const profileContainer = document.querySelector("#profileDetailContainer");
  const pageTitle = document.querySelector("#nameTitle");

  if (isLoggedIn && profileContainer) {
    const url = new URL(location.href);
    const name = url.searchParams.get("name");

    const profile = await getProfile(name);

    if (pageTitle) {
      pageTitle.innerHTML = `BidSpot | ${name}`;
    }

    profileContainer.innerHTML = templates.profilePage(profile);
    render.renderProfileListings();
    render.renderWins();
  }
}
