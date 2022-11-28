import { getProfile } from "../api/profile/index.js";
import { isLoggedIn } from "../api/auth/state.js";
import { renderProfileListings } from "./profileListings.js";
import * as templates from "../templates/index.js";

/**
 * Displaying the profile details on the page using API call
 */
export async function renderProfile() {
  const profileContainer = document.querySelector("#profileDetailContainer");
  const winListings = document.querySelector("#winListings");
  const listingsCount = document.querySelector("#listingsCount");
  const winCount = document.querySelector("#winCount");

  if (isLoggedIn && profileContainer) {
    const url = new URL(location.href);
    const name = url.searchParams.get("name");

    const profile = await getProfile(name);

    listingsCount.innerHTML = `(${profile._count.listings})`;
    winCount.innerHTML = `(${profile.wins.length})`;
    console.log(profile);

    profileContainer.innerHTML = templates.profilePage(profile);

    renderProfileListings();

    if (winListings) {
      if (profile.wins.length === 0) {
        winListings.innerHTML = "No wins yet";
      } else {
        winListings.innerHTML = `<table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Listing ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>${profile.wins[0]}</td>
            </tr>
          </tbody>
        </table>`;
      }
    }
  }
}
