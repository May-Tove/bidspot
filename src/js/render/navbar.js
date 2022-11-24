import { getProfile } from "../api/profile/index.js";
import { isLoggedIn } from "../api/auth/index.js";
import * as templates from "../templates/index.js";

export async function navbar() {
  const newListingBtn = document.querySelector("#newListingBtn");
  const notLoggedIn = document.querySelector("#profileNav");
  const profileDetail = document.querySelector("#profileDetail");

  if (!isLoggedIn()) {
    notLoggedIn.innerHTML = `<a class="nav-link" href="/src/pages/profile/login/index.html"><i class="fa-regular fa-circle-user"></i> Login</a>`;
  } else {
    const profile = await getProfile();

    profileDetail.innerHTML = templates.profileNav(profile);
    newListingBtn.innerHTML = templates.newListingBtn();
  }
}
