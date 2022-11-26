import { getProfile } from "../api/profile/index.js";
import { isLoggedIn } from "../api/auth/index.js";
import { get } from "../storage/index.js";
import * as templates from "../templates/index.js";

export async function navbar() {
  const newListingBtn = document.querySelector("#newListingBtn");
  const notLoggedIn = document.querySelector("#profileNav");
  const profileDetail = document.querySelector("#profileDetail");
  const myPageLink = document.querySelector("#myPageLink");
  const currentUser = get("user").name;

  if (!isLoggedIn()) {
    notLoggedIn.innerHTML = `<a class="nav-link" href="/src/pages/profile/login/index.html"><i class="fa-regular fa-circle-user"></i> Login</a>`;
  } else {
    const loggedInUser = await getProfile(currentUser);

    profileDetail.innerHTML = templates.profileNav(loggedInUser);
    myPageLink.innerHTML = `
    <a href="/src/pages/profile/index.html?name=${currentUser}">
        <i class="fa-regular fa-circle-user"></i> View Profile
    </a>`;
    newListingBtn.innerHTML = templates.newListingBtn();
  }
}
