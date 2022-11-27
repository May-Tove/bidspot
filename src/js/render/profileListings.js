import { getProfileListings } from "../api/profile/getProfileListings.js";
import { listingCard } from "../templates/index.js";

export async function renderProfileListings() {
  const profileListingsContainer = document.querySelector("#profileListings");

  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const profileListings = await getProfileListings(name);
  const output = profileListings.map(listingCard);

  console.log(profileListings);

  if (profileListingsContainer) {
    if (profileListings.length === 0) {
      profileListingsContainer.innerHTML = "No listings yet";
    } else {
      profileListingsContainer.innerHTML = output.join("");
    }
  }
}
