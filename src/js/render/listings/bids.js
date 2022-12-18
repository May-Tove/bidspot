import { getListing } from "../../api/listings/index.js";
import { allBids } from "../../templates/index.js";
import { getUrlSearchParam } from "../../tools/urlSearchParams.js";
import { renderResult } from "./displayResults.js";

/**
 * Render all bids on a listing
 */
export async function renderAllBids() {
  const bidsContainer = document.querySelector("#allBidsContainer");

  if (bidsContainer) {
    const id = getUrlSearchParam("id");
    const listing = await getListing(id);
    const bids = listing.bids;

    bids.sort((a, b) => b.amount - a.amount);

    renderResult(bids, bidsContainer, allBids);
  }
}
