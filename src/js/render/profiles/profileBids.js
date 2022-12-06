import { getProfileBids } from "../../api/profile/getProfileBids.js";
import { profileBids } from "../../templates/index.js";
import { noResultError } from "../../error/error.js";

export async function renderProfileBids() {
  const profileBidsContainer = document.querySelector("#profileBids");
  const bidsCount = document.querySelector("#bidCount");

  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const bids = await getProfileBids(name);
  const output = bids.map(profileBids);

  if (profileBidsContainer) {
    bidsCount.innerHTML = `(${bids.length})`;

    if (bids.length === 0) {
      profileBidsContainer.innerHTML = noResultError("No bids made yet");
    } else {
      profileBidsContainer.innerHTML = output.join("");
    }
  }
}
