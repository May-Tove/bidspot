import { getProfileListings } from "../../api/profile/getProfileListings.js";
import { listingCard } from "../../templates/index.js";
import { noResultError } from "../../error/error.js";

export async function renderProfileListings() {
  const profileListingsContainer = document.querySelector("#profileListings");
  const listingsCount = document.querySelector("#listingsCount");

  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const profileListings = await getProfileListings(name);
  const output = profileListings.map(listingCard);

  if (profileListingsContainer) {
    listingsCount.innerHTML = `(${profileListings.length})`;

    if (profileListings.length === 0) {
      profileListingsContainer.innerHTML = noResultError("No listings yet");
    } else {
      profileListingsContainer.innerHTML = output.join("");
    }
  }
}
