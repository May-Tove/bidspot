import { getProfile } from "../../api/profile/getProfile.js";
import { profileWins } from "../../templates/index.js";
import { noResultError } from "../../error/error.js";

export async function renderWins() {
  const winsContainer = document.querySelector("#winListings");
  const winCount = document.querySelector("#winCount");

  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const profile = await getProfile(name);
  const wins = profile.wins;
  const output = wins.map(profileWins);

  if (winsContainer) {
    winCount.innerHTML = `(${profile.wins.length})`;

    if (profile.wins.length === 0) {
      winsContainer.innerHTML = noResultError("No wins yet");
    } else {
      winsContainer.innerHTML = output.join("");
    }
  }
}
