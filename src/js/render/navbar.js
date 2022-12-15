import { getProfile } from "../api/profile/index.js";
import { isLoggedIn } from "../api/auth/index.js";
import { get } from "../storage/index.js";
import { logoutListener } from "../handlers/auth/logout.js";
import * as templates from "../templates/index.js";

export async function navbar() {
  const newListingBtn = document.querySelector("#newListingBtn");
  const profileNav = document.querySelector("#profileNav");

  if (isLoggedIn()) {
    const loggedInUser = await getProfile(get("user").name);

    profileNav.innerHTML = templates.profileLink(loggedInUser);
    newListingBtn.innerHTML = templates.newListingBtn();

    logoutListener();
  }
}
