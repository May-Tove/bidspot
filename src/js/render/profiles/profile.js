import { getProfile } from "../../api/profile/index.js";
import { isLoggedIn } from "../../api/auth/state.js";
import { getUrlSearchParam } from "../../tools/urlSearchParams.js";
import * as render from "../../render/index.js";
import * as listener from "../../handlers/index.js";
import * as templates from "../../templates/index.js";

/**
 * Displaying the profile details on the page using API call
 */
export async function renderProfile() {
  const profileContainer = document.querySelector("#profileDetailContainer");
  const profileBreadcrumb = document.querySelector("#profileBreadcrumb");
  const pageTitle = document.querySelector("#nameTitle");

  if (isLoggedIn && profileContainer) {
    const name = getUrlSearchParam("name");

    const profile = await getProfile(name);

    if (pageTitle && profileBreadcrumb) {
      pageTitle.innerHTML = `BidSpot | ${name}`;
      profileBreadcrumb.innerHTML = name;
    }

    profileContainer.innerHTML = templates.profilePage(profile);
    render.renderProfileListings();
    render.renderWins(profile);
    render.renderProfileBids();

    listener.updateProfileListener(profile);
  }
}
