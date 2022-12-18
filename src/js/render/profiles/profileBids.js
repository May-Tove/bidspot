import { getProfileBids } from "../../api/profile/getProfileBids.js";
import { profileBids } from "../../templates/index.js";
import { getUrlSearchParam } from "../../tools/urlSearchParams.js";
import { renderResult } from "../listings/displayResults.js";

/**
 * Render all bids a user has placed on other listings
 */
export async function renderProfileBids() {
  const profileBidsContainer = document.querySelector("#profileBids");
  const bidsCount = document.querySelector("#bidCount");

  const name = getUrlSearchParam("name");

  const bids = await getProfileBids(name);

  bidsCount.innerHTML = `(${bids.length})`;
  renderResult(bids, profileBidsContainer, profileBids);
}
